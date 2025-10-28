/**
 * map filter forEach splice
 */

async function fetchData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let products = await res.json();
    localStorage.setItem("products", JSON.stringify(products));
    displayData(products);
    filterCategory();
}

// filter category
function filterCategory() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let data = products.map(product => product.category);
    
    let set = new Set(data);
    let newArr = Array.from(set);

    let container2 = document.getElementById("btn-container");
    container2.innerHTML = ""; // Clears duplicates on reload

    newArr.forEach(category => {
        let btn = document.createElement("button");
        btn.textContent = category;
        btn.onclick = () => {
            filterData(category);
        }
        container2.appendChild(btn);
    });
}

// filter data
function filterData(category) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let data = products.filter(product => product.category == category);
    displayData(data);
}

// display data
function displayData(products) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    if (products.length == 0) {
        container.innerHTML = "Data not found";
    } else {
        products.forEach((product, index) => {
            let item = document.createElement("div");
            item.innerHTML = `
                <img src='${product.image}' />
                <h3>Id: ${product.id}</h3>
                <p>Title : ${product.title}</p>
                <p>Price : ${product.price}</p>
                <p>Category : ${product.category}</p>
                <button onclick="deleteData(${index})">Delete</button>
            `;
            container.appendChild(item);
        });
    }
}

// delete data
function deleteData(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayData(products);
    filterCategory(); // update category buttons too
}

// onload
window.onload = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length == 0) {
        fetchData();
    } else {
        displayData(products);
        filterCategory();
    }
}
