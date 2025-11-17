let utenti = [];

const showBtn = document.getElementById("showBtn");
const filterBtn = document.getElementById("filterBtn");

showBtn.addEventListener("click", () => mostraUtenti(utenti));
filterBtn.addEventListener("click", () => mostraUtenti(utenti.filter((u) => u.eta > 18)));

function creaUtente(nome, eta, professione = "non specificata") {
    const utente = {
        nome: nome,
        eta: eta,
        professione: professione,
    };
    switch (professione.toLowerCase()) {
        case "studente":
            utente.categoria = "studente";
            break;
        case "developer":
            utente.categoria = "developer";
            break;
        case "designer":
            utente.categoria = "designer";
            break;
        default:
            utente.categoria = "altro";
            break;
    }
    return utente;
}

const generaMessaggio = (utente) => {
    return `<div>${utente.nome} ha ${utente.eta} ed è classificato come ${utente.categoria}</div>`;
};

const mostraUtenti = (users) => {
    let divLista = document.getElementById("lista");
    divLista.innerHTML = "";
    for (const u of users) {
        divLista.innerHTML += generaMessaggio(u);
    }
};

function debugUtenti() {
    console.table(utenti);
    for (const utente of utenti) {
        for (const chiave in utente) {
            if (!Object.hasOwn(utente, chiave)) continue;
            const element = utente[chiave];

            console.log(`${chiave}: ${element}`);
        }
        console.log("---------------------------------");
    }
}

function invia() {
    let name = document.getElementById("nome").value.trim();
    let age = parseInt(document.getElementById("eta").value.trim());
    let job = document.getElementById("job").value.trim();

    if (!name) {
        console.error("Nome Mancante!");
        return;
    }

    if (!age || age < 5) {
        console.warn("Età non valida");
        return;
    }
    utenti.push(creaUtente(name, age, job));
}
