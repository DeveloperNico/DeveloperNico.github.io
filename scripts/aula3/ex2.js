function inverterString () {
    let frase = document.getElementById('frase').value;

    let fraseInvertida = frase.split('').reverse().join('');

    document.getElementById('resultado').innerText = `Frase invertida = ${fraseInvertida}.`;

    document.getElementById('frase').value = "";
    document.getElementById('frase').focus();
}

document.getElementById("calcular").addEventListener("click", inverterString);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        inverterString();
    }
});