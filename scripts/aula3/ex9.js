function validarFormulario() {
    let erro = false;

    document.querySelectorAll('.erro-mensagem').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.classList.remove('erro'));

    let nome = document.getElementById('nome').value;
    if (nome === '') {
        erro = true;
        document.getElementById('erro-nome').textContent = 'Nome é obrigatório';
        document.getElementById('nome').classList.add('erro');
        document.getElementById('nome').focus();
    }

    let endereco = document.getElementById('endereco').value;
    if (endereco === '') {
        erro = true;
        document.getElementById('erro-endereco').textContent = 'Endereço é obrigatório';
        document.getElementById('endereco').classList.add('erro');
    }

    let telefone = document.getElementById('telefone').value;
    if (telefone === '') {
        erro = true;
        document.getElementById('erro-telefone').textContent = 'Telefone é obrigatório';
        document.getElementById('telefone').classList.add('erro');
    }

    let celular = document.getElementById('celular').value;
    if (celular === '') {
        erro = true;
        document.getElementById('erro-celular').textContent = 'Celular é obrigatório';
        document.getElementById('celular').classList.add('erro');
    }

    let email = document.getElementById('email').value;
    if (email === '') {
        erro = true;
        document.getElementById('erro-email').textContent = 'Email é obrigatório';
        document.getElementById('email').classList.add('erro');
        document.getElementById('email').focus();
    }

    let sexoEscolhido = document.querySelector('input[name="sexo"]:checked');
    if (!sexoEscolhido) {
        erro = true;
        alert("Por favor, selecione seu sexo.");
    }

    if (erro) {
        return false;
    }

    return true;
}

document.getElementById("calcular").addEventListener("click", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        document.getElementById('resultado').innerText = "Cadastro enviado com sucesso!";
    } else {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos obrigatórios.";
    }
});

function removerErro(event) {
    const campo = event.target;
    const erroMensagem = document.getElementById(`erro-${campo.id}`);
    if (erroMensagem) {
        erroMensagem.textContent = '';
        campo.classList.remove('erro');
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', removerErro);
});
