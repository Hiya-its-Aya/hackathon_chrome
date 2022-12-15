
const gameArray = ['https://snake.googlemaps.com/', 'https://www.google.com/logos/2010/pacman10-i.html', 'https://www.google.com/fbx?fbx=tic_tac_toe', 'https://www.google.com/fbx?fbx=minesweeper']

window.addEventListener("DOMContentLoaded", ()=>{
    // document.querySelector('#game-time').addEventListener('click', () => {
    //     setTimeout(() => {
    //         window.open("./popup.html");
    //     }, 5000)
    // });

    let pauseButton = document.getElementById('pause')
    let resetButton = document.getElementById('reset')
    let gameButton = document.getElementById('game-time')

    const output = document.querySelector('#countdown')
    let isPaused = false;
    let timer; 
    
    // startButton.addEventListener(`click`, () => {
    function startCountdown(){
        let milisec;
        let time = new Date();
        let seconds = 0;
        let minutes = 0; 
        
        timer = window.setInterval(function() {
            if(!isPaused) {
                milisec = (new Date()).getTime() - time.getTime();
                seconds = parseInt(milisec / 1000);
                if (seconds % 60 === 0) {minutes++;
                    seconds = 0};
                output.textContent = minutes + 'min ' + seconds + "s " ;
            }
            if (seconds === 15) {
                // window.open("./popup.html");
                window.clearInterval(timer);
                // gameButton.style = 'visibility: visible'
                output.textContent = 'GAME TIME!!!'
                openGame();

            }
        }, 1000);
    }
    startCountdown();
    // })

    pauseButton.addEventListener(`click`, () => {
        isPaused = true;
    })

    resetButton.addEventListener(`click`, () => {
        window.clearInterval(timer);
        output.textContent = '0min 0s';
        startCountdown();
    })

    function openGame(){
        const gameChoice = Math.floor(Math.random()*gameArray.length)
        window.open(gameArray[gameChoice], 'window', 'width = 700, height = 600, top =100')
    
    // gameButton.addEventListener(`click`, () => {
    //    const gameChoice = Math.floor(Math.random()*gameArray.length)
    //     window.open(gameArray[gameChoice], 'window', 'width = 700, height = 600,')
    // })
    }
})





   
