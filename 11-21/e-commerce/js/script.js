let cart = [];
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

//CARRELLO
const cartBtn = document.querySelector(".CartBtn");
cartBtn.addEventListener("click", () => {
    const cartDiv = document.querySelector(".cart");
    cartDiv.classList.toggle("active");
    if (cartDiv.classList.contains("active")) {
        cartBtn.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-icon lucide-x"
            >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
        `;
    } else {
        cartBtn.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
        `;
    }
});

const addToCart = (id) => {
    if (!cart.find((i) => i.id == id)) {
        cart.push({ id: id, quantity: 1 });
    } else {
        cart = cart.map((c) =>
            c.id == id
                ? {
                      ...c,
                      quantity: c.quantity + 1,
                  }
                : c
        );
    }
    //console.log(cart);
    updateCart();
};

const updateCart = () => {
    const cartItems = cart
        .map((item) => {
            const product = catalog.find((cat) => cat.id === item.id);
            return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter(Boolean);
    console.log(cartItems);

    const cartDiv = document.querySelector(".cart");
    cartDiv.innerHTML = "";
    cartItems.forEach((c) => {
        const div = document.createElement("div");
        div.innerHTML = generateCartCard(c);
        cartDiv.appendChild(div);
    });
};

function generateCartCard({ id, name, price, category, img, quantity }) {
    return `
        <div class="cart-item" data-it=${id}>
            <img src=${img} alt=${name} class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-name">${name}</h4>
                <p class="cart-item-qty">Quantità: ${quantity}</p>
                <p class="cart-item-total">Totale: € ${quantity * price}</p>
            </div>
        </div>
    `;
}

//CATALOGO
function showCatalog(search = "", category = "All") {
    const catalogDiv = document.querySelector(".catalog");
    catalogDiv.innerHTML = "";

    const normalizedSearch = search.toLowerCase();

    const filteredCatalog = catalog.filter((p) => {
        const matchSearch = !search || p.name.toLowerCase().includes(normalizedSearch);
        const matchCategory = category === "All" || p.category === category;

        return matchSearch && matchCategory;
    });

    filteredCatalog.forEach((product) => {
        const div = document.createElement("div");
        div.innerHTML = generateCard(product);
        catalogDiv.appendChild(div);
    });
}

function generateCard({ id, name, price, category, img }) {
    return `
        <div class="product-card" data-id = ${id}>
            <img src=${img} alt=${name} class="product-img" />
            <h3 class="product-name">${name}</h3>
            <p class="product-price">€ ${price}</p>
            <button class="add-cart-btn" onclick="addToCart('${id}')">Aggiungi al carrello</button>
        </div>
    `;
}

//FILTRI
const searchInput = document.querySelector(".search-input");
const selectCategory = document.querySelector(".styled-select");

searchInput.addEventListener("input", (event) => {
    const search = event.target.value;
    //console.log(search);

    showCatalog(search, "All");
});

selectCategory.addEventListener("change", (event) => {
    const category = event.target.value;
    showCatalog("", category);
});
