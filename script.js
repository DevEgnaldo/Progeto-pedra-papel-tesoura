const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNunber = 0
let machineScoreNunber = 0

const playHuman = (humanChoice) => {      //*Ao adicionar o onclick no button vai chamar uma função no JS função playHuman('') o valor tem q ser o mesmo ID do button*//
    playTheGame(humanChoice, playMachine())

}

const playMachine =() => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() *3)       //* Math.random sempre vai arredondadar o numero pra cima, vamos usar outra ferramenta para trazer(arredondar) onumero pra baixo, o Math.floor (Math.random() *3) *//
    

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina:" + machine);
    
    if(human === machine){
        result.innerHTML = "Deu empate!&#x1F914;" /*=> &#x1F914; <= Emogi */
    } else if( 
        (human === 'paper' && machine === 'rock') || 
        (human ==='rock' &&  machine === 'scissors') || 
        (human === 'scissors' &&  machine === 'paper')
        ) {
            humanScoreNunber++
            humanScore.innerHTML = humanScoreNunber
            result.innerHTML = "Voçê ganhou!&#x1F601;" /*=> &#x1F601; <= Emogi */
    } else {
            machineScoreNunber++
            machineScore.innerHTML= machineScoreNunber
            result.innerHTML = "Voçê perdeu para a Alexa!&#x1F61E;" /*=> &#x1F61E; <= Emogi */
    }
}
/*
Papel.....=>..Pedra
Pedra.....=>..Tesoura
Tesoura...=>..Pedra
*/