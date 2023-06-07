const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingrGaleryEl = document.querySelector("#ingredients")

const liEl = document.createElement("li")
liEl.classList.add("item")


const markup = ingredients.map((el) => { liEl.append(el)
return })

console.log(liEl)
