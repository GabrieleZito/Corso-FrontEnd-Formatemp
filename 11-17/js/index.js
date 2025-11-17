function calcola(op) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = document.getElementById("risultato");
    switch (op) {
        case "+":
            let somma = num1 + num2;
            res.textContent = "Risultato: " + somma;
            break;
        case "*":
            res.textContent = "Risultato: " + num1 * num2;
            break;
        case "/":
            res.textContent = "Risultato: " + num1 / num2;
            break;
        case "-":
            res.textContent = "Risultato: " + (num1 - num2);
            break;
        default:
            break;
    }
}
