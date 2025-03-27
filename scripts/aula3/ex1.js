const calculadora = (operador) => {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Por favor, insira números válidos!";
    } else {
        switch (operador) {
            case '+':
                resultado = `${numero1} + ${numero2} = ${numero1 + numero2}`;
                break;
            case '-':
                resultado = `${numero1} - ${numero2} = ${numero1 - numero2}`;
                break;
            case '*':
                resultado = `${numero1} x ${numero2} = ${numero1 * numero2}`;
                break;
            case '/':
                resultado = numero2 !== 0
                    ? `${numero1} / ${numero2} = ${numero1 / numero2}`
                    : "Erro, divisão por zero!";
                break;
            default:
                resultado = "Operação inválida!";
        }
    }

    document.getElementById('resultado').innerText = resultado; // Exibir resultado corretamente
};

// Adicionando eventos aos botões
document.getElementById('soma').addEventListener('click', () => calculadora('+'));
document.getElementById('subtracao').addEventListener('click', () => calculadora('-'));
document.getElementById('multiplicacao').addEventListener('click', () => calculadora('*'));
document.getElementById('divisao').addEventListener('click', () => calculadora('/'));
