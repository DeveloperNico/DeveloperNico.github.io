function calcularJurosCompostos() {
    let capital = parseFloat(document.getElementById('capital').value);
    let taxa = parseFloat(document.getElementById('taxa').value);
    let tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos em todos os campos.";
        return;
    }

    let conta = capital * Math.pow(1 + (taxa / 100), tempo);

    document.getElementById('resultado').innerText = `O montante final é de ${conta.toFixed(2)}`;

    document.getElementById('capital').value = "";
    document.getElementById('taxa').value = "";
    document.getElementById('tempo').value = "";
    document.getElementById('capital').focus();
};

document.getElementById("calcular").addEventListener("click", calcularJurosCompostos);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularJurosCompostos();
    }
});
