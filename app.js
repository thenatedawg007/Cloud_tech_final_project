const API_KEY = "70d8730d3f5349558138ad430974479d";
 
let grocery = JSON.parse(localStorage.getItem("grocery")) || [];
let pantry = JSON.parse(localStorage.getItem("pantry")) || [];
let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
 
function saveData() {
localStorage.setItem("grocery", JSON.stringify(grocery));
localStorage.setItem("pantry", JSON.stringify(pantry));
localStorage.setItem("recipes", JSON.stringify(recipes));
}
 
function showPage(page) {
document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
document.getElementById(page).classList.remove("hidden");
}
 
// ===== PLANNER =====
function initPlanner() {
const grid = document.getElementById("plannerGrid");
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
grid.innerHTML = "";
 
days.forEach(day => {
const div = document.createElement("div");
div.className = "card";
div.innerHTML = `       <h3>${day}</h3>       <div contenteditable="true" draggable="true">Breakfast</div>       <div contenteditable="true" draggable="true">Lunch</div>       <div contenteditable="true" draggable="true">Dinner</div>
    `;
grid.appendChild(div);
});
}
 
// ===== GROCERY =====
function addGrocery() {
const item = groceryInput.value;
const price = parseFloat(priceInput.value);
grocery.push({ item, price });
saveData();
renderGrocery();
}
 
function renderGrocery() {
groceryList.innerHTML = grocery.map(g => `<li>${g.item} - $${g.price}</li>`).join("");
const total = grocery.reduce((sum, g) => sum + (g.price || 0), 0);
totalCost.innerText = "Total: $" + total.toFixed(2);
}
 
// ===== PANTRY =====
function addPantry() {
const item = pantryInput.value;
pantry.push(item);
saveData();
renderPantry();
}
 
function renderPantry() {
pantryList.innerHTML = pantry.map(p => `<li>${p}</li>`).join("");
}
 
// ===== RECIPES =====
async function fetchRecipes() {
const res = await fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${API_KEY}`);
const data = await res.json();
recipes = data.recipes;
saveData();
renderRecipes(recipes);
}
 
async function suggestRecipes() {
const ingredients = pantry.join(",");
const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`);
const data = await res.json();
renderRecipes(data);
}
 
function renderRecipes(list) {
recipesContainer.innerHTML = list.map(r => `     <div class="card" onclick='showRecipe(${JSON.stringify(r)})'>       <h3>${r.title}</h3>       <img src="${r.image}" />     </div>
  `).join("");
}
 
async function showRecipe(recipe) {
let instructions = recipe.instructions || "No instructions available";
alert(recipe.title + "\n\n" + instructions);
}
 
function addCustomRecipe() {
const newRecipe = {
title: recipeName.value,
image: recipeImage.value,
instructions: recipeInstructions.value
};
recipes.push(newRecipe);
saveData();
renderRecipes(recipes);
}
 
// INIT
initPlanner();
renderGrocery();
renderPantry();
renderRecipes(recipes);
