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

document.addEventListener('keydown', jump);