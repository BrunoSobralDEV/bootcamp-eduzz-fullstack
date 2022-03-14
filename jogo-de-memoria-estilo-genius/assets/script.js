let order = [];
let clickedOrder = [];
let score = 0;

// 0 = green
// 1 = red
// 2 = yellow
// 3 = blue

//Capturar elemento
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Sortear nº entre 0 e 3 - ordem das cores
let shuffleOrder = () => {
    //guardar nº a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);
    
    //popular o array com o nº que sortear
    order[order.length] = colorOrder
    clickedOrder = [];

    //ascender a cor de acordo com o nº sorteado
    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1);
    }
}


//"ascender" a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    //remover a classe selected
    setTimeout(() => {
        element.classList.remove('selected');
    })
}
//verificar se a ordem dada, foi a mesma com a "clicada"
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }


    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        
        //comparar se bateu com o jogo
        checkOrder();
    }, 250)

}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    } 
}
   
let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    //Iniciar novo jogo
    playGame();
}    

//Função inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0))
// red.addEventListener('click', click(1))
// yellow.addEventListener('click', click(2))
// blue.addEventListener('click', click(3))

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//iniciar o jogo
playGame();