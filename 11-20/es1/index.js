// LIVELLO 1

//1.1
const playlist = ["heat", "Sunrise", "Echo"];
console.log(playlist);
playlist.push("Downstairs", "RAWFEAR");
console.log(playlist);

const last = playlist.pop();
playlist.unshift(last);
console.log(playlist);

console.log(playlist.slice(1, playlist.length - 1));

console.log("----------------------");

//1.2
const coda = ["A", "B", "C", "D"];
coda.unshift("E", "F");
console.log(coda);
coda.pop();
console.log(coda);
const el = coda.splice(1, 1);
console.log(el);

console.log("----------------------");

//1.3
const numeri = [5, 3, 9, 1, 4];
console.log(numeri);

numeri.pop();
numeri.shift();
numeri.push(7);
console.log(numeri);

const n = numeri.slice(0, 2);
console.log(n);

console.log("----------------------");

//1.4
const regali = ["Libro", "Puzzle", "Sciarpa"];
console.log(regali);

regali.unshift("Maglione", "Macchinine");
console.log(regali);

regali.splice(1, 1);
console.log(regali);

const copy = regali.slice(-2);
console.log(copy);

console.log("----------------------");

//1.5
const messaggi = ["hey", "ciao", "tutto bene?", "ok"];
console.log(messaggi);

messaggi.push("no");
messaggi.unshift("come stai?");
console.log(messaggi);

messaggi.pop();
console.log(messaggi);

console.log(messaggi.slice(1, messaggi.length - 1));

console.log("----------------------");

//1.6
const scorte = [12, 5, 8, 3, 9];
console.log(scorte);

scorte.push(4, 16);
console.log(scorte);

scorte.shift();
const last1 = scorte.pop();
scorte.unshift(last1);
console.log(scorte);

const copy1 = scorte.slice(1, scorte.length - 1);
console.log(copy1);

console.log("----------------------");

//LIVELLO 2

//2.1
const spesa = Math.floor(Math.random() * 200);
console.log("Spesa: ", spesa);
console.log(spesa >= 100 ? "sconto" : "nessuno");

console.log("----------------------");

//2.2

function concatenaSep(sep, ...pezzi) {
    let result = "";
    //console.log(pezzi);
    pezzi.forEach((p, i) => {
        if (i < pezzi.length - 1) {
            result += p + sep;
        } else result += p;
    });
    return result;
}

const stringhe = ["Ciao", "io", "sono", "Gabriele"];

console.log(concatenaSep(" _ ", "Ciao", "io", "sono", "Gabriele"));
console.log(concatenaSep(" _ ", ...stringhe));

//2.3

const t1 = ["js", "es6"];
const t2 = ["alg", "db"];
console.log(t1);
console.log(t2);

const allTags = [...t1, ...t2];
console.log(allTags);

console.log("----------------------");

//2.4
const eta = Math.floor(Math.random() * 30);
console.log("Età: ", eta);
console.log(eta >= 18 ? "Adulto" : "Minore");

console.log("----------------------");

//2.5
function sommaVariabile(...nums) {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}

const numArray = [1, 2, 3, 4, 5];

console.log(sommaVariabile(1, 2, 3, 4, 5));
console.log(sommaVariabile(...numArray));

//2.6

const p1 = ["pane", "latte"];
console.log(p1);

const p2 = ["pasta", "uova"];
console.log(p2);

const listaCompleta = [...p1, ...p2];
console.log(listaCompleta);

console.log("----------------------");

//LIVELLO 3

//3.1
const info = ["Luca", 28, "CTO", "Milano", "Italia"];

const [nome, , ruolo, ,] = info;
console.log(nome);
console.log(ruolo);

console.log("----------------------");

//3.2
const user = { username: "cli_user", role: "editor" };
const { username: nick, role } = user;
console.log(nick);
console.log(role);
user.active = false;

console.log(user);

console.log("----------------------");

//3.3
function prendiPrimoEConta(...items) {
    const [primo, ...resto] = items;
    return {
        primo: primo,
        resto: resto,
    };
}

console.log(prendiPrimoEConta("Luca", 28, "CTO", "Milano", "Italia"));
console.log(prendiPrimoEConta(...info));

console.log("----------------------");

//3.4

const dati = ["Marco", "Rossi", 32, "Roma", "IT"];
const [nome1, , , citta] = dati;
console.log(nome1);
console.log(citta);

console.log("----------------------");

//3.5

const config = { theme: "dark" };
const { theme, lang: lingua = "it" } = config;
console.log(theme);
console.log(lingua);

console.log("----------------------");

//3.6

function riassumiUtente({ nome, cognome, ...resto }) {
    return {
        nomeCompleto: `${nome} ${cognome}`,
        altriDati: resto,
    };
}

console.log(riassumiUtente({ nome: "Gabriele", cognome: "Zito", eta: 26, citta: "Palermo", stato: "IT" }));

//BONUS

//1
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copia = [...original];

copia.pop();
copia.pop();
console.log(original);
console.log(copia);

console.log("----------------------");

//2

const lista = [
    { nome: "Gabriele", voto: 30 },
    { nome: "Samuele", voto: 29 },
    { nome: "Giuseppe", voto: 28 },
    { nome: "Francesco", voto: 27 },
];

function generaPresentazione({ nome, voto }) {
    return `Ciao sono ${nome} e ho preso ${voto}`;
}

lista.forEach((o) => {
    console.log(generaPresentazione(o));
});

console.log("----------------------");

//3

function funzioneConPiuArray(...arrays) {
    const [primo, ...altri] = arrays;

    if (primo && primo[1]) {
        return primo[1];
    }
    return "L'elemento non esiste";
}

const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(funzioneConPiuArray([]));
console.log(funzioneConPiuArray(...array1));

console.log("----------------------");

//4

function array3elements(a1, a2, a3) {
    return [a2, a3];
}

console.log("----------------------");

//5

const rand = Math.floor(Math.random() * 100);
console.log(rand % 2 == 0 ? "pari" : "dispari");

console.log("----------------------");

//6
function checkStringhe(...str) {
    const result = [];
    str.forEach((s) => {
        if (s.length > 3) {
            result.push(s);
        }
    });
    return result;
}
console.log(checkStringhe("ciao", "ac", "aw", "ciccio", "p", "hello", "a", "world"));

console.log("----------------------");

//7
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
const a3 = [3, 2, 1];

const joined = [...a1, ...a2, ...a3];
console.log(joined);

console.log("----------------------");

//8

function func1(prodotto) {
    const { nome, prezzo = 0 } = prodotto;
    return `Nome: ${nome}, Prezzo: ${prezzo}`;
}

console.log(func1({ nome: "Iphone 20", prezzo: "2000" }));
console.log(func1({ nome: "Aria" }));
