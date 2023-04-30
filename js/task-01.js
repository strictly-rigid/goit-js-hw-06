const categoriesEl = document.querySelector('#categories');
const categoriesItems = Array.from(categoriesEl.children);
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(element => {
    const itemHeading = element.querySelector('.item h2').textContent;
    const itemsNumber =  element.querySelectorAll('li').length;

    console.log(`Category: ${itemHeading}; Elements: ${itemsNumber}`)
})