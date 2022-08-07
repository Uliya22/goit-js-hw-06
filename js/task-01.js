const categoriesListEl = document.querySelector("#categories")
// console.log(categoriesListEl);
const categoriesItemEl = document.querySelectorAll(".item").length
console.log(`Number of categories: ${categoriesItemEl}`);

const titleItemEl = document.querySelectorAll("li.item")
titleItemEl.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
})
