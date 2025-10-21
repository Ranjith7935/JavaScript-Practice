const btn = document.getElementById("og");
const container = document.querySelector(".container");
const BASE_URL = "http://localhost:3000/products";

btn.addEventListener("click", async () => {
    await fetchProducts();
});


async function fetchProducts() {
    try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    showData(data);
    } catch (err) {
    console.error("Error fetching products:", err);
    }
}


function showData(data) {
    container.innerHTML = "";
    data.forEach(obj => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
        <h3>ID: ${obj.id}</h3>
        <p><strong>Name:</strong> ${obj.title}</p>
        <p><strong>Price:</strong> ₹${obj.price || 0}</p>
        <button class="delete-btn" data-id="${obj.id}">Delete</button>
    `;
    container.append(div);
    });

    
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(btn => {
    btn.addEventListener("click", async (e) => {
        const id = e.target.getAttribute("data-id");
        await deleteProduct(id);
    });
    });
}


async function deleteProduct(id) {
    try {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        alert(`Product ID ${id} deleted successfully`);
        fetchProducts(); 
    } else {
        alert("Failed to delete product");
    }
    } catch (err) {
    console.error("Error deleting product:", err);
    }
}