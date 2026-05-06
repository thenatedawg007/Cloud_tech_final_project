// ─── STATE ───────────────────────────────────────────────────────────────────
let ingredients = [];
let mealPlan = {};
let chatHistory = [];
let loggedIn = false;
let editTarget = null;

const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const SLOTS = ['Breakfast','Lunch','Dinner'];
const QUICK = ['eggs','pasta','rice','chicken','onion','garlic','tomatoes','cheese','milk','bread','potatoes','carrots','beans','spinach','ground beef'];

// ─── LOCAL DB ────────────────────────────────────────────────────────────────
function updateApiStatus(){
  document.getElementById('api-dot').classList.add('connected');
  document.getElementById('api-status-text').textContent='Recipe DB ready';
}

function requireApiKey(){ return true; } // always available — no key needed

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function showPage(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  const map={home:0,generate:1,planner:2,stores:3,chat:4};
  const tabs = document.querySelectorAll('.nav-tab');
  if(map[p]!==undefined) tabs[map[p]].classList.add('active');
}

// ─── MODALS ──────────────────────────────────────────────────────────────────
function openApiModal(){ /* no-op — no API needed */ }
function closeApiModal(){}

function openLoginModal(){ document.getElementById('login-modal').classList.add('open'); }
function closeLoginModal(){ document.getElementById('login-modal').classList.remove('open'); }

function doLogin(){
  const name = document.getElementById('login-name').value.trim() || 'Student';
  loggedIn=true;
  document.getElementById('user-label').textContent=name;
  document.getElementById('avatar-circle').textContent=name[0].toUpperCase();
  closeLoginModal();
}

function openEditModal(day, slot){
  editTarget={day,slot};
  document.getElementById('edit-modal-title').textContent=`${slot} — ${day}`;
  document.getElementById('edit-modal-sub').textContent='';
  const existing = mealPlan[day]&&mealPlan[day][slot];
  document.getElementById('edit-meal-name').value = existing?existing.name:'';
  document.getElementById('edit-meal-cost').value = existing?existing.cost:'';
  document.getElementById('edit-modal').classList.add('open');
}
function closeEditModal(){ document.getElementById('edit-modal').classList.remove('open'); editTarget=null; }

function saveEditMeal(){
  if(!editTarget) return;
  const name = document.getElementById('edit-meal-name').value.trim();
  const cost = parseFloat(document.getElementById('edit-meal-cost').value)||0;
  if(!name){ alert('Please enter a meal name'); return; }
  const {day,slot} = editTarget;
  if(!mealPlan[day]) mealPlan[day]={};
  mealPlan[day][slot]={name,cost};
  savePlan();
  renderWeekGrid();
  updateSummary();
  closeEditModal();
}

function clearMealSlot(){
  if(!editTarget) return;
  const {day,slot}=editTarget;
  if(mealPlan[day]) delete mealPlan[day][slot];
  savePlan();
  renderWeekGrid();
  updateSummary();
  closeEditModal();
}

// ─── INGREDIENTS ─────────────────────────────────────────────────────────────
function initQuickTags(){
  const el = document.getElementById('quick-tags');
  QUICK.forEach(i=>{
    const b=document.createElement('button');
    b.className='quick-tag'; b.textContent=i;
    b.onclick=()=>{ if(!ingredients.includes(i)){ ingredients.push(i); renderTags(); } };
    el.appendChild(b);
  });
}

function addIngredient(){
  const inp=document.getElementById('ing-input');
  const val=inp.value.trim().toLowerCase();
  if(val && !ingredients.includes(val)){ ingredients.push(val); renderTags(); }
  inp.value='';inp.focus();
}

function removeIngredient(i){ ingredients.splice(i,1); renderTags(); }

function renderTags(){
  document.getElementById('ing-tags').innerHTML=ingredients.map((t,i)=>
    `<span class="tag">${t}<button onclick="removeIngredient(${i})" title="Remove">×</button></span>`
  ).join('');
}

// ─── GENERATE RECIPES ────────────────────────────────────────────────────────
async function generateRecipe(){
  if(ingredients.length===0){ alert('Please add at least one ingredient!'); return; }
  const btn=document.getElementById('gen-btn');
  btn.disabled=true; btn.textContent='Searching...';
  document.getElementById('results-area').innerHTML='<div class="loading"><div class="spinner"></div><p>Finding matching recipes...</p></div>';

  const diet=document.getElementById('diet').value;
  const mtype=document.getElementById('meal-type').value;
  const time=document.getElementById('cook-time').value;
  const budgetStr=document.getElementById('budget').value;

  // Parse budget ceiling
  const budgetMap={'Under $3':3,'Under $5':5,'Under $8':8,'Under $12':12};
  const maxCost = budgetMap[budgetStr] || Infinity;

  // Small delay for UX feel
  await new Promise(r=>setTimeout(r,400));

  const results = searchRecipes({
    ingredients,
    mealType: mtype,
    dietary: diet,
    maxCost,
    maxTime: time,
    limit: 4
  });

  if(results.length === 0){
    document.getElementById('results-area').innerHTML=`<div class="card" style="text-align:center;padding:2rem">
      <p style="font-size:2rem;margin-bottom:0.5rem">🔍</p>
      <p style="font-weight:500;margin-bottom:0.5rem">No recipes found</p>
      <p style="color:var(--muted);font-size:14px">Try removing some filters or adding different ingredients.</p>
    </div>`;
  } else {
    renderRecipes(results);
  }

  btn.disabled=false; btn.textContent='✦ Find matching recipes';
}

function renderRecipes(recipes){
  window._lastRecipes=recipes;
  document.getElementById('results-area').innerHTML=recipes.map((r,ri)=>`
  <div class="recipe-card">
    <div class="recipe-header">
      <div>
        <div class="recipe-name">${escHtml(r.name)}</div>
        <div class="recipe-meta">
          <span>⏱ ${escHtml(r.cookTime)}</span>
          <span>👤 ${r.servings} servings</span>
          <span>${escHtml(r.mealType||'')}</span>
        </div>
        <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
          ${(r.tags||[]).map(t=>`<span class="badge">${escHtml(t)}</span>`).join('')}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div class="cost-big">$${(+r.totalCost).toFixed(2)}<small>total · $${(+r.costPerServing).toFixed(2)}/serving</small></div>
        <button class="action-btn primary" style="margin-top:8px;font-size:12px" onclick="addToPlan('${escAttr(r.name)}','${(+r.totalCost).toFixed(2)}')">+ Add to plan</button>
      </div>
    </div>
    <div class="two-col-recipe">
      <div>
        <div class="section-label">Ingredients</div>
        <ul class="ingredient-list">
          ${(r.ingredients||[]).map(i=>`<li><span>${escHtml(i.amount)} ${escHtml(i.name)}</span><div class="ing-right"><span class="store-price">$${(+(i.estimatedPrice||0)).toFixed(2)}</span><div class="store-name">${escHtml(i.cheapestStore||'')}</div></div></li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="section-label">Instructions</div>
        <ol class="steps-list">${(r.steps||[]).map(s=>`<li>${escHtml(s)}</li>`).join('')}</ol>
      </div>
    </div>
    <div class="recipe-actions">
      <button class="action-btn primary" onclick="addToPlan('${escAttr(r.name)}','${(+r.totalCost).toFixed(2)}')">📅 Add to plan</button>
      <button class="action-btn" onclick="printRecipe(${ri})">🖨 Print</button>
    </div>
  </div>`).join('');
}

function addToPlan(name, cost){
  const day=DAYS[Math.floor(Math.random()*7)];
  const slot=SLOTS[Math.floor(Math.random()*3)];
  if(!mealPlan[day]) mealPlan[day]={};
  mealPlan[day][slot]={name,cost:parseFloat(cost)||0};
  savePlan(); renderWeekGrid(); updateSummary();
  showPage('planner');
}

// ─── WEEK PLANNER ─────────────────────────────────────────────────────────────
function buildWeekGrid(){
  const today=new Date().getDay();
  const todayMap={1:'Mon',2:'Tue',3:'Wed',4:'Thu',5:'Fri',6:'Sat',0:'Sun'};
  document.getElementById('week-grid').innerHTML=DAYS.map(d=>`
  <div class="day-col">
    <div class="day-head${todayMap[today]===d?' today':''}">${d}</div>
    ${SLOTS.map(s=>`
    <div class="meal-slot" onclick="openEditModal('${d}','${s}')" id="slot-${d}-${s}">
      <div class="meal-type">${s}</div>
      <div class="meal-name-cell empty-slot" id="meal-${d}-${s}">+ add</div>
    </div>`).join('')}
  </div>`).join('');
}

function renderWeekGrid(){
  DAYS.forEach(d=>{
    SLOTS.forEach(s=>{
      const el=document.getElementById('meal-'+d+'-'+s);
      if(!el) return;
      const m=mealPlan[d]&&mealPlan[d][s];
      if(m){
        el.className='meal-name-cell';
        el.innerHTML=`${escHtml(m.name)}<div class="meal-cost-cell">$${(+m.cost).toFixed(2)}</div>`;
      } else {
        el.className='meal-name-cell empty-slot';
        el.innerHTML='+ add';
      }
    });
  });
}

function updateSummary(){
  let totalMealPortionCost = 0;
  let count = 0;
  const uniqueIngredients = new Map();

  DAYS.forEach(d => {
    if (mealPlan[d]) {
      SLOTS.forEach(s => {
        if (mealPlan[d][s]) {
          count++;
          totalMealPortionCost += (+mealPlan[d][s].cost) || 0;

          // Look up the recipe to find its full product costs
          const recipe = RECIPE_DB.find(r => r.name === mealPlan[d][s].name);
          if (recipe) {
            recipe.ingredients.forEach(ing => {
              // We use the name as a key to avoid double-counting the same product
              if (!uniqueIngredients.has(ing.name.toLowerCase())) {
                uniqueIngredients.set(ing.name.toLowerCase(), ing.estimatedPrice || 0);
              }
            });
          }
        }
      });
    }
  });

  // Calculate the total based on full products needed
  let totalProductCost = 0;
  uniqueIngredients.forEach(price => totalProductCost += price);

  document.getElementById('total-cost').textContent = '$' + totalProductCost.toFixed(2);
  document.getElementById('total-meals').textContent = count;
  document.getElementById('avg-cost').textContent = count ? '$' + (totalProductCost / count).toFixed(2) : '$0';
  document.getElementById('savings').textContent = '$' + (Math.max(0, count * 8.5 - totalProductCost)).toFixed(2);
}

function savePlan(){ try{ localStorage.setItem('mm_plan',JSON.stringify(mealPlan)); }catch(e){} }
function loadPlan(){ try{ const d=localStorage.getItem('mm_plan'); if(d) mealPlan=JSON.parse(d); }catch(e){} }

function clearPlan(){ if(confirm('Clear your entire week plan?')){ mealPlan={}; savePlan(); renderWeekGrid(); updateSummary(); } }

async function generateWeekPlan(){
  const btn=document.getElementById('fill-week-btn');
  btn.disabled=true; btn.textContent='Filling...';
  await new Promise(r=>setTimeout(r,300));

  const breakfasts = RECIPE_DB.filter(r=>r.mealType==='Breakfast');
  const lunches    = RECIPE_DB.filter(r=>r.mealType==='Lunch');
  const dinners    = RECIPE_DB.filter(r=>r.mealType==='Dinner');
  const pick = arr => arr[Math.floor(Math.random()*arr.length)];

  mealPlan = {};
  DAYS.forEach(d=>{
    const b=pick(breakfasts), l=pick(lunches), di=pick(dinners);
    mealPlan[d]={
      Breakfast:{ name:b.name,  cost:b.totalCost  },
      Lunch:    { name:l.name,  cost:l.totalCost  },
      Dinner:   { name:di.name, cost:di.totalCost },
    };
  });
  savePlan(); renderWeekGrid(); updateSummary();
  btn.disabled=false; btn.textContent='✦ Fill my week';
}

function printGroceryList(){
  if(!Object.keys(mealPlan).length){ alert('No meals planned yet!'); return; }

  // Build meal schedule rows and collect all ingredients
  const mealRows = [];
  const ingredientMap = {}; // name → {amount, estimatedPrice, cheapestStore}

  DAYS.forEach(d=>{
    if(!mealPlan[d]) return;
    SLOTS.forEach(s=>{
      const m = mealPlan[d][s];
      if(!m) return;
      mealRows.push({ day:d, slot:s, name:m.name, cost:m.cost });

      // Look up recipe in DB to get ingredients
      const recipe = RECIPE_DB.find(r=>r.name === m.name);
      if(recipe){
        recipe.ingredients.forEach(ing=>{
          const key = ing.name.toLowerCase();
          if(ingredientMap[key]){
            // Already listed — just note it's used in multiple meals
            ingredientMap[key].count++;
          } else {
            ingredientMap[key] = {
              name: ing.name,
              amount: ing.amount,
              estimatedPrice: ing.estimatedPrice,
              cheapestStore: ing.cheapestStore,
              count: 1
            };
          }
        });
      }
    });
  });

  const totalMealCost = mealRows.reduce((sum,m)=>sum+(+m.cost||0),0);
  const totalIngCost  = Object.values(ingredientMap).reduce((sum,i)=>sum+(i.estimatedPrice||0),0);

  // Group ingredients by store
  const byStore = {};
  Object.values(ingredientMap).forEach(ing=>{
    const store = ing.cheapestStore || 'Other';
    if(!byStore[store]) byStore[store]=[];
    byStore[store].push(ing);
  });

  const storeHTML = Object.entries(byStore).map(([store,ings])=>`
    <h3 style="color:#2D4A3E;margin:1.5rem 0 0.5rem;border-bottom:1px solid #D4E0D8;padding-bottom:4px">🏪 ${store}</h3>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr style="color:#6B8A7A;font-size:12px;text-transform:uppercase;letter-spacing:0.5px">
        <th style="text-align:left;padding:4px 8px">☐</th>
        <th style="text-align:left;padding:4px 8px">Item</th>
        <th style="text-align:left;padding:4px 8px">Amount</th>
        <th style="text-align:right;padding:4px 8px">Est. Price</th>
      </tr>
      ${ings.map(i=>`<tr style="border-bottom:1px solid #f0f0f0">
        <td style="padding:6px 8px">☐</td>
        <td style="padding:6px 8px">${i.name}${i.count>1?` <span style="color:#6B8A7A;font-size:11px">(×${i.count} meals)</span>`:''}</td>
        <td style="padding:6px 8px;color:#6B8A7A">${i.amount}</td>
        <td style="padding:6px 8px;text-align:right;color:#C8860A">$${(i.estimatedPrice||0).toFixed(2)}</td>
      </tr>`).join('')}
    </table>`).join('');

  const mealScheduleHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:0.5rem">
      <tr style="background:#2D4A3E;color:#fff">
        <th style="padding:8px;text-align:left">Day</th>
        <th style="padding:8px;text-align:left">Meal</th>
        <th style="padding:8px;text-align:left">Recipe</th>
        <th style="padding:8px;text-align:right">Cost</th>
      </tr>
      ${mealRows.map((m,i)=>`<tr style="background:${i%2===0?'#fff':'#f9faf9'}">
        <td style="padding:7px 8px">${m.day}</td>
        <td style="padding:7px 8px;color:#6B8A7A">${m.slot}</td>
        <td style="padding:7px 8px">${m.name}</td>
        <td style="padding:7px 8px;text-align:right;color:#C8860A">$${(+m.cost||0).toFixed(2)}</td>
      </tr>`).join('')}
      <tr style="background:#E8F0EC;font-weight:bold">
        <td colspan="3" style="padding:8px">Total estimated weekly cost</td>
        <td style="padding:8px;text-align:right;color:#2D4A3E">$${totalMealCost.toFixed(2)}</td>
      </tr>
    </table>`;

  const win = window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>MealMind Grocery List</title>
<style>
  body{font-family:'Segoe UI',sans-serif;max-width:680px;margin:2rem auto;color:#1A2B24;padding:0 1rem}
  h1{color:#2D4A3E;font-size:26px;margin-bottom:0.25rem}
  h2{color:#2D4A3E;font-size:18px;margin:2rem 0 0.75rem;border-bottom:2px solid #2D4A3E;padding-bottom:6px}
  .meta{color:#6B8A7A;font-size:13px;margin-bottom:2rem}
  .summary{display:flex;gap:2rem;background:#E8F0EC;padding:1rem;border-radius:8px;margin-bottom:2rem}
  .sum-item{text-align:center}
  .sum-num{font-size:22px;font-weight:bold;color:#2D4A3E;display:block}
  .sum-label{font-size:11px;color:#6B8A7A;text-transform:uppercase;letter-spacing:0.5px}
  .print-btn{margin-top:2rem;padding:10px 24px;background:#2D4A3E;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:14px}
  @media print{.print-btn{display:none}body{margin:0.5rem}}
</style></head><body>
<h1>🌿 MealMind — Weekly Grocery List</h1>
<div class="meta">Generated ${new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</div>

<div class="summary">
  <div class="sum-item"><span class="sum-num">${mealRows.length}</span><span class="sum-label">Meals planned</span></div>
  <div class="sum-item"><span class="sum-num">$${totalMealCost.toFixed(2)}</span><span class="sum-label">Est. meal cost</span></div>
  <div class="sum-item"><span class="sum-num">${Object.keys(ingredientMap).length}</span><span class="sum-label">Unique ingredients</span></div>
  <div class="sum-item"><span class="sum-num">$${totalIngCost.toFixed(2)}</span><span class="sum-label">Est. ingredient cost</span></div>
</div>

<h2>📅 Meal Schedule</h2>
${mealScheduleHTML}

<h2>🛒 Shopping List by Store</h2>
${storeHTML}

<button class="print-btn" onclick="window.print()">🖨 Print this list</button>
</body></html>`);
  win.document.close();
}

// ─── STORES ───────────────────────────────────────────────────────────────────
function findStores(){
  const zip=document.getElementById('zip-input').value.trim();
  if(!zip||zip.length<5){ alert('Enter a valid 5-digit zip code'); return; }
  const el=document.getElementById('stores-result');
  el.innerHTML='<div class="loading"><div class="spinner"></div><p>Finding stores near '+zip+'...</p></div>';
  setTimeout(()=>{
    const stores=[
      {icon:'🛒',name:'Walmart Supercenter',distance:'varies',address:'Search on Google Maps',tags:['Cheapest overall','Open 24hr','Large selection'],cheapest:true,savings:'Up to 30% cheaper on staples'},
      {icon:'🏪',name:'Aldi',distance:'varies',address:'Search on Google Maps',tags:['Best produce prices','No-frills','Weekly deals'],cheapest:false,savings:'Great for produce & basics'},
      {icon:'🛍',name:'Kroger / Smith\'s',distance:'varies',address:'Search on Google Maps',tags:['Loyalty card discounts','Good selection','Fuel points'],cheapest:false,savings:'Loyalty card saves 10–20%'},
      {icon:'🎯',name:'Target',distance:'varies',address:'Search on Google Maps',tags:['RedCard 5% off','Student deals','Household basics'],cheapest:false,savings:'RedCard saves 5% on everything'},
    ];
    el.innerHTML=`<div class="stores-grid">${stores.map(s=>`
    <div class="store-card">
      <div class="store-icon">${s.icon}</div>
      <div class="store-info">
        <h3>${escHtml(s.name)}</h3>
        <p>${escHtml(s.address)}</p>
        ${s.savings?`<p style="font-size:12px;color:var(--amber);margin-bottom:8px">💰 ${escHtml(s.savings)}</p>`:''}
        <div class="store-tags">
          ${s.cheapest?'<span class="cheapest-badge">💰 Usually cheapest</span>':''}
          ${s.tags.map(t=>`<span class="store-tag">${escHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>`).join('')}</div>
    <p style="font-size:12px;color:var(--muted);margin-top:1rem;line-height:1.5">Search Google Maps for these stores near zip <strong>${zip}</strong> for exact locations and hours. Prices vary by location.</p>`;
  }, 600);
}

// ─── CHAT (LOCAL) ─────────────────────────────────────────────────────────────
function sendSuggestion(text){
  document.getElementById('chat-input').value=text;
  sendChat();
}

function sendChat(){
  const input=document.getElementById('chat-input');
  const msg=input.value.trim();
  if(!msg) return;
  input.value='';

  appendChatMsg('user',msg);

  const lower=msg.toLowerCase();

  // Extract ingredients mentioned in message
  const allIngNames = [...new Set(RECIPE_DB.flatMap(r=>r.ingredients.map(i=>i.name.toLowerCase())))];
  const mentioned = allIngNames.filter(ing=>lower.includes(ing));

  // Detect meal type
  let mealType='Any';
  if(lower.includes('breakfast')) mealType='Breakfast';
  else if(lower.includes('lunch')) mealType='Lunch';
  else if(lower.includes('dinner')) mealType='Dinner';
  else if(lower.includes('snack')) mealType='Snack';

  // Detect dietary
  let dietary='None';
  if(lower.includes('vegan')) dietary='Vegan';
  else if(lower.includes('vegetarian')) dietary='Vegetarian';
  else if(lower.includes('gluten')) dietary='Gluten-free';
  else if(lower.includes('dairy')) dietary='Dairy-free';

  // Detect budget
  let maxCost=Infinity;
  const budgetMatch=lower.match(/under \$?(\d+)/);
  if(budgetMatch) maxCost=parseInt(budgetMatch[1]);

  // General tips / keywords
  if(lower.includes('tip') || lower.includes('advice') || lower.includes('help') || lower.includes('how')){
    const tips=[
      "💡 <strong>Meal prep tip:</strong> Cook a big batch of rice and beans on Sunday — they reheat great all week and cost under $5 total.",
      "💡 <strong>Budget tip:</strong> Eggs are your best friend. Cheap, high-protein, and work for any meal of the day.",
      "💡 <strong>Grocery tip:</strong> Aldi and Walmart usually have the lowest prices. Buy frozen vegetables over fresh — same nutrition, half the cost.",
      "💡 <strong>Planning tip:</strong> Plan your meals before you shop, not after. You'll save money by avoiding impulse buys.",
      "💡 <strong>Storage tip:</strong> Cook once, eat twice. Make extra dinner for tomorrow's lunch — saves time and money.",
    ];
    appendChatMsg('assistant', tips[Math.floor(Math.random()*tips.length)]);
    return;
  }

  if(lower.includes('cheap') && mentioned.length===0 && mealType==='Any'){
    const cheap = [...RECIPE_DB].sort((a,b)=>a.totalCost-b.totalCost).slice(0,3);
    const reply = `Here are the cheapest recipes in the database:<br><br>${cheap.map(r=>`🍽 <strong>${r.name}</strong> — $${r.totalCost.toFixed(2)} total (${r.cookTime})`).join('<br>')}`;
    appendChatMsg('assistant', reply);
    return;
  }

  const results = searchRecipes({ ingredients: mentioned, mealType, dietary, maxCost, limit:3 });

  if(results.length===0){
    appendChatMsg('assistant', "I couldn't find a perfect match in the database. Try asking about specific ingredients like <em>eggs</em>, <em>chicken</em>, or <em>pasta</em>, or ask for a meal type like <em>breakfast</em> or <em>dinner</em>.");
    return;
  }

  const reply = `Here are some recipes that match:<br><br>${results.map(r=>`🍽 <strong>${r.name}</strong><br>&nbsp;&nbsp;⏱ ${r.cookTime} · 💰 $${r.totalCost.toFixed(2)} · ${r.mealType}<br>&nbsp;&nbsp;${r.tags.join(', ')}`).join('<br><br>')}`;
  appendChatMsg('assistant', reply);
}

function appendChatMsg(role,text){
  const el=document.createElement('div');
  el.className='msg '+role;
  el.innerHTML=text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  document.getElementById('chat-messages').appendChild(el);
  scrollChat();
}

function scrollChat(){
  const el=document.getElementById('chat-messages');
  el.scrollTop=el.scrollHeight;
}

// ─── PRINT RECIPE ─────────────────────────────────────────────────────────────
function printRecipe(idx){
  const r=(window._lastRecipes||[])[idx];
  if(!r) return;
  const win=window.open('','_blank');
  win.document.write(`<html><head><title>${r.name}</title><style>body{font-family:sans-serif;max-width:600px;margin:2rem auto;line-height:1.7}h1{color:#2D4A3E;margin-bottom:0.25rem}h2{color:#2D4A3E;margin-top:1.5rem}ul li,ol li{margin-bottom:4px}.meta{color:#6B8A7A;font-size:14px;margin-bottom:1rem}@media print{button{display:none}}</style></head><body>
<h1>${r.name}</h1><div class="meta">⏱ ${r.cookTime} &nbsp;·&nbsp; 👤 ${r.servings} servings &nbsp;·&nbsp; 💰 $${(+r.totalCost).toFixed(2)} total ($${(+r.costPerServing).toFixed(2)}/serving)</div>
<h2>Ingredients</h2><ul>${(r.ingredients||[]).map(i=>`<li>${i.amount} ${i.name} — ~$${(+(i.estimatedPrice||0)).toFixed(2)} (${i.cheapestStore})</li>`).join('')}</ul>
<h2>Instructions</h2><ol>${(r.steps||[]).map(s=>`<li>${s}</li>`).join('')}</ol>
<button onclick="window.print()" style="margin-top:1rem;padding:10px 20px;background:#2D4A3E;color:#fff;border:none;border-radius:6px;cursor:pointer">Print</button>
</body></html>`);
  win.document.close();
}

// ─── UTILS ───────────────────────────────────────────────────────────────────
function escHtml(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escAttr(s){ return String(s||'').replace(/'/g,"\\'"); }

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init(){
  initQuickTags();
  loadPlan();
  buildWeekGrid();
  renderWeekGrid();
  updateSummary();
  updateApiStatus();
}

init();
