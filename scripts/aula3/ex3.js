function separarLetras() {
    let nome = document.getElementById('nome').value;

    let separarLetras = nome.split('').join(', ');

    document.getElementById('resultado').innerText = `Nome separado = ${separarLetras}.`;

    document.getElementById('nome').value = "";
    document.getElementById('nome').focus();
}

document.getElementById("calcular").addEventListener("click", separarLetras);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        separarLetras();
    }
});