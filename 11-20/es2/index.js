const colors = ["red", "cyan", "green", "black", "blue", "purple", "orange", "gray", "yellow"];
const secret = colors[Math.floor(Math.random() * colors.length)];
console.log(secret);

const colorDiv = document.querySelector(".colors");

const msg = document.querySelector("#messaggio");

colors.forEach((c) => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = c;
    div.classList.add("color");

    div.addEventListener("click", () => {
        const isSecret = c == secret ? true : false;
        if (isSecret) {
            msg.textContent = "🎉 Hai indovinato il colore segreto!";
            const divs = document.querySelectorAll(".color");
            divs.forEach((d) => {
                d.style.backgroundColor = secret;
            });
        } else {
            msg.textContent = "😅 Riprova!";
            const altri = colors.filter((col) => col != secret && col != c);
            msg.textContent = `😅 Riprova! 
             Hint: Non è neanche il ${altri[Math.floor(Math.random() * altri.length)]}`;
        }
    });

    colorDiv.appendChild(div);
});
