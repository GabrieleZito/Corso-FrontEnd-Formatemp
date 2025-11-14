function somma() {
    const num1 = prompt("Inserisci primo numero: ");
    const num2 = prompt("Inserisci secondo numero: ");
    const sum = parseInt(num1) + parseInt(num2);
    alert("la somma è: " + sum);
}

function saluta() {
    const nomi = ["Francesco", "Gabriele", "Samuele"];
    for (let i = 0; i < nomi.length; i++) {
        console.log("Ciao " + nomi[i] + "!");
    }
}

function salutaStudente() {
    const studente = {
        nome: "Gabriele",
        cognome: "Zito",
        voto: "30/L",
    };
    alert(studente.nome + " ha preso " + studente.voto);
}

function maiuscola() {
    const parola = prompt("Inserisci la parola: ");
    alert("In maiuscolo: " + parola[0].toUpperCase() + parola.slice(1, parola.length));
}

function quadrati() {
    for (let i = 1; i < 11; i++) {
        console.log(i ** 2);
    }
}
