// MealMind Recipe Database
// 100+ budget-friendly college recipes organized by category
// Each recipe has: name, cookTime, servings, costPerServing, totalCost,
//   ingredients [{name, amount, estimatedPrice, cheapestStore}],
//   steps [], tags [], mealType, dietary []

const RECIPE_DB = [

  // ─── BREAKFAST ────────────────────────────────────────────────────────────

  {
    name: "Classic Scrambled Eggs",
    cookTime: "10 min", servings: 2, costPerServing: 1.00, totalCost: 2.00,
    mealType: "Breakfast", dietary: ["Vegetarian","Gluten-free"],
    tags: ["Quick","Easy","High-protein"],
    ingredients: [
      {name:"eggs", amount:"4 large", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"butter", amount:"1 tbsp", estimatedPrice:0.20, cheapestStore:"Aldi"},
      {name:"milk", amount:"2 tbsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"salt & pepper", amount:"to taste", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Crack eggs into a bowl, add milk, salt, and pepper. Whisk well.",
      "Melt butter in a non-stick pan over medium-low heat.",
      "Pour in eggs. Let sit 10 seconds, then gently push with a spatula.",
      "Continue folding eggs slowly until just set — they should look slightly underdone.",
      "Remove from heat immediately and serve."
    ]
  },
  {
    name: "Oatmeal with Banana & Honey",
    cookTime: "5 min", servings: 1, costPerServing: 0.90, totalCost: 0.90,
    mealType: "Breakfast", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["Quick","Healthy","Budget"],
    ingredients: [
      {name:"rolled oats", amount:"1/2 cup", estimatedPrice:0.25, cheapestStore:"Aldi"},
      {name:"water or milk", amount:"1 cup", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"banana", amount:"1 medium", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"honey", amount:"1 tbsp", estimatedPrice:0.25, cheapestStore:"Kroger"},
      {name:"cinnamon", amount:"pinch", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Combine oats and water/milk in a microwave-safe bowl.",
      "Microwave on high for 2–3 minutes, stirring halfway.",
      "Slice banana over the top.",
      "Drizzle with honey and sprinkle cinnamon. Serve immediately."
    ]
  },
  {
    name: "Avocado Toast",
    cookTime: "8 min", servings: 1, costPerServing: 2.25, totalCost: 2.25,
    mealType: "Breakfast", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["Trendy","Healthy","Quick"],
    ingredients: [
      {name:"bread", amount:"2 slices", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"avocado", amount:"1 ripe", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"lemon juice", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"red pepper flakes", amount:"pinch", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"salt & pepper", amount:"to taste", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Toast bread to your preferred doneness.",
      "Halve and pit avocado. Scoop flesh into a bowl.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Spread mashed avocado on toast. Top with red pepper flakes."
    ]
  },
  {
    name: "Peanut Butter Banana Smoothie",
    cookTime: "5 min", servings: 1, costPerServing: 1.50, totalCost: 1.50,
    mealType: "Breakfast", dietary: ["Vegetarian","Gluten-free"],
    tags: ["Quick","No-cook","High-protein"],
    ingredients: [
      {name:"banana", amount:"1 frozen", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"peanut butter", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"milk", amount:"1 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"honey", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Kroger"},
    ],
    steps:[
      "Add all ingredients to a blender.",
      "Blend on high for 60 seconds until smooth.",
      "Pour into a glass and serve immediately."
    ]
  },
  {
    name: "Veggie Omelette",
    cookTime: "12 min", servings: 1, costPerServing: 2.00, totalCost: 2.00,
    mealType: "Breakfast", dietary: ["Vegetarian","Gluten-free"],
    tags: ["High-protein","Filling","Healthy"],
    ingredients: [
      {name:"eggs", amount:"3 large", estimatedPrice:0.90, cheapestStore:"Walmart"},
      {name:"bell pepper", amount:"1/4 cup diced", estimatedPrice:0.30, cheapestStore:"Aldi"},
      {name:"onion", amount:"2 tbsp diced", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"cheese", amount:"2 tbsp shredded", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"butter", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Aldi"},
      {name:"salt & pepper", amount:"to taste", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Whisk eggs with salt and pepper in a bowl.",
      "Melt butter in a non-stick pan over medium heat.",
      "Sauté bell pepper and onion for 2 minutes until soft.",
      "Pour eggs over vegetables. Let cook undisturbed for 1 minute.",
      "Sprinkle cheese on one half. Fold omelette in half. Cook 1 more minute and serve."
    ]
  },
  {
    name: "Pancakes from Scratch",
    cookTime: "20 min", servings: 4, costPerServing: 0.75, totalCost: 3.00,
    mealType: "Breakfast", dietary: ["Vegetarian"],
    tags: ["Classic","Weekend","Filling"],
    ingredients: [
      {name:"all-purpose flour", amount:"1 cup", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"baking powder", amount:"1 tsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"sugar", amount:"1 tbsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"salt", amount:"1/4 tsp", estimatedPrice:0.02, cheapestStore:"Walmart"},
      {name:"milk", amount:"1 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"egg", amount:"1 large", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"butter", amount:"2 tbsp melted", estimatedPrice:0.30, cheapestStore:"Aldi"},
      {name:"maple syrup", amount:"for serving", estimatedPrice:0.80, cheapestStore:"Kroger"},
    ],
    steps:[
      "Mix flour, baking powder, sugar, and salt in a bowl.",
      "In another bowl, whisk milk, egg, and melted butter.",
      "Pour wet ingredients into dry and stir until just combined — lumps are fine.",
      "Heat a greased pan over medium heat. Pour 1/4 cup batter per pancake.",
      "Cook until bubbles form on top (~2 min), then flip. Cook 1 more minute.",
      "Serve with maple syrup."
    ]
  },
  {
    name: "Yogurt Parfait",
    cookTime: "5 min", servings: 1, costPerServing: 1.80, totalCost: 1.80,
    mealType: "Breakfast", dietary: ["Vegetarian","Gluten-free"],
    tags: ["No-cook","Quick","Healthy"],
    ingredients: [
      {name:"Greek yogurt", amount:"1 cup", estimatedPrice:1.00, cheapestStore:"Aldi"},
      {name:"granola", amount:"1/4 cup", estimatedPrice:0.40, cheapestStore:"Kroger"},
      {name:"mixed berries", amount:"1/2 cup", estimatedPrice:0.80, cheapestStore:"Aldi"},
      {name:"honey", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Spoon yogurt into a bowl or glass.",
      "Layer granola on top.",
      "Add berries and drizzle with honey. Serve immediately."
    ]
  },
  {
    name: "Breakfast Burrito",
    cookTime: "15 min", servings: 2, costPerServing: 2.00, totalCost: 4.00,
    mealType: "Breakfast", dietary: [],
    tags: ["Filling","High-protein","Portable"],
    ingredients: [
      {name:"flour tortillas", amount:"2 large", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"eggs", amount:"4 large", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"shredded cheese", amount:"1/2 cup", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"salsa", amount:"4 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"black beans", amount:"1/2 cup canned", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"butter", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Aldi"},
    ],
    steps:[
      "Scramble eggs in butter over medium heat until just set.",
      "Warm tortillas in microwave for 20 seconds.",
      "Layer eggs, beans, cheese, and salsa down the center of each tortilla.",
      "Fold sides in, then roll up tightly. Serve immediately."
    ]
  },

  // ─── LUNCH ────────────────────────────────────────────────────────────────

  {
    name: "Classic Grilled Cheese",
    cookTime: "10 min", servings: 1, costPerServing: 1.50, totalCost: 1.50,
    mealType: "Lunch", dietary: ["Vegetarian"],
    tags: ["Quick","Comfort food","Easy"],
    ingredients: [
      {name:"bread", amount:"2 slices", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"American or cheddar cheese", amount:"2 slices", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"butter", amount:"1 tbsp", estimatedPrice:0.20, cheapestStore:"Aldi"},
    ],
    steps:[
      "Butter one side of each bread slice.",
      "Place one slice butter-side down in a pan over medium-low heat.",
      "Add cheese slices on top, then place second slice butter-side up.",
      "Cook 3–4 minutes until golden, then flip and cook another 3 minutes.",
      "Slice diagonally and serve."
    ]
  },
  {
    name: "Tuna Salad Sandwich",
    cookTime: "8 min", servings: 2, costPerServing: 1.75, totalCost: 3.50,
    mealType: "Lunch", dietary: ["Dairy-free"],
    tags: ["Quick","High-protein","Budget"],
    ingredients: [
      {name:"canned tuna", amount:"1 can (5 oz)", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"mayonnaise", amount:"2 tbsp", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"celery", amount:"1 stalk diced", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"relish", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"bread", amount:"4 slices", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"lettuce", amount:"2 leaves", estimatedPrice:0.20, cheapestStore:"Aldi"},
    ],
    steps:[
      "Drain tuna and place in a bowl.",
      "Mix in mayo, celery, and relish. Season with salt and pepper.",
      "Spread tuna mixture on 2 slices of bread.",
      "Top with lettuce and remaining bread slices. Serve."
    ]
  },
  {
    name: "Ramen Upgrade",
    cookTime: "12 min", servings: 1, costPerServing: 1.50, totalCost: 1.50,
    mealType: "Lunch", dietary: ["Dairy-free"],
    tags: ["Budget","Quick","Comfort food"],
    ingredients: [
      {name:"instant ramen", amount:"1 packet", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"egg", amount:"1 large", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"frozen vegetables", amount:"1/2 cup", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"1 tsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"sesame oil", amount:"1/2 tsp", estimatedPrice:0.10, cheapestStore:"Kroger"},
      {name:"green onion", amount:"1 stalk sliced", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Cook ramen according to package directions, using half the seasoning packet.",
      "Add frozen vegetables in the last 2 minutes of cooking.",
      "Crack egg directly into boiling broth and cook 2 minutes for soft yolk.",
      "Finish with soy sauce, sesame oil, and green onion."
    ]
  },
  {
    name: "Bean & Cheese Quesadilla",
    cookTime: "10 min", servings: 2, costPerServing: 1.50, totalCost: 3.00,
    mealType: "Lunch", dietary: ["Vegetarian"],
    tags: ["Quick","Filling","Budget"],
    ingredients: [
      {name:"flour tortillas", amount:"2 large", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"canned black beans", amount:"1/2 cup drained", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"shredded cheese", amount:"1 cup", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"salsa", amount:"for dipping", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"sour cream", amount:"for dipping", estimatedPrice:0.30, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sprinkle cheese and beans over one half of each tortilla.",
      "Fold tortilla in half.",
      "Cook in a dry pan over medium heat, 2–3 minutes per side until golden and cheese melts.",
      "Slice into wedges. Serve with salsa and sour cream."
    ]
  },
  {
    name: "Peanut Butter & Jelly",
    cookTime: "3 min", servings: 1, costPerServing: 0.70, totalCost: 0.70,
    mealType: "Lunch", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["No-cook","Budget","Quick"],
    ingredients: [
      {name:"bread", amount:"2 slices", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"peanut butter", amount:"2 tbsp", estimatedPrice:0.25, cheapestStore:"Aldi"},
      {name:"jelly or jam", amount:"1 tbsp", estimatedPrice:0.15, cheapestStore:"Walmart"},
    ],
    steps:[
      "Spread peanut butter on one slice of bread.",
      "Spread jelly on the other slice.",
      "Press together, slice diagonally, and serve."
    ]
  },
  {
    name: "Caesar Salad",
    cookTime: "10 min", servings: 2, costPerServing: 2.25, totalCost: 4.50,
    mealType: "Lunch", dietary: ["Vegetarian"],
    tags: ["Healthy","Classic","Fresh"],
    ingredients: [
      {name:"romaine lettuce", amount:"1 head chopped", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"Caesar dressing", amount:"3 tbsp", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"Parmesan cheese", amount:"2 tbsp grated", estimatedPrice:0.50, cheapestStore:"Kroger"},
      {name:"croutons", amount:"1/2 cup", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"lemon juice", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Wash and chop romaine lettuce. Pat dry.",
      "Toss lettuce with Caesar dressing and lemon juice.",
      "Top with Parmesan and croutons. Serve immediately."
    ]
  },
  {
    name: "Chicken Wrap",
    cookTime: "15 min", servings: 2, costPerServing: 3.00, totalCost: 6.00,
    mealType: "Lunch", dietary: ["Dairy-free"],
    tags: ["High-protein","Filling","Portable"],
    ingredients: [
      {name:"chicken breast", amount:"1 lb", estimatedPrice:3.00, cheapestStore:"Walmart"},
      {name:"flour tortillas", amount:"2 large", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"lettuce", amount:"1 cup shredded", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"tomato", amount:"1 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"ranch dressing", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Season chicken with salt and pepper. Cook in olive oil over medium-high heat, 6–7 min per side.",
      "Let rest 5 minutes, then slice into strips.",
      "Warm tortillas in microwave for 20 seconds.",
      "Layer chicken, lettuce, tomato, and ranch on each tortilla.",
      "Roll up tightly and serve."
    ]
  },
  {
    name: "Tomato Soup & Grilled Cheese",
    cookTime: "15 min", servings: 2, costPerServing: 2.00, totalCost: 4.00,
    mealType: "Lunch", dietary: ["Vegetarian"],
    tags: ["Comfort food","Classic","Easy"],
    ingredients: [
      {name:"canned tomato soup", amount:"1 can", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"milk", amount:"1/2 cup", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"bread", amount:"4 slices", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"cheese slices", amount:"4 slices", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"butter", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Aldi"},
    ],
    steps:[
      "Heat soup with milk in a saucepan over medium heat, stirring occasionally.",
      "Meanwhile, butter bread and make grilled cheese sandwiches in a pan.",
      "Cook each sandwich 3–4 min per side until golden.",
      "Serve sandwiches alongside warm soup for dipping."
    ]
  },
  {
    name: "Egg Salad Sandwich",
    cookTime: "15 min", servings: 2, costPerServing: 1.50, totalCost: 3.00,
    mealType: "Lunch", dietary: ["Vegetarian"],
    tags: ["Budget","Classic","High-protein"],
    ingredients: [
      {name:"eggs", amount:"4 hard-boiled", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"mayonnaise", amount:"2 tbsp", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"mustard", amount:"1 tsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"celery", amount:"1 stalk diced", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"bread", amount:"4 slices", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"salt & pepper", amount:"to taste", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Boil eggs for 10 minutes, then cool in ice water. Peel and chop.",
      "Mix eggs with mayo, mustard, celery, salt, and pepper.",
      "Spread on bread slices and serve."
    ]
  },

  // ─── DINNER ───────────────────────────────────────────────────────────────

  {
    name: "Spaghetti with Marinara",
    cookTime: "25 min", servings: 4, costPerServing: 1.50, totalCost: 6.00,
    mealType: "Dinner", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["Classic","Budget","Filling"],
    ingredients: [
      {name:"spaghetti", amount:"1 lb", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"marinara sauce", amount:"1 jar (24 oz)", estimatedPrice:2.00, cheapestStore:"Aldi"},
      {name:"garlic", amount:"3 cloves minced", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"Italian seasoning", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"Parmesan cheese", amount:"for topping", estimatedPrice:0.60, cheapestStore:"Kroger"},
    ],
    steps:[
      "Boil a large pot of salted water. Cook spaghetti according to package directions.",
      "In a saucepan, sauté garlic in olive oil for 1 minute over medium heat.",
      "Add marinara sauce and Italian seasoning. Simmer 10 minutes.",
      "Drain pasta and toss with sauce.",
      "Top with Parmesan and serve."
    ]
  },
  {
    name: "Chicken Stir Fry",
    cookTime: "20 min", servings: 3, costPerServing: 3.00, totalCost: 9.00,
    mealType: "Dinner", dietary: ["Dairy-free"],
    tags: ["Quick","High-protein","Healthy"],
    ingredients: [
      {name:"chicken breast", amount:"1 lb sliced thin", estimatedPrice:3.50, cheapestStore:"Walmart"},
      {name:"frozen stir fry vegetables", amount:"2 cups", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"3 tbsp", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"garlic", amount:"2 cloves minced", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"ginger", amount:"1/2 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"sesame oil", amount:"1 tsp", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"cooked rice", amount:"2 cups", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"vegetable oil", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Heat oil in a wok or large skillet over high heat.",
      "Add chicken and cook 5–6 minutes until no longer pink. Remove and set aside.",
      "Add vegetables to the pan, stir fry 3 minutes.",
      "Return chicken to pan. Add garlic, ginger, soy sauce, and sesame oil.",
      "Toss everything together and cook 2 more minutes.",
      "Serve over rice."
    ]
  },
  {
    name: "Rice & Beans",
    cookTime: "30 min", servings: 4, costPerServing: 0.90, totalCost: 3.60,
    mealType: "Dinner", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["Budget","Filling","Healthy"],
    ingredients: [
      {name:"white rice", amount:"1 cup", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"canned black beans", amount:"1 can (15 oz)", estimatedPrice:0.80, cheapestStore:"Aldi"},
      {name:"onion", amount:"1/2 diced", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"garlic", amount:"2 cloves", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"cumin", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"1 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"chicken broth", amount:"2 cups", estimatedPrice:0.60, cheapestStore:"Walmart"},
    ],
    steps:[
      "Cook rice in chicken broth according to package directions.",
      "Sauté onion in olive oil 3 minutes. Add garlic and cumin, cook 1 minute more.",
      "Add drained beans and 1/4 cup water. Simmer 10 minutes.",
      "Season with salt and pepper.",
      "Serve beans over rice."
    ]
  },
  {
    name: "Ground Beef Tacos",
    cookTime: "20 min", servings: 4, costPerServing: 2.50, totalCost: 10.00,
    mealType: "Dinner", dietary: ["Gluten-free"],
    tags: ["Crowd-pleaser","Quick","High-protein"],
    ingredients: [
      {name:"ground beef", amount:"1 lb", estimatedPrice:4.00, cheapestStore:"Walmart"},
      {name:"taco seasoning", amount:"1 packet", estimatedPrice:0.75, cheapestStore:"Walmart"},
      {name:"taco shells or tortillas", amount:"8", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"shredded cheese", amount:"1 cup", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"lettuce", amount:"1 cup shredded", estimatedPrice:0.40, cheapestStore:"Aldi"},
      {name:"tomato", amount:"1 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"sour cream", amount:"1/4 cup", estimatedPrice:0.50, cheapestStore:"Walmart"},
    ],
    steps:[
      "Brown ground beef in a pan over medium-high heat, breaking it up. Drain fat.",
      "Add taco seasoning and 1/4 cup water. Simmer 3 minutes.",
      "Warm taco shells per package directions.",
      "Set out toppings buffet-style. Build tacos and serve."
    ]
  },
  {
    name: "Baked Mac & Cheese",
    cookTime: "35 min", servings: 6, costPerServing: 1.25, totalCost: 7.50,
    mealType: "Dinner", dietary: ["Vegetarian"],
    tags: ["Comfort food","Crowd-pleaser","Filling"],
    ingredients: [
      {name:"elbow macaroni", amount:"2 cups", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"butter", amount:"3 tbsp", estimatedPrice:0.45, cheapestStore:"Aldi"},
      {name:"flour", amount:"3 tbsp", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"milk", amount:"2 cups", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"shredded cheddar", amount:"2 cups", estimatedPrice:2.00, cheapestStore:"Walmart"},
      {name:"salt, pepper, paprika", amount:"to taste", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"breadcrumbs", amount:"1/2 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
    ],
    steps:[
      "Preheat oven to 375°F. Cook pasta until al dente, drain.",
      "Melt butter in a saucepan, whisk in flour, cook 1 minute.",
      "Gradually whisk in milk. Cook until thickened, about 5 minutes.",
      "Stir in cheese until melted. Season with salt, pepper, paprika.",
      "Mix with pasta, pour into baking dish. Top with breadcrumbs.",
      "Bake 20 minutes until golden and bubbly."
    ]
  },
  {
    name: "Vegetable Fried Rice",
    cookTime: "20 min", servings: 3, costPerServing: 1.50, totalCost: 4.50,
    mealType: "Dinner", dietary: ["Vegetarian","Dairy-free"],
    tags: ["Budget","Leftover-friendly","Quick"],
    ingredients: [
      {name:"cooked rice (day-old)", amount:"3 cups", estimatedPrice:0.75, cheapestStore:"Walmart"},
      {name:"eggs", amount:"2 large", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"frozen mixed vegetables", amount:"1.5 cups", estimatedPrice:1.00, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"3 tbsp", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"garlic", amount:"2 cloves minced", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"sesame oil", amount:"1 tsp", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"vegetable oil", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"green onions", amount:"2 stalks", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Heat oil in a large skillet or wok over high heat.",
      "Add vegetables and garlic. Stir fry 3 minutes.",
      "Push to one side. Scramble eggs on the empty side, then mix together.",
      "Add rice, breaking up clumps. Stir fry 3–4 minutes.",
      "Add soy sauce and sesame oil. Toss well.",
      "Top with green onions and serve."
    ]
  },
  {
    name: "Chili",
    cookTime: "40 min", servings: 6, costPerServing: 1.75, totalCost: 10.50,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Filling","Meal-prep","Crowd-pleaser"],
    ingredients: [
      {name:"ground beef", amount:"1 lb", estimatedPrice:4.00, cheapestStore:"Walmart"},
      {name:"canned kidney beans", amount:"2 cans (15 oz each)", estimatedPrice:1.60, cheapestStore:"Aldi"},
      {name:"canned diced tomatoes", amount:"1 can (14 oz)", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"tomato paste", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"onion", amount:"1 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"chili powder", amount:"2 tbsp", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"cumin", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Brown ground beef with onion in a large pot. Drain fat.",
      "Add garlic, chili powder, and cumin. Cook 1 minute.",
      "Add beans, diced tomatoes, and tomato paste. Stir well.",
      "Bring to a boil, then reduce heat and simmer 30 minutes.",
      "Season with salt and pepper. Serve with cornbread or over rice."
    ]
  },
  {
    name: "Baked Chicken Thighs",
    cookTime: "40 min", servings: 4, costPerServing: 2.00, totalCost: 8.00,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["High-protein","Easy","Meal-prep"],
    ingredients: [
      {name:"chicken thighs (bone-in)", amount:"4 pieces", estimatedPrice:5.00, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"garlic powder", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"paprika", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"Italian seasoning", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"salt & pepper", amount:"to taste", estimatedPrice:0.05, cheapestStore:"Walmart"},
    ],
    steps:[
      "Preheat oven to 425°F.",
      "Pat chicken dry with paper towels.",
      "Rub with olive oil, then coat with all seasonings.",
      "Place skin-side up on a baking sheet.",
      "Bake 35–40 minutes until skin is crispy and internal temp reaches 165°F.",
      "Rest 5 minutes before serving."
    ]
  },
  {
    name: "Pasta with Garlic & Olive Oil",
    cookTime: "20 min", servings: 2, costPerServing: 1.50, totalCost: 3.00,
    mealType: "Dinner", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["Quick","Budget","5-ingredient"],
    ingredients: [
      {name:"pasta (any shape)", amount:"8 oz", estimatedPrice:0.75, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"1/4 cup", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"garlic", amount:"5 cloves sliced thin", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"red pepper flakes", amount:"1/2 tsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"fresh parsley", amount:"2 tbsp chopped", estimatedPrice:0.30, cheapestStore:"Aldi"},
      {name:"Parmesan", amount:"for topping", estimatedPrice:0.50, cheapestStore:"Kroger"},
    ],
    steps:[
      "Cook pasta in salted water. Reserve 1/2 cup pasta water before draining.",
      "Heat olive oil over medium-low heat. Add garlic and red pepper flakes.",
      "Cook garlic slowly until golden, about 5 minutes. Don't burn it.",
      "Add drained pasta and a splash of pasta water. Toss to coat.",
      "Top with parsley and Parmesan."
    ]
  },
  {
    name: "Lentil Soup",
    cookTime: "40 min", servings: 6, costPerServing: 0.90, totalCost: 5.40,
    mealType: "Dinner", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["Budget","Healthy","Meal-prep"],
    ingredients: [
      {name:"green or red lentils", amount:"1.5 cups", estimatedPrice:1.20, cheapestStore:"Aldi"},
      {name:"onion", amount:"1 large diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"carrots", amount:"2 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"celery", amount:"2 stalks diced", estimatedPrice:0.30, cheapestStore:"Kroger"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"canned diced tomatoes", amount:"1 can", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"vegetable broth", amount:"6 cups", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"cumin, paprika", amount:"1 tsp each", estimatedPrice:0.15, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sauté onion, carrots, and celery in oil 5 minutes. Add garlic and spices.",
      "Add lentils, tomatoes, and broth. Bring to a boil.",
      "Reduce heat and simmer 30 minutes until lentils are tender.",
      "Season with salt, pepper, and a squeeze of lemon. Serve with bread."
    ]
  },
  {
    name: "Sheet Pan Sausage & Veggies",
    cookTime: "35 min", servings: 4, costPerServing: 2.75, totalCost: 11.00,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Easy","Meal-prep","One-pan"],
    ingredients: [
      {name:"smoked sausage", amount:"1 lb sliced", estimatedPrice:4.00, cheapestStore:"Walmart"},
      {name:"bell peppers", amount:"2 chopped", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"zucchini", amount:"1 chopped", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"red onion", amount:"1 chopped", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"3 tbsp", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"Italian seasoning", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Preheat oven to 400°F. Line a sheet pan with foil.",
      "Toss sausage and vegetables with olive oil and seasoning.",
      "Spread in a single layer on the sheet pan.",
      "Bake 25–30 minutes, stirring halfway, until vegetables are tender and sausage is browned."
    ]
  },
  {
    name: "Potato Soup",
    cookTime: "35 min", servings: 4, costPerServing: 1.50, totalCost: 6.00,
    mealType: "Dinner", dietary: ["Vegetarian","Gluten-free"],
    tags: ["Comfort food","Budget","Filling"],
    ingredients: [
      {name:"potatoes", amount:"4 large diced", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"onion", amount:"1 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"garlic", amount:"2 cloves", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"chicken or vegetable broth", amount:"4 cups", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"milk", amount:"1 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"shredded cheddar", amount:"1 cup", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"butter", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Aldi"},
      {name:"bacon bits", amount:"for topping", estimatedPrice:0.60, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sauté onion in butter 3 minutes. Add garlic, cook 1 minute.",
      "Add potatoes and broth. Boil then simmer 20 minutes until potatoes are tender.",
      "Mash some potatoes with a fork to thicken the soup.",
      "Stir in milk and half the cheese. Season with salt and pepper.",
      "Serve topped with remaining cheese and bacon bits."
    ]
  },
  {
    name: "Penne alla Vodka (No Vodka)",
    cookTime: "30 min", servings: 4, costPerServing: 2.00, totalCost: 8.00,
    mealType: "Dinner", dietary: ["Vegetarian"],
    tags: ["Creamy","Comfort food","Restaurant-style"],
    ingredients: [
      {name:"penne pasta", amount:"1 lb", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"canned crushed tomatoes", amount:"1 can (28 oz)", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"heavy cream", amount:"1/2 cup", estimatedPrice:1.00, cheapestStore:"Kroger"},
      {name:"onion", amount:"1/2 diced", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"red pepper flakes", amount:"1/2 tsp", estimatedPrice:0.05, cheapestStore:"Walmart"},
      {name:"Parmesan", amount:"1/4 cup", estimatedPrice:0.60, cheapestStore:"Kroger"},
    ],
    steps:[
      "Cook pasta according to package directions. Reserve 1/2 cup pasta water.",
      "Sauté onion in olive oil 4 minutes. Add garlic and red pepper flakes.",
      "Add crushed tomatoes. Simmer 15 minutes.",
      "Stir in heavy cream and simmer 5 more minutes.",
      "Toss with pasta, adding pasta water as needed. Top with Parmesan."
    ]
  },
  {
    name: "Beef & Broccoli",
    cookTime: "25 min", servings: 3, costPerServing: 3.50, totalCost: 10.50,
    mealType: "Dinner", dietary: ["Dairy-free"],
    tags: ["Takeout-style","High-protein","Quick"],
    ingredients: [
      {name:"beef sirloin or flank steak", amount:"1 lb sliced thin", estimatedPrice:6.00, cheapestStore:"Walmart"},
      {name:"broccoli", amount:"2 cups florets", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"1/4 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"oyster sauce", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Kroger"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"cornstarch", amount:"1 tbsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"sesame oil", amount:"1 tsp", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"cooked rice", amount:"2 cups", estimatedPrice:0.50, cheapestStore:"Walmart"},
    ],
    steps:[
      "Marinate beef in soy sauce and cornstarch for 10 minutes.",
      "Mix oyster sauce, remaining soy sauce, and sesame oil. Set aside.",
      "Stir fry beef in high-heat oil 3 minutes. Remove.",
      "Stir fry broccoli 4 minutes. Add garlic, cook 30 seconds.",
      "Return beef, pour sauce over everything. Toss and serve over rice."
    ]
  },
  {
    name: "Veggie Pasta Bake",
    cookTime: "45 min", servings: 6, costPerServing: 1.75, totalCost: 10.50,
    mealType: "Dinner", dietary: ["Vegetarian"],
    tags: ["Meal-prep","Comfort food","Crowd-pleaser"],
    ingredients: [
      {name:"penne or ziti", amount:"1 lb", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"marinara sauce", amount:"1 jar", estimatedPrice:2.00, cheapestStore:"Aldi"},
      {name:"zucchini", amount:"1 diced", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"bell pepper", amount:"1 diced", estimatedPrice:0.75, cheapestStore:"Aldi"},
      {name:"mozzarella cheese", amount:"1.5 cups shredded", estimatedPrice:2.50, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"Italian seasoning", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
    ],
    steps:[
      "Preheat oven to 375°F. Cook pasta until al dente, drain.",
      "Sauté zucchini and pepper in olive oil 5 minutes.",
      "Mix pasta, vegetables, and sauce together. Season with Italian seasoning.",
      "Pour into a greased baking dish. Top with mozzarella.",
      "Bake 25–30 minutes until cheese is golden and bubbly."
    ]
  },

  // ─── SNACKS ───────────────────────────────────────────────────────────────

  {
    name: "Hummus & Veggies",
    cookTime: "5 min", servings: 2, costPerServing: 1.25, totalCost: 2.50,
    mealType: "Snack", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["No-cook","Healthy","Quick"],
    ingredients: [
      {name:"store-bought hummus", amount:"1/2 cup", estimatedPrice:1.00, cheapestStore:"Aldi"},
      {name:"carrots", amount:"1 cup baby carrots", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"celery", amount:"2 stalks", estimatedPrice:0.30, cheapestStore:"Kroger"},
      {name:"cucumber", amount:"1/2 sliced", estimatedPrice:0.50, cheapestStore:"Walmart"},
    ],
    steps:[
      "Arrange vegetables on a plate.",
      "Serve with hummus for dipping."
    ]
  },
  {
    name: "Apple & Peanut Butter",
    cookTime: "3 min", servings: 1, costPerServing: 0.80, totalCost: 0.80,
    mealType: "Snack", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["No-cook","Healthy","Budget"],
    ingredients: [
      {name:"apple", amount:"1 medium", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"peanut butter", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Aldi"},
    ],
    steps:[
      "Core and slice apple into wedges.",
      "Serve with peanut butter for dipping."
    ]
  },
  {
    name: "Microwave Popcorn Upgrade",
    cookTime: "5 min", servings: 2, costPerServing: 0.60, totalCost: 1.20,
    mealType: "Snack", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["Quick","Budget","Movie night"],
    ingredients: [
      {name:"microwave popcorn bag", amount:"1 bag", estimatedPrice:0.75, cheapestStore:"Walmart"},
      {name:"butter", amount:"1 tbsp", estimatedPrice:0.15, cheapestStore:"Aldi"},
      {name:"nutritional yeast or Parmesan", amount:"2 tbsp", estimatedPrice:0.30, cheapestStore:"Kroger"},
      {name:"garlic powder", amount:"pinch", estimatedPrice:0.02, cheapestStore:"Walmart"},
    ],
    steps:[
      "Microwave popcorn per package directions.",
      "Toss hot popcorn with melted butter.",
      "Sprinkle nutritional yeast/Parmesan and garlic powder. Toss and serve."
    ]
  },
  {
    name: "Cheese Quesadilla Snack",
    cookTime: "5 min", servings: 1, costPerServing: 0.90, totalCost: 0.90,
    mealType: "Snack", dietary: ["Vegetarian"],
    tags: ["Quick","Filling","Easy"],
    ingredients: [
      {name:"flour tortilla", amount:"1 medium", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"shredded cheese", amount:"1/3 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"salsa", amount:"for dipping", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sprinkle cheese over half of the tortilla. Fold in half.",
      "Cook in a dry pan over medium heat, 1–2 minutes per side until golden.",
      "Slice and serve with salsa."
    ]
  },
  {
    name: "Trail Mix",
    cookTime: "2 min", servings: 4, costPerServing: 0.80, totalCost: 3.20,
    mealType: "Snack", dietary: ["Vegetarian","Vegan","Gluten-free","Dairy-free"],
    tags: ["No-cook","Portable","Energy"],
    ingredients: [
      {name:"peanuts or mixed nuts", amount:"1 cup", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"raisins or dried cranberries", amount:"1/2 cup", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"chocolate chips", amount:"1/4 cup", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"pretzels", amount:"1/2 cup", estimatedPrice:0.30, cheapestStore:"Walmart"},
    ],
    steps:[
      "Combine all ingredients in a bowl or zip-lock bag.",
      "Mix well and portion into servings. Store in an airtight container."
    ]
  },

  // ─── MORE DINNERS ─────────────────────────────────────────────────────────

  {
    name: "Chicken Quesadillas",
    cookTime: "20 min", servings: 2, costPerServing: 3.50, totalCost: 7.00,
    mealType: "Dinner", dietary: [],
    tags: ["Quick","High-protein","Crowd-pleaser"],
    ingredients: [
      {name:"flour tortillas", amount:"4 large", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"cooked chicken", amount:"1.5 cups shredded", estimatedPrice:2.50, cheapestStore:"Walmart"},
      {name:"shredded Mexican cheese", amount:"1.5 cups", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"salsa", amount:"1/4 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"sour cream", amount:"for serving", estimatedPrice:0.40, cheapestStore:"Walmart"},
    ],
    steps:[
      "Mix chicken with salsa.",
      "Lay tortillas flat. Cover one half with cheese and chicken mixture. Fold over.",
      "Cook in a dry pan over medium heat, 3 minutes per side until golden.",
      "Slice into wedges and serve with sour cream."
    ]
  },
  {
    name: "Ramen Noodle Stir Fry",
    cookTime: "15 min", servings: 2, costPerServing: 1.75, totalCost: 3.50,
    mealType: "Dinner", dietary: ["Dairy-free"],
    tags: ["Budget","Quick","Creative"],
    ingredients: [
      {name:"instant ramen noodles", amount:"2 packets (discard seasoning)", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"eggs", amount:"2", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"frozen vegetables", amount:"1.5 cups", estimatedPrice:1.00, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"garlic", amount:"2 cloves", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"vegetable oil", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Cook ramen noodles 2 minutes, drain well.",
      "Stir fry vegetables in oil over high heat 3 minutes. Add garlic.",
      "Push to side, scramble eggs, then combine.",
      "Add noodles and soy sauce. Toss everything together and serve."
    ]
  },
  {
    name: "Baked Potato Bar",
    cookTime: "55 min", servings: 4, costPerServing: 1.50, totalCost: 6.00,
    mealType: "Dinner", dietary: ["Vegetarian","Gluten-free"],
    tags: ["Easy","Customizable","Filling"],
    ingredients: [
      {name:"large russet potatoes", amount:"4", estimatedPrice:2.00, cheapestStore:"Walmart"},
      {name:"shredded cheddar", amount:"1 cup", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"sour cream", amount:"1/2 cup", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"butter", amount:"4 tbsp", estimatedPrice:0.60, cheapestStore:"Aldi"},
      {name:"broccoli", amount:"1 cup cooked", estimatedPrice:0.80, cheapestStore:"Aldi"},
      {name:"bacon bits", amount:"1/4 cup", estimatedPrice:0.80, cheapestStore:"Walmart"},
    ],
    steps:[
      "Preheat oven to 400°F. Scrub potatoes, poke with a fork all over.",
      "Rub with oil and salt. Bake directly on oven rack 50–55 minutes.",
      "Slice open, fluff with a fork.",
      "Set out toppings and let everyone build their own potato."
    ]
  },
  {
    name: "Slow Cooker Pulled Chicken",
    cookTime: "6 hr", servings: 6, costPerServing: 2.00, totalCost: 12.00,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Meal-prep","Hands-off","High-protein"],
    ingredients: [
      {name:"chicken breasts", amount:"2 lbs", estimatedPrice:6.00, cheapestStore:"Walmart"},
      {name:"BBQ sauce", amount:"1 cup", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"garlic powder", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"onion powder", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"burger buns or sandwich rolls", amount:"6", estimatedPrice:1.50, cheapestStore:"Walmart"},
    ],
    steps:[
      "Place chicken in slow cooker. Season with garlic and onion powder.",
      "Pour BBQ sauce over top.",
      "Cook on LOW 6 hours or HIGH 3–4 hours.",
      "Shred chicken with two forks right in the slow cooker.",
      "Serve on buns."
    ]
  },
  {
    name: "Egg Fried Rice",
    cookTime: "15 min", servings: 2, costPerServing: 1.25, totalCost: 2.50,
    mealType: "Dinner", dietary: ["Vegetarian","Dairy-free"],
    tags: ["Budget","Quick","Leftover-friendly"],
    ingredients: [
      {name:"cooked rice (day-old)", amount:"2 cups", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"eggs", amount:"3", estimatedPrice:0.90, cheapestStore:"Walmart"},
      {name:"soy sauce", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"green onions", amount:"2 stalks", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"sesame oil", amount:"1 tsp", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"vegetable oil", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Heat oil in pan over high heat. Add rice, breaking up clumps. Fry 3 minutes.",
      "Push rice to the side. Scramble eggs in the empty space.",
      "Mix eggs into rice. Add soy sauce and sesame oil.",
      "Toss and top with green onions."
    ]
  },
  {
    name: "Black Bean Burgers",
    cookTime: "25 min", servings: 4, costPerServing: 1.50, totalCost: 6.00,
    mealType: "Dinner", dietary: ["Vegetarian","Vegan","Dairy-free"],
    tags: ["Budget","Healthy","Meatless"],
    ingredients: [
      {name:"canned black beans", amount:"1 can (15 oz) drained", estimatedPrice:0.80, cheapestStore:"Aldi"},
      {name:"breadcrumbs", amount:"1/2 cup", estimatedPrice:0.40, cheapestStore:"Walmart"},
      {name:"egg", amount:"1", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"garlic powder", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"cumin", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"burger buns", amount:"4", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"toppings (lettuce, tomato)", amount:"as desired", estimatedPrice:0.80, cheapestStore:"Aldi"},
    ],
    steps:[
      "Mash black beans in a bowl until mostly smooth.",
      "Mix in breadcrumbs, egg, garlic powder, and cumin. Season with salt.",
      "Form into 4 patties.",
      "Cook in an oiled pan over medium heat, 4 minutes per side.",
      "Serve on buns with desired toppings."
    ]
  },
  {
    name: "Creamy Tomato Pasta",
    cookTime: "25 min", servings: 4, costPerServing: 1.50, totalCost: 6.00,
    mealType: "Dinner", dietary: ["Vegetarian"],
    tags: ["Quick","Creamy","Comfort food"],
    ingredients: [
      {name:"pasta", amount:"1 lb", estimatedPrice:1.50, cheapestStore:"Walmart"},
      {name:"canned tomato sauce", amount:"1 can (15 oz)", estimatedPrice:1.00, cheapestStore:"Walmart"},
      {name:"cream cheese", amount:"4 oz", estimatedPrice:1.25, cheapestStore:"Aldi"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"Italian seasoning", amount:"1 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"1 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
    ],
    steps:[
      "Cook pasta. Reserve 1/2 cup pasta water.",
      "Sauté garlic in olive oil 1 minute. Add tomato sauce and Italian seasoning.",
      "Simmer 5 minutes. Add cubed cream cheese, stir until melted and smooth.",
      "Toss with pasta, using pasta water to loosen. Serve immediately."
    ]
  },
  {
    name: "Ground Turkey Lettuce Wraps",
    cookTime: "20 min", servings: 3, costPerServing: 2.75, totalCost: 8.25,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Healthy","Low-carb","Quick"],
    ingredients: [
      {name:"ground turkey", amount:"1 lb", estimatedPrice:4.00, cheapestStore:"Walmart"},
      {name:"butter lettuce", amount:"1 head", estimatedPrice:1.50, cheapestStore:"Aldi"},
      {name:"soy sauce", amount:"2 tbsp", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"hoisin sauce", amount:"1 tbsp", estimatedPrice:0.30, cheapestStore:"Kroger"},
      {name:"garlic", amount:"2 cloves", estimatedPrice:0.15, cheapestStore:"Walmart"},
      {name:"ginger", amount:"1/2 tsp", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"green onions", amount:"3 stalks", estimatedPrice:0.25, cheapestStore:"Walmart"},
    ],
    steps:[
      "Cook ground turkey in a pan over medium-high heat, breaking it up, 8 minutes.",
      "Add garlic and ginger, cook 1 minute.",
      "Stir in soy sauce and hoisin. Cook 2 more minutes.",
      "Separate lettuce into cups. Fill with turkey mixture and green onions."
    ]
  },
  {
    name: "Shakshuka",
    cookTime: "25 min", servings: 2, costPerServing: 2.00, totalCost: 4.00,
    mealType: "Dinner", dietary: ["Vegetarian","Gluten-free","Dairy-free"],
    tags: ["Exotic","Healthy","Eggs"],
    ingredients: [
      {name:"eggs", amount:"4", estimatedPrice:1.20, cheapestStore:"Walmart"},
      {name:"canned diced tomatoes", amount:"1 can (14 oz)", estimatedPrice:0.80, cheapestStore:"Walmart"},
      {name:"bell pepper", amount:"1 diced", estimatedPrice:0.75, cheapestStore:"Aldi"},
      {name:"onion", amount:"1/2 diced", estimatedPrice:0.25, cheapestStore:"Walmart"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"cumin, paprika, cayenne", amount:"1 tsp each", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"olive oil", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sauté onion and pepper in olive oil 5 minutes. Add garlic and spices.",
      "Add tomatoes. Simmer 10 minutes until sauce thickens.",
      "Make 4 wells in the sauce. Crack an egg into each well.",
      "Cover and cook 6–8 minutes until eggs are set but yolks are still runny.",
      "Serve with bread for dipping."
    ]
  },
  {
    name: "Chicken Soup",
    cookTime: "45 min", servings: 6, costPerServing: 1.75, totalCost: 10.50,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Comforting","Meal-prep","Healthy"],
    ingredients: [
      {name:"chicken breast", amount:"1 lb", estimatedPrice:3.50, cheapestStore:"Walmart"},
      {name:"carrots", amount:"3 diced", estimatedPrice:0.60, cheapestStore:"Walmart"},
      {name:"celery", amount:"3 stalks diced", estimatedPrice:0.45, cheapestStore:"Kroger"},
      {name:"onion", amount:"1 diced", estimatedPrice:0.50, cheapestStore:"Walmart"},
      {name:"garlic", amount:"3 cloves", estimatedPrice:0.20, cheapestStore:"Walmart"},
      {name:"chicken broth", amount:"8 cups", estimatedPrice:1.60, cheapestStore:"Walmart"},
      {name:"egg noodles or rice", amount:"1 cup", estimatedPrice:0.75, cheapestStore:"Walmart"},
      {name:"thyme, bay leaf", amount:"1 tsp/1 leaf", estimatedPrice:0.15, cheapestStore:"Walmart"},
    ],
    steps:[
      "Sauté onion, carrots, and celery in oil 5 minutes. Add garlic.",
      "Add chicken and broth. Bring to a boil, then simmer 20 minutes.",
      "Remove chicken, shred with forks, return to pot.",
      "Add noodles/rice, cook until tender, about 10 minutes.",
      "Season with salt and pepper. Remove bay leaf before serving."
    ]
  },
  {
    name: "Teriyaki Salmon",
    cookTime: "20 min", servings: 2, costPerServing: 4.50, totalCost: 9.00,
    mealType: "Dinner", dietary: ["Gluten-free","Dairy-free"],
    tags: ["Healthy","Quick","Restaurant-style"],
    ingredients: [
      {name:"salmon fillets", amount:"2 (6 oz each)", estimatedPrice:7.00, cheapestStore:"Kroger"},
      {name:"soy sauce", amount:"3 tbsp", estimatedPrice:0.30, cheapestStore:"Walmart"},
      {name:"honey", amount:"2 tbsp", estimatedPrice:0.40, cheapestStore:"Kroger"},
      {name:"garlic", amount:"1 clove", estimatedPrice:0.10, cheapestStore:"Walmart"},
      {name:"sesame seeds", amount:"1 tsp", estimatedPrice:0.20, cheapestStore:"Kroger"},
      {name:"cooked rice", amount:"1.5 cups", estimatedPrice:0.40, cheapestStore:"Walmart"},
    ],
    steps:[
      "Mix soy sauce, honey, and garlic for the teriyaki glaze.",
      "Marinate salmon in half the glaze for 10 minutes.",
      "Cook salmon in an oiled pan over medium-high heat, 4 minutes per side.",
      "Pour remaining glaze over salmon in the last minute.",
      "Sprinkle sesame seeds and serve over rice."
    ]
  },
];

// ─── SEARCH FUNCTION ─────────────────────────────────────────────────────────
// Find recipes that match given ingredients and filters
function searchRecipes({ ingredients = [], mealType = 'Any', dietary = 'None', maxCost = Infinity, maxTime = Infinity, limit = 4 } = {}) {

  // Parse max time from string
  const parseTime = (t) => {
    if (!t || t === 'Any') return Infinity;
    const m = t.match(/(\d+)/);
    return m ? parseInt(m[1]) : Infinity;
  };

  const maxMinutes = parseTime(maxTime);

  const scored = RECIPE_DB.map(recipe => {
    let score = 0;

    // Meal type filter
    if (mealType !== 'Any' && recipe.mealType !== mealType) return null;

    // Cost filter
    if (recipe.totalCost > maxCost) return null;

    // Cook time filter
    const recipeMinutes = parseTime(recipe.cookTime);
    if (recipeMinutes > maxMinutes) return null;

    // Dietary filter
    if (dietary && dietary !== 'None') {
      if (!recipe.dietary.includes(dietary)) return null;
    }

    // Score based on ingredient match
    if (ingredients.length > 0) {
      const recipeIngNames = recipe.ingredients.map(i => i.name.toLowerCase());
      const userIngs = ingredients.map(i => i.toLowerCase());
      let matches = 0;
      userIngs.forEach(ui => {
        if (recipeIngNames.some(ri => ri.includes(ui) || ui.includes(ri))) {
          matches++;
        }
      });
      score = matches;
      // Optionally show even 0-match recipes but rank them lower
    } else {
      score = 1; // No ingredient filter — all recipes equal
    }

    return { recipe, score };
  }).filter(Boolean);

  // Sort by score descending, then by cost ascending as tiebreaker
  scored.sort((a, b) => b.score - a.score || a.recipe.totalCost - b.recipe.totalCost);

  return scored.slice(0, limit).map(s => s.recipe);
}
