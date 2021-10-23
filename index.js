// @ts-check

let SidesArray = ['front','back', 'right', 'left', 'top', 'bottom']
const cube = document.querySelector('.cube')
const roll = document.querySelector('.roll')
const oneScore = document.querySelector('.OneScore')
const TwoScore = document.querySelector('.TwoScore')
const pass = document.querySelector('.PassTurn')
let player1Score = 0
let player2Score = 0
let player1Active = true
let tries = 0
let spinning = false
function CheckScore() {
    if (cube.classList.contains('show-front')) {
        if(player1Active){
            player1Score = 0
            player1Active = false
            oneScore.innerHTML = `${player1Score}`
        }else{
            player2Score = 0 
            player1Active = true
            TwoScore.innerHTML = `${player2Score}`
        }
    }else if(cube.classList.contains('show-back')){
        if(player1Active){
            player1Score += 2
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 2
            TwoScore.innerHTML = `${player2Score}`
        }
    }else if(cube.classList.contains('show-right')){
        if(player1Active){
            player1Score += 3
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 3
            TwoScore.innerHTML = `${player2Score}`
        }
    }else if(cube.classList.contains('show-left')){
        if(player1Active){
            player1Score += 4
            oneScore.innerHTML = `${player1Score}` 
           
        }else{
            player2Score += 4
            TwoScore.innerHTML = `${player2Score}`
        }
    }else if(cube.classList.contains('show-top')){
        if(player1Active){
            player1Score += 5
            oneScore.innerHTML = `${player1Score}`   
        }else{
            player2Score += 5
            TwoScore.innerHTML = `${player2Score}`
        }
    }else{
        if(player1Active){
            player1Score += 6
            oneScore.innerHTML = `${player1Score}` 
        }else{
            player2Score += 6
            TwoScore.innerHTML = `${player2Score}`
        }
    }
    if(player1Score >= 100){
        alert(`player one won`)
    }else if(player2Score >= 100){
        alert(`player two won `)
    }
}

function RollADice() {
    spinning = true
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
        let last = rando    
    }, 100);
    setTimeout(() => {
        clearInterval(rolling)
        CheckScore()
        spinning = false
    }, 2000);
}

roll.addEventListener('click', () => {
    if(!spinning){
        if(!tries){
            roll.innerHTML = 'risk again'
            RollADice()
            tries++       
            pass.classList.remove('hidden')
        }else{
            RollADice()
        }
    }
})
pass.addEventListener('click', ()=> {
    tries = 0
    player1Active = !player1Active
    pass.classList.add('hidden')
})