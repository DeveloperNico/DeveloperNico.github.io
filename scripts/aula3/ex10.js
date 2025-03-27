const calcularImposto = () => {
    let salario = parseFloat(document.getElementById('faixa').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(salario) || salario < 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        resultado.style.color = "red";
        return;
    }

    if (salario <= 1903.98) {
        resultado.innerText = `Isento de imposto`;
    } else if (salario <= 2826.65) {
        resultado.innerText = `O imposto devido é: R$ ${(salario * 0.075 - 142.80).toFixed(2)}`;
    } else if (salario <= 3751.05) {
        resultado.innerText = `O imposto devido é: R$ ${(salario * 0.15 - 354.80).toFixed(2)}`;
    } else if (salario <= 4664.68) {
        resultado.innerText = `O imposto devido é: R$ ${(salario * 0.225 - 636.13).toFixed(2)}`;
    } else {
        resultado.innerText = `O imposto devido é: R$ ${(salario * 0.275 - 869.36).toFixed(2)}`;
    }

    document.getElementById('faixa').value = "";
    document.getElementById('faixa').focus();
};

document.getElementById("calcular").addEventListener("click", calcularImposto);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularImposto();
    }
});