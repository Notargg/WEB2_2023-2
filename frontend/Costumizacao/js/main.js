var prefixoImagens = '../Personagem/'

var opcoes = {
    cabelo: [prefixoImagens + '/Cabelo/cabeloLoiro.png', prefixoImagens + '/Cabelo/cabeloPreto.png', prefixoImagens + '/Cabelo/cabeloCastanho.png'],
    pele: [prefixoImagens + '/Pele/peleClara.png', prefixoImagens + '/Pele/peleMedia.png', prefixoImagens + '/Pele/peleEscura.png'],
    olho: [prefixoImagens + 'Olho/olho.png'],
    planoDeFundo: [prefixoImagens + '/Tela Batalha Chuvosa.jpg', prefixoImagens + '/Tela Batalha Nublado.jpg', prefixoImagens + '/Tela Tabalha Neve.jpg']
};

var currentOptionIndexes = {
    cabelo: 0,
    pele: 0,
    olho: 0,
    planoDeFundo: 0
};

function changeCharacter(parte, direcao) {
    var currentIndex = currentOptionIndexes[parte];
    var options = opcoes[parte];

    if (direcao === 'next') {
        currentOptionIndexes[parte] = (currentIndex + 1) % options.length;
    } else if (direcao === 'prev') {
        currentOptionIndexes[parte] = (currentIndex - 1 + options.length) % options.length;
    }

    var parteImage = document.getElementById(parte + '-image');
    parteImage.src = options[currentOptionIndexes[parte]];
}

function salvaPersonagem() {
    for (var part in currentOptionIndexes) {
        if (currentOptionIndexes.hasOwnProperty(part)) {
            localStorage.setItem(part, currentOptionIndexes[part]);
        }
    }
    console.log('Character saved!');
}
