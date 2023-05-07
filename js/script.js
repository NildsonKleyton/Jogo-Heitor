const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');
const terrain = document.querySelector('.terrain');
const imgReload = document.querySelector('.imgReload');
const clouds = document.querySelector('.clouds');
const jump = () => {
    player.classList.add('jump')
    setTimeout(() => {
        player.classList.remove('jump')
    }, 500)
}
//terra em carrosel animado
const terrainContainer = document.querySelector('.terrain-container');
const terrainImages = document.querySelectorAll('.terrain');
let terrainPosition = 0;
let terrainSpeed = 8;
let score = 0;

const updateScore = () => {
    score++;
    document.getElementById("scoreValue").innerText = score;
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 85 && pipePosition > 0 && playerPosition < 165) {

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = './Images/playerOver.png';
        player.style.width = '6.5em';
        player.style.marginLeft = '-5px';
        player.style.marginBottom = '-5px';

        imgReload.src = './Images/recaregar.png';

        terrainSpeed = 0;

        clearInterval(loop);//para o loop
    } else if (pipePosition <= -60) {
        updateScore();
    }

}, 20);

// Adiciona um ouvinte de eventos para o tecla pressionada, clique com mouse e toque na tela
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);


// Define a execução do do botão reload
imgReload.addEventListener('click', function () {
    if (imgReload.src.endsWith('/recaregar.png')) {
        location.reload(); // Recarrega a página se a imagem for a correta
    }
});

//terra em carrosel animado
const moveTerrain = () => {
    terrainPosition -= terrainSpeed;
    terrainContainer.style.left = terrainPosition + 'px';

    if (terrainPosition <= -terrainImages[0].width) {
        terrainPosition += terrainImages[0].width;
        terrainContainer.appendChild(terrainImages[0]);
    }
}

setInterval(moveTerrain, 20);