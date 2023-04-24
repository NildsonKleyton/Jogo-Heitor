const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');
const terrain = document.querySelector('.terrain');
const imgReload = document.querySelector('#btn-reload');
const btnReload = document.querySelector('#btn-reload');
const jump = () => {
    player.classList.add('jump')
    setTimeout(()=>{
        player.classList.remove('jump')
    },500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    const terrainPosition  = terrain.offsetLeft;

    if(pipePosition <= 85 && pipePosition > 0 && playerPosition <165){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src='./Images/playerOver.png';
        player.style.width = '6.5em';
        player.style.marginLeft = '-5px'; 
        player.style.marginBottom = '-5px';

        imgReload.src='./Images/recaregar.png';

        terrain.style.animation = 'none';
        terrain.style.left = `${terrainPosition}px`;
        
        clearInterval(loop);//para o loop
    }


},20);

// Adiciona um ouvinte de eventos para o tecla pressionada, clique com mouse e toque na tela
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);

// Obtém o botão por seu ID


// Define a execução do do botão reload
btnReload.addEventListener('click', function() {
    if (imgReload.src.endsWith('/recaregar.png')) {
        location.reload(); // Recarrega a página se a imagem for a correta
      }
});