const a = document.querySelectorAll("a");
console.log("Elementi <a>: ");

for (const e of a) {
    console.log(e);
}

const p = document.querySelectorAll("p");
console.log(`Ci sono ${p.length} paragrafi`);

console.log("Elementi con attributo 'data-id'");
const d = document.querySelectorAll("[data-id]");
for (const e of d) {
    console.log(e);
}

console.log("Elementi <a> che portano a sezioni interne: ");
const ai = document.querySelectorAll("a[href^='#']");
for (const e of ai) {
    console.log(e);
}

const contenuto = document.querySelector("#contenuto");

console.log("Il padre di #contenuto è: ");
console.log(contenuto.parentElement);

console.log("i figli diretti: ");
console.log(contenuto.children);

console.log("Il fratello:");
console.log(contenuto.nextElementSibling || "Non ha fratelli");
