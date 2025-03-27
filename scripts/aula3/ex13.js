function simularFinanciamento() {
    let valor = parseFloat(document.getElementById('valor').value);
    let taxa = parseFloat(document.getElementById('taxa').value) / 100;
    let numeroParcelas = parseInt(document.getElementById('numeroParcelas').value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(numeroParcelas) || valor <= 0 || taxa <= 0 || numeroParcelas <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos em todos os campos.";
        return;
    }

    let i = taxa / 12;
    let conta = (valor * i) / (1 - Math.pow(1 + i, -numeroParcelas));

    document.getElementById('resultado').innerText = `O valor da parcela será de R$ ${conta.toFixed(2)}`;

    document.getElementById('valor').value = "";
    document.getElementById('taxa').value = "";
    document.getElementById('numeroParcelas').value = "";
    document.getElementById('valor').focus();
};

document.getElementById("calcular").addEventListener("click", simularFinanciamento);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        simularFinanciamento();
    }
});
