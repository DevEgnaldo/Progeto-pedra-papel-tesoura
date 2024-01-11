const result = document.querySelector('.result')









const playHuman = (humanChoice) => {      //*Ao adicionar o onclick no button vai chamar uma função no JS função playHuman('') o valor tem q ser o mesmo ID do button*//
    playTheGame(humanChoice, playMachine())

}

const playMachine =() => {
    const choices = ['rock', 'papeer', 'scissors']
    const randomNumber = Math.floor(Math.random() *3)       //* Math.random sempre vai arredondadar o numero pra cima, vamos usar outra ferramenta para trazer(arredondar) onumero pra baixo, o Math.floor (Math.random() *3) *//
    

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina:" + machine);
    
    if(human === machine){
        result.innerHTML = "Deu empate!&#x1F914;" /*=> &#x1F914; <= Emogi */
    } else if( human === 'paper' && machine === 'rock'){
        result.innerHTML = "Voçê ganhou!&#x1F601;" /*=> &#x1F601; <= Emogi */
    } else {
        result.innerHTML = "Voçê perdeu para a Alexa!&#x1F61E;" /*=> &#x1F61E; <= Emogi */
    }
}