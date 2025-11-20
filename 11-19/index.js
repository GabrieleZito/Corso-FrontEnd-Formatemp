const input = document.querySelector("input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector("ul");
const filterBtn = document.querySelector("#filter-btn");
const clearBtn = document.querySelector("#clear-btn");

addBtn.addEventListener("click", () => {
    if (input.value) {
        const li = document.createElement("li");
        const div = document.createElement("div");
        const p = document.createElement("p");
        const del = document.createElement("button");

        del.classList.add("delBtn");
        del.style.textDecoration = "none";
        del.addEventListener("click", () => {
            li.remove();
            checkEmptyList();
        });

        li.addEventListener("click", () => {
            li.classList.toggle("completata");
        });

        li.addEventListener("dblclick", () => {
            li.classList.toggle("evidenziata");
        });

        p.textContent = input.value;
        del.textContent = "X";

        li.appendChild(p);
        li.appendChild(del);
        ul.appendChild(li);
        input.value = "";
        checkEmptyList();
    }
});

filterBtn.addEventListener("click", () => {
    const select = document.querySelector("select");
    const items = document.querySelectorAll("li");
    switch (select.value) {
        case "all":
            for (const element of items) {
                element.style.display = "flex";
            }
            break;
        case "completed":
            console.log("Completed");
            for (const element of items) {
                if (!element.classList.contains("completata")) {
                    element.style.display = "none";
                }
            }
            break;
    }
});

clearBtn.addEventListener("click", () => {
    ul.innerHTML = "";
});

function checkEmptyList() {
    const p = document.querySelector("#message");
    const items = document.querySelectorAll("li");
    if (items.length < 1) {
        p.textContent = "Nessun Elemento aggiunto";
    } else {
        p.textContent = "";
    }
}
