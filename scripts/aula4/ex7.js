let nomes = ["Ariane", "Nicolas", "Gabriela", "Joyce", "Geovanna", "João", "Thifany", "Maria Eduarda", "Evellyn", "Vinícius"];
let tentativas = 5;

function pesquisarNome() {
    let inputNome = document.getElementById('nome').value.trim();

    if (inputNome === "") {
        document.getElementById('resultado').innerText = "Por favor, digite um nome.";
        return;
    }

    if (tentativas <= 0) {
        document.getElementById('resultado').innerText = "Suas tentativas acabaram!";
        return;
    }

    if (nomes.includes(inputNome)) {
        document.getElementById('resultado').innerText = `O nome ${inputNome} está na lista!`;
    } else {
        tentativas--;
        document.getElementById('resultado').innerHTML = 
            `O nome ${inputNome} não está na lista.<br>Tentativas restantes = ${tentativas}.`;
    }

    if (tentativas === 0) {
        document.getElementById('resultado').innerHTML += "<br>Suas tentativas acabaram!";
    }
}

document.getElementById("pesquisarNome").addEventListener("click", pesquisarNome);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pesquisarNome();
    }
});
