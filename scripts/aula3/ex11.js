const calcularINSS = () => {
    let salario = parseFloat(document.getElementById('faixa').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(salario) || salario < 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        resultado.style.color = "red";
        return;
    }

    let inss;

    if (salario <= 1320) {
        inss = salario * 0.075;
    } else if (salario <= 2571.29) {
        inss = (1320 * 0.075) + ((salario - 1320) * 0.09);
    } else if (salario <= 3856.94) {
        inss = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((salario - 2571.29) * 0.12);
    } else if (salario <= 7507.49) {
        inss = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((salario - 3856.94) * 0.14);
    } else {
        inss = (1320 * 0.075) + ((2571.29 - 1320) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((7507.49 - 3856.94) * 0.14);
    }

    resultado.innerText = `O valor do INSS devido é: R$ ${inss.toFixed(2)}`;

    document.getElementById('faixa').value = "";
    document.getElementById('faixa').focus();
};

document.getElementById("calcular").addEventListener("click", calcularINSS);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calcularINSS();
    }
});
