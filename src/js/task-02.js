const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrGaleryEl = document.querySelector("#ingredients")
const itemEl = ingredients.map((el) => { 
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = el;
  return liEl;
})
ingrGaleryEl.append(...itemEl);

