const itemEls = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemEls.length}`);

itemEls.forEach((el) =>
    console.log(
        `Category: ${el.firstElementChild.textContent}`,
        `\nElements: ${el.lastElementChild.childElementCount}`,
    ),
);

