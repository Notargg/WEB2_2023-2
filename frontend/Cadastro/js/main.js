document.addEventListener('DOMContentLoaded', () => {
    var formCadastro = document.getElementById('cadastro-form');

    formCadastro.addEventListener('submit', function(e) {
        e.preventDefault();

        var username = document.querySelector('input[name="username"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var senha = document.querySelector('input[name="senha"]').value;
        var confimeSenha = document.querySelector('input[name="confirmeSenha"]').value;

        if (senha !== confimeSenha) {
            alert('As senhas não coincidem!');
            return; 
        }

        fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, senha }) 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
        });
    });
});

