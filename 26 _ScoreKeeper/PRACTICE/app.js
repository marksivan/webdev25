const p1Button = document.getElementById('p1-button');
const p2Button = document.getElementById('p2-button');
const p1Display = document.getElementById('p1-display')
const p2Display = document.getElementById('p2-display')
const resetButton = document.getElementById('reset');
const WinningScoreSelect = document.getElementById('play-to');



let p1Score = 0;
let p2Score = 0;
let winningScore = WinningScoreSelect;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if (!isGameOver){
        p1Score++;
        if (p1Score === winningScore){
            isGameOver = true; 
        }
      p1Display.textContent = p1Score;

    }
    
    
})

p2Button.addEventListener('click', function(){
    if (!isGameOver){
        p2Score++;
        if (p2Score === winningScore){
            isGameOver = true; 
        }
    p2Display.textContent = p2Score;

    }
    
    
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    
}


WinningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset()

})