# Desenvolvimento avançado com JavaScript ES6
**<i style="color: purple;">Sumário</i>**
Tabela de conteúdos
=================
- JavaScript
    - <a href="#funcoes-avancadas-do-es6">Funções avançadas do ES6</a>;
    - <a href="#rest-spread-operator-e-destructuring">REST, Spread Operator e Destructuring</a>; 
    - <a href="#introducao-a-generators">Introdução a Generators</a>; 

<h4 align="center"> 
	🚧  Bootcamp 🚀 Em andamento...  🚧
</h4>

<img src="https://hermes.digitalinnovation.one/lessons/6fcbfa13-5df0-4d3c-b324-e94f344f160e_large.jpg" alt="painel foto instrutor dio">

## Funções avançadas do ES6 
### Arrow Functions
- São funções anônimas. Deve-se atribuí-las a uma variável ou passá-la como parâmetro para outra função (`=>`);
- Não funciona como `Construtora`;
- Não acontece `Hoisting`;
- `this` se referencia ao contexto que o envolve. Em Funções "normais" o `this` pode mudar o seu referente, dependendo de onde foi chamado/executado.;

### Default Functions Arguments
- Facilitou a vida do programador, evitar erros quando parâmetros não são passados quando deveriam e não foi tomado a devida precaução por parte do programador;
    ```javascript
    // Evitando que aconteça um erro, caso não seja passado 
    // o parâmetro "b"
        function multiply(a, b) {
            //b = b || 1;
            b = typeof b === 'undefined' ? 1 : b;

            return a * b;
        }

        console.log(multiply(5));
    ```
- Informamos diretamente nos parâmetros:
    ```javascript
    function multiply(a = 2, b = 1) {
            //b = b || 1;
            return a * b;
        }

        console.log(multiply(5));
    ```
- Lazy evaluation = "...o compilador pode decidir a ordem de execução das expressões sem alterar o significado do programa. Mais que isso, ele pode decidir se uma expressão será executada ou não, e executar as expressões apenas quando e se seus valores forem necessários";

### Enhanced Objects Literals
- Quando `valor` e `propriedade` tiverem os mesmos "nomes",podemos omitir a propriedade. Variáveis, funções:
    ```javascript
    name: 'Bruno'

    var obj = {
        name: name
    }
    //podemos omitir a propriedade
    var obj = {
        name
    }
    ```
- Funções:
    ```javascript
    var obj = {
        sum: function sum(a, b) {
            return a + b;
        }
    };

    // Omitindo a palavara "function"
    var obj = {
        sum(a, b) {
            return a + b;
        }
    };
    ```
- Uma outra possibilidade:
    ```javascript
    var propName = 'test';
    var obj = {};
    obj[propName] = 'prop value';
    
    // Com o ES6

    var obj = {
        [propName]: 'prop value'
    };
    ```

## REST, Spread Operator e Destructuring

### REST Operator `(...nome_da_variavel)`
- Quando não sabemos ou não é viável especificar a quantidade de parâmetros:
    - antes do ES6 faríamos um loop junto com o `arguments`
    ```javascript
    function sum(...args) {
        return args.reduce((acc, value) => acc + value, 0)
    }
    console.log(sum(5, 5, 5, 2, 3));
    ```
- retorna um array, diferente do `arguments` que retorna um objeto;
- `arguments` não funciona com `Arrow functions` apenas com `REST Operator`;
- podemos usar para pegar o "restante"
    ```javascript
    function sum(a, b, ...args) {
        return a, b, args
    }
    console.log(sum(5, 5, 5, 2, 3));
    ```

### Spread Operator
- Quebrar `listas` e passar como `argumentos`.
    ```javascript
    const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

    const sum = (...rest) => {
        return multiply(...rest);
    };
    console.log(sum(5, 5, 5, 2, 3));
    ```
- Strings, arrays e objetos e objetos iteráveis;
    **Strings:**
    ```javascript
    const str = 'Digital Innovation One';

    function logArgs(...args) {
        console.log(args);
    }

    logArgs(...str) //(22) ["D","i","g","i","t",
    ```
    **Arrays:**
    ```javascript
    const arr = [1, 2, 3, 4];
    const arr2 = [...arr, 5, 6, 7] // seria o mesmo que arr.concat([5, 6, 7]) = [1,2,3,4,5,6,7]

    console.log(arr2)
    ```

### Destructuring Assignment
- Arrays:
    ```javascript
    var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

    var apple = arr[0];
    var banana = arr[1];
    var orange = arr[2];
    var tomato = arr[3][0];

    // Destructuring

    var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
    ```
- Objetos:
    ```javascript
    var obj = {
        name: 'Bruno',
        props: {
            age: 29,
            favoriteColors: ['green', 'blue']
        }
    };

    var { name } = obj
    console.log(name) // Bruno

    //para tribuir a uma variável:
    var { name: name2 }
    console.log(name2) // Bruno

    var age = obj.props.age;
    var color1 obj.props.favoriteColors[0]

    //Destructuring
    var { props: { age }} = obj;
    // ou atribuindo a uma variável
    var { props: { age: age2, favoriteColors: [color1, color2] }} = obj;
    ```
- Funções:
    ```javascript
    function sum([a, b] = [0, 0]) {
        //0,0 = Default values
        return a + b
    }
    console.log(sum([5, 5])); // 10
    ```

## Introdução a Generators
### Symbols e Iterators
- Symbol: gerar identificado único `const uniqueId = Symbol()`;

**Well known symbols**
- Symbol.iterator: adicionar funcionalidades aos objetos;
    ```javascript
    const arr = [1, 2, 3, 4]
    const i = arr[Symbol.iterator]();
    console.log(it.next()) // {value: 1, done: false}

    // percorrer o array
    while (true) {
        let { value, done } = it.next();

        if (done) {
            break;
        }

        console.log(value)
    }

    // ES6 tem um jeito mais simples de percorrer
    for (let value of arr) {
        console.log(value)
    }

    // Com objetos conseguimos iterar utilizando o Iterator
    const obj = {
        values: [1, 2, 3, 4],
        [Symbol.iterator]() {
            let i = 0;

            return {
                next: () => {
                    i++;
                    return {
                        value: this.values[i -1],
                        done: i > this.values.length
                    }
                }
            }
        }
    }
    const it = obj[Symbol.iterator]()
    console.log(it.next())

    // Agora podemos usar o FOR
    for (let value of obj) {
        console.log(value)
    }

    // usar Spread
    const arr2 = [...obj]
    ```

    ### Generators
    - Com `generators` podemos "pausar" e "despausar" uma função;