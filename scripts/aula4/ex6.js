let nomes = ["Ariane", "Nicolas", "Gabriela", "Joyce", "Geovanna", "João", "Thifany", "Maria Eduarda", "Evellyn", "Vinícius"];

function pesquisarNome() {
    let inputNome = document.getElementById('nome').value.trim();

    if (inputNome === "") {
        document.getElementById('resultado').innerText = "Por favor, digite um nome.";
        return;
    }

    if (nomes.includes(inputNome)) {
        document.getElementById('resultado').innerText = `O nome ${inputNome} está na lista!`;
    } else {
        document.getElementById('resultado').innerText = `O nome ${inputNome} não está na lista.`;
    }
}

document.getElementById("pesquisarNome").addEventListener("click", pesquisarNome);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pesquisarNome();
    }
});
