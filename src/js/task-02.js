const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients")
// console.log(ingredientsEl);
for (const ingredient of ingredients) {
  const addIngredientsEl = document.createElement("li")
  // console.log(addIngredientsEl);
  addIngredientsEl.textContent = ingredient
  // console.log(addIngredientsEl);
  addIngredientsEl.classList.add("item")
  // console.log(addIngredientsEl);
  ingredientsEl.append(addIngredientsEl)
  console.log(ingredientsEl);
}