const cart = [];
const catalog = [
    { id: crypto.randomUUID(), name: "Wireless Mouse", price: 25, category: "Electronics", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Mechanical Keyboard", price: 80, category: "Electronics", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "USB-C Charger 30W", price: 20, category: "Electronics", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Laptop Stand", price: 35, category: "Accessories", img: "https://placehold.co/200" },
    {
        id: crypto.randomUUID(),
        name: "Noise-Cancelling Headphones",
        price: 120,
        category: "Electronics",
        img: "https://placehold.co/200",
    },

    { id: crypto.randomUUID(), name: "Smart LED Bulb", price: 18, category: "Home", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Ceramic Coffee Mug", price: 12, category: "Kitchen", img: "https://placehold.co/200" },
    {
        id: crypto.randomUUID(),
        name: "Stainless Steel Water Bottle",
        price: 22,
        category: "Outdoor",
        img: "https://placehold.co/200",
    },
    {
        id: crypto.randomUUID(),
        name: "Portable Power Bank 10,000mAh",
        price: 28,
        category: "Electronics",
        img: "https://placehold.co/200",
    },
    { id: crypto.randomUUID(), name: "Bluetooth Speaker", price: 45, category: "Electronics", img: "https://placehold.co/200" },

    { id: crypto.randomUUID(), name: "Notebook A4", price: 6, category: "Stationery", img: "https://placehold.co/200" },
    {
        id: crypto.randomUUID(),
        name: "Ballpoint Pen Set (5 pcs)",
        price: 9,
        category: "Stationery",
        img: "https://placehold.co/200",
    },
    { id: crypto.randomUUID(), name: "Desk Organizer Tray", price: 15, category: "Office", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "LED Desk Lamp", price: 32, category: "Office", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Ergonomic Office Chair", price: 160, category: "Office", img: "https://placehold.co/200" },

    { id: crypto.randomUUID(), name: "Cotton T-Shirt", price: 18, category: "Clothing", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Hoodie Sweatshirt", price: 40, category: "Clothing", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Baseball Cap", price: 15, category: "Clothing", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Running Shoes", price: 70, category: "Clothing", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Sunglasses", price: 30, category: "Accessories", img: "https://placehold.co/200" },

    { id: crypto.randomUUID(), name: "Toaster 2-Slice", price: 28, category: "Kitchen", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Electric Kettle", price: 25, category: "Kitchen", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Chef Knife 8-inch", price: 35, category: "Kitchen", img: "https://placehold.co/200" },
    {
        id: crypto.randomUUID(),
        name: "Non-Stick Frying Pan 28cm",
        price: 29,
        category: "Kitchen",
        img: "https://placehold.co/200",
    },
    { id: crypto.randomUUID(), name: "Cutting Board Bamboo", price: 18, category: "Kitchen", img: "https://placehold.co/200" },

    { id: crypto.randomUUID(), name: "Backpack 20L", price: 45, category: "Outdoor", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Camping Flashlight", price: 20, category: "Outdoor", img: "https://placehold.co/200" },
    { id: crypto.randomUUID(), name: "Yoga Mat", price: 25, category: "Fitness", img: "https://placehold.co/200" },
    {
        id: crypto.randomUUID(),
        name: "Adjustable Dumbbell 10kg",
        price: 55,
        category: "Fitness",
        img: "https://placehold.co/200",
    },
    {
        id: crypto.randomUUID(),
        name: "Stainless Steel Travel Mug",
        price: 17,
        category: "Kitchen",
        img: "https://placehold.co/200",
    },
];

document.addEventListener("DOMContentLoaded", (event) => {
    showCatalog();
});

const cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", () => {
    
})

function showCatalog() {
    const catalogDiv = document.querySelector(".catalog");
    catalog.forEach((p) => {
        const div = document.createElement("div");
        div.innerHTML = generateCard(p);
        catalogDiv.appendChild(div);
    });
}

function generateCard({ id, name, price, category, img }) {
    return `
        <div class="product-card" data-id = ${id}>
            <img src=${img} alt="Prodotto" class="product-img" />
            <h3 class="product-name">${name}</h3>
            <p class="product-price">€ ${price}</p>
            <button class="add-cart-btn">Aggiungi al carrello</button>
        </div>
    `;
}
