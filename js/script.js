const play = document.querySelector('.play');
const pipe = document.querySelector('.pipe');

const jump = () => {
    play.classList.add('jump')
    setTimeout(()=>{
        play.classList.remove('jump')
    },500)
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const playPosition = +window.getComputedStyle(play).bottom.replace('px', '');

    if(pipePosition <= 110 && pipePosition > 0 && playPosition <80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        play.style.animation = 'none';
        play.style.bottom = `${playPosition}px`;

        play.src='./Images/playOver.png'
        play.style.width = '110px';
        play.style.marginLeft = '15px' 
        play.style.marginBottom = '-5px'
        
        clearInterval(loop)//para o loop
    }


},20);

// Adiciona um ouvinte de eventos para o tecla pressionada, clique com mouse e toque na tela
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);

// Obtém o botão por seu ID
const btnReload = document.getElementById('btn-reload');

// Define o ouvinte de eventos para o clique no botão
btnReload.addEventListener('click', function() {
  location.reload(); // Recarrega a página
});