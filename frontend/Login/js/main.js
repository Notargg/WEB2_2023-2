document.addEventListener('DOMContentLoaded', () => {
    var formLogin = document.getElementById('login-form');

    formLogin.addEventListener('submit', function(e){
        e.preventDefault();
        
        var email = document.querySelector('input[name="email"]').value;
        var senha = document.querySelector('input[name="senha"]').value;

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha }) 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }
            return response.json();
        })
        .then(data => {
            if (data.message === 'Login bem-sucedido') {
                window.location.href = 'http://127.0.0.1:5500/WEB2_2023-2/Trelo/'; 
            } else {
                alert(data.message); 
            }
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
        });
    })
});

/*

var prefixoImagens = '../../Personagem/'

var customizationOptions = {
    cabelo: [prefixoImagens + '/Cabelo/cabeloLoiro.png', prefixoImagens + '/Cabelo/cabeloPreto.png', prefixoImagens + '/Cabelo/cabeloCastanho.png'],
    pele: [prefixoImagens + '/Pele/peleClara.png', prefixoImagens + '/Pele/peleMedia.png', prefixoImagens + '/Pele/peleEscura.png'],
    olho: [prefixoImagens + 'Olho/olho.png'],
    planoDeFundo: [prefixoImagens + '/Tela Batalha Chuvosa.jpg', '../../Personagem/Tela Batalha Nublado.jpg']
};

var currentOptionIndexes = {
    cabelo: 0, 
    pele: 0, 
    olho: 0, 
    planoDeFundo: 0
};

function loadCharacterConfiguration() {
    for (var part in currentOptionIndexes) {
        if (currentOptionIndexes.hasOwnProperty(part)) {
            var savedIndex = localStorage.getItem(part);
            if (savedIndex) {
                currentOptionIndexes[part] = parseInt(savedIndex, 10); // Parse the saved index as a base-10 integer
                var partImage = document.getElementById(part + '-image');
                if (partImage) {
                    partImage.src = customizationOptions[part][currentOptionIndexes[part]]; // Set the image source
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadCharacterConfiguration();
});
*/ 