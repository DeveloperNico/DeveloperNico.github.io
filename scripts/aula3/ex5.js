function ordenarCrescente() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let numero3 = document.getElementById('numero3').value;

    let numero = [numero1, numero2, numero3];

    numero.sort((a, b) => a - b);

    document.getElementById('resultado').innerText = `Ordem crescente = ${numero.join(', ')}.`;
    
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
    document.getElementById('numero3').value = "";
    document.getElementById('numero1').focus();
}

document.getElementById("calcular").addEventListener("click", ordenarCrescente);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        ordenarCrescente();
    }
});