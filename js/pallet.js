// Configurações do canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurando o mapa
const tileSize = 52.4; // tamanho dos bloquinhos
const mapRows = 18; // numero de linhas
const mapCols = 18; // numero de colunas

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Configurações do personagem
let player = {
    x: 2,
    y: 2,
};

// Carregar a imagem do fundo
const backgroundImage = new Image();
backgroundImage.src = './assets/images/mapBackground/pallet.png';

// Carregar a imagem do personagem
const playerImage = new Image();
playerImage.src = './assets/images/character/1.png';

// Função para desenhar o mapa
function drawMap() {
    for (let row = 0; row < mapRows; row++) {
        for (let col = 0; col < mapCols; col++) {

            if (map[row][col] === 1) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.0)';
            } else {
                ctx.fillStyle = 'rgba(0, 255, 0, 0.0)';
            }
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

        }
    }
}

// Função para desenhar o personagem
function drawPlayer() {
    ctx.drawImage(playerImage, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

// Movimentação do personagem
window.addEventListener('keydown', (e) => {
    let newX = player.x;
    let newY = player.y;

    if (e.key === 'w'){
        newY--;
        playerImage.src = './assets/images/character/4.png'
    }    
    if (e.key === 's'){
        newY++;
        playerImage.src = './assets/images/character/1.png'
    }    
    if (e.key === 'a'){
        newX--;
        playerImage.src = './assets/images/character/5.png'
    }
    if (e.key === 'd'){
        newX++;
        playerImage.src = './assets/images/character/7.png'
    }

    if (
        newX >= 0 &&
        newX < mapCols &&
        newY >= 0 &&
        newY < mapRows &&
        map[newY][newX] === 0
    ) {
        player.x = newX;
        player.y = newY;
    }
    
    draw();
});

// Função principal de desenho
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    drawMap();

    drawPlayer();
}


backgroundImage.onload = () => {
    playerImage.onload = () => {
        draw();
    };
};
