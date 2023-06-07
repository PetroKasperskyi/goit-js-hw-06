const itemEls = document.querySelectorAll(".item")
// const childrenEl = itemEls.length
console.log(`Number of categories: ${itemEls.length}`);

itemEls.forEach((el) =>
    console.log(`Category: ${el.firstElementChild.textContent}`,
          `Elements: ${el.lastElementChild.childElementCount}`,
    ),
);

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5