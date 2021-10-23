// @ts-check

let SidesArray = ['front','back', 'right', 'left', 'top', 'bottom']
const cube = document.querySelector('.cube')
const roll = document.querySelector('.roll')
const oneScore = document.querySelector('.OneScore')
const TwoScore = document.querySelector('.twoScore')
let player1Score = 0
let player2Score = 0
let player1Active = true
function CheckScore() {
    if (cube.classList.contains('show-front')) {
        if(player1Active){
            player1Score += 1
            oneScore.innerHTML = `${player1Score}` 
        }else{
            player2Score += 1
        }
    }else if(cube.classList.contains('show-back')){
        if(player1Active){
            player1Score += 2
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 2
        }
    }else if(cube.classList.contains('show-right')){
        if(player1Active){
            player1Score += 3
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 3
        }
    }else if(cube.classList.contains('show-left')){
        if(player1Active){
            player1Score += 4
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 4
        }
    }else if(cube.classList.contains('show-top')){
        if(player1Active){
            player1Score += 5
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 5
        }
    }else{
        if(player1Active){
            player1Score += 6
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 6
        }
    }
}

function RollADice() {
    let rolling = setInterval(() => {
        let rando = Math.floor(Math.random() * ((SidesArray.length-1) - 0 + 1) + 0)
        cube.className = 'cube'
        if (cube.classList.contains(`show-${SidesArray[rando]}`)) {
            if (rando==SidesArray.length) {
                cube.classList.add(`show-${SidesArray[rando-2]}`)
            }else{
            cube.classList.add(`show-${SidesArray[rando-1]}`)
            }
        }
        cube.classList.add(`show-${SidesArray[rando]}`)
        console.log(SidesArray[rando], rando)
        let last = rando    
    }, 100);
    setTimeout(() => {
        clearInterval(rolling)
        CheckScore()
    }, 2000);
}

roll.addEventListener('click', RollADice)