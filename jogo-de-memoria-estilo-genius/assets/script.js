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
function lightColor(params) {
    let lightColor = (element, number) => {
        let number = number * 500;
        setTimeout(() => {
            element.classList.add('selected');
        }, number -250);
    }
    //remover a classe selected
    setTimeout(() => {
        element.classList.remove('selected');
    })
}
function lose() {
    
}    

function nextLevel() {
    
}
//verificar se a ordem dada, foi a mesma com a "clicada"
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
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
    elementColor(color).classListl.add('selected');

    setTimeout(() => {
        elementColor(color).classList.remove('selected');
    })

    //comparar se bateu com o jogo
    checkOrder();
}

//
function createColorElement(params) {
    
}