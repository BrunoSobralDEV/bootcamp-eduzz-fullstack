# JavaScript
**<i style="color: purple;">Sumário</i>**
Tabela de conteúdos
=================
- JavaScript
    - <a href="#conceitos">Conceitos</a>;
    - <a href="#ecmascript">ECMAScript</a>; 
    - <a href="#tipos-e-variaveis">Tipos e Variáveis</a>;
    - <a href="#functions">Functions</a>;
    - <a href="#operadores">Operadores</a>;
    - <a href="#estruturas-condicionais-e-repeticao">Estruturas condicionais e Repetição</a>;
    - <a href="#orientacao-a-objetos">Orientação a objetos e Design Partterns</a>;
    - <a href="#arrays">Arrays</a>;

## Conceitos
- Linguagem interpretada;
- Linguagem de tipagem fraca e dinâmica;
- Funções de primeira classe e ordem maior
Pode ser atribuída a uma variável, a uma estrutura de dados, passada como argumentos e como retorno de outra função;
- Closure/escopo léxico: Capacidade de uma função lembrar do seu contexto de criação (escopo[3]).

    - Escopo de função;
    - Escopo Global;
    - Escopo de Bloco (ES6);
- Currying: Técnica de transformar função com n parâmetros e converter cada parâmetro em uma nova função;
    ```javascript
    function soma(a){
        return function(b){
            return a + b;
        }
    }
    const soma2 = soma(2);

    console.log(soma2(2));
    console.log(soma2(3));
    console.log(soma2(4));
    console.log(soma2(5));
    ```
- Hoisting (levantar/suspender): Variável é levada ao topo do seu escopo. Evitando problemas onde a variável é chamada antes da sua crianção. 
- Imutabilidade: Variável nunca vai mudar, caso precise, deve ser criado um novo (map, filter, reduce...)
    ```javascript
    const students = [
        {name: 'Grace', grade: 7}, 
        {name: 'Jennifer', grade: 4},
        {name: 'Paul', grade: 10}
    ]
    
    function getApprovedStudents(studentsList){
        return studentsList.filter(student => student.grade >= 7);
    }

    console.log('Alunos aprovados:')
    console.log(getApprovedStudents(students))

    ```

### Typescript
- adicionar tipos e funcionalidades ao JavaScript;
### Flow
- versão mais simplificada do Typescript;

## ECMAScript
- É uma linguagem de programação, baseada em scripts, padronizada pela Ecma International;

### ES2018
- atual;
    - Operadores rest/spread;
    - Iteração assíncrona;
    - Promise.prototype.finally();

### Babel
- transpilador JavaScript

## Tipos e Variáveis
- var = única que não respeita escopo de bloco;
- let;
- const.

    |   |   |   |
    |---|---|---|
    |String|Number|Boolean|
    |Null|Undefined|Symbol
    |Function|Array|Object|
#### String
- length: quantidade de caracteres;
- split: divide em uma lista;
- replace: substituir;
- slice: retorna uma fatia;
- substr: parecido com slice;
#### Number
- toString: transformar em string;
- toFixed: quantas casas decimais retornar;
- parseFloat: aceita float;
- parseInt: só aceita inteiro;
### Object
- chave e valor;

    **Alterando a propriedade**
    ```javascript
    user.name = 'Marta'
    user['name'] = 'Carla'
    const prop = 'name'
    user[prop] = 'Maria';
    ```
    **Criar:** 
    ```javascript
    user.lastName = 'da Silva';
    ```
    **Deletar:** 
    ```javascript
    delete user.name
    ```
    #### Métodos
    ```javascript
    const user = {
        name: 'Bruno',
        lastName: 'Sobral'
    }
    //Recupera as chaves
    Object.keys(user)

    //Recupera os valores das chaves do objeto
    Object.values(user)
    
    //Retorna um array contendo [nome, valor]
    Object.entries(user)

    //Mergear propriedades de objetos - add a propriedade fullName em user (Conceito de imutabilidade, isso não é recomendado)
    Object.assign(user, {fullName: 'Guilherme da Silva'})   
        //Correto é criar um novo array
        Object.assign({}, user, {age: 26})

    //Previne alterações em um objeto
    const newObj = { foo: 'bar'}
    Object.freeze(newObj)

    //Permite apenas alterar as propriedades existentes (não cria, nem deleta)
    const person = { name: 'Bruno'}
    Object.seal(person)
    ```
### Symbol
- atributo único;
- não é possível sobrescrever;
- `getOwnPropertySymbols()`: Symbols registrados no objeto;
- `Reflect.ownKeys()`: Todas as propriedades do objeto

## Functions
- Funções são objetos que permitem serem chamados;
- Arrow Function
    - `const arrowFn = () => 'Code here' `. Caso só tenha uma linha de retorno, o `return` é implícito então não precisa chamá-lo;
    
    ```javascript
    const arrowFn2 = () => {
        //Mais de uma expressão
        return 'Code here';
    }
    ```

    outro exemplo de arrow function:
    ```javascript
    const controlFnExec => fnParam => allowed => {
        if (allowed) {
            fnParam();
        }
    }
    ```
    essa arrow function seria o mesmo que escrever assim:
    ```javascript
    function controlFnExec(fnParam) {
        return function(allowed) {
            if (allowed) {
                fnParam();
            }
        }
    }
    ```

    - Porque usar arrow function, além do código ser mais "enxuto"?
        - um ponto relevante é sobre o `this`, dentro de uma Arrow Function, sempre será referenciado ao seu contexto de criação. Em Funções "normais" o `this` pode mudar o seu referente, dependendo de onde foi chamado/executado.
    ```javascript
    (() => {
        this.name = 'arrow function';
        const getNameArrowFn = () => this.name;

        function getName() {
            return this.name;
        }

        //Quando a propriedade for igual a chave, podemos ocultar a chave (getName: getName)
        const user = {
            name: 'Nome no objeto de execução',
            getNameArrowFn,
            getName
        }

        console.log(user.getNameArrowFn())//'arrow function'
        console.log(user.getName()) //'Nome no objeto de execução'
    })();
    ```
### Array
#### Base para os tópicos seguintes sobre array:
```javascript
const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name:  'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name:  'Jennifer',
        age: 19,
        gender: gender.WOMAN
    }
]
```
- Retornar a quantidade de itens de um array `.length`;
- Verificar se é Array `.isArray()`;
- Iterar os itens do array `.forEach()`;
    ```javascript
    persons.forEach((person, index, arr) => {
        console.log(`Nome: ${person.name} index: ${index}`, arr)
    })
    ```
- Filtrar array `.filter()`;
    ```javascript
    const mens = persons.filter(person => person.gender === gender.MAN);
    console.log('\nNova lista apenas com homens:', mens)
    ```
- Retornar um novo array `.map()` - Vantagem criar uma nova propriedade no novo array gerado pelo 'map' sem alterar o "original";
    ```javascript
    const personsWithCourse = persons.map(person => {
        person.course = 'Introdução ao JavaScript';
        return person;
    })

    console.log('\nPessoas com a adição do course:' personsWithCourse);
    ```
- Transformar um array em outro tipo `.reduce()`;
    ```javascript
    const totalAge = persons.reduce((age, person) => {
        age += person.age;
        return age;
    }, 0) //age = 0

    console.log('\nSoma de idade das pessoas', totalAge);
    ```

- Juntando operações
    ```javascript
    const totalEvenAges = persons
                                .filter(person => person.age % 2 === 0)
                                .reduce((age, person) => {
                                    age+= person.age;
                                    return age;
                                }, 0);
    
    console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);
    ```

## Operadores
    Operador binário = Operando1 Operador Operando2 (ex.: `1 + 2`, `something in something`);
    Operador unário = Operando1 operador / Operador Operando1 (x++, ++x);
- Aritméticos;
    - Incremento:
    ```javascript
    const a = ++2; //3, já recebe o valor incrementado
    const b = 2++; //2
    ```
- Atribuição;
- Comparação;
- Condicional;
    - Ternário `condicao ? valor1 : valor2`
- Lógicos `AND (&&), OR (||)`;
- Spread 
    - Muito usado para concatenar Arrays ou passar parâmetros para funções.
    ```javascript
    function fn(x, y, z) { }
    var args = [0, 1, 2];
    fn(...args)
    ```

## Estruturas condicionais e Repetição
### Estruturas condicionais
- `if, else e else if`

### Repetição
- for;
- while;
- do...while;
- for...in;
- controle de repetição:
    - continue (pular);
    ```javascript
    const arr = [1,2,3,4,5,6,7,8]
    for(let index = 0; index < arr.length; index++){
        const element = arr[index];

        if (element % 2 === 0){
            continue //se for PAR, pule, ignore
        }

        console.log(element) // 1, 3, 5, 7
    }
    ```
    - break;

## Orientação a objetos e Design patterns
- **Herança** (prototype);
    - `__proto__ -> prototype -> constructor`;
    - `new`: caso tenha um `return` explícito, será apresentado esse retorno;
    - `instanceof`: saber de qual instância foi criado;
    ```javascript
    function Animal(qtdPatas){
        this.qtdPatas = qtdPatas;
    }
    function Cachorro(morde){
        Animal.call(this, 4); //invoca a função Animal
        this.morde = morde;
    }

    const pug = new Cachorro(false)
    console.log(pug)
    //Cachorro  {qtdPatas: 4, morde: false}
    ```
- Classes;
    -Simplificação da herança de protótipos;
    - palavra chave `class`.
- Modificadores de acesso;
- Encapsulamento;
- Static.

### Design patterns/padrões de projetos
- São soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não é framework ou um código pronto.

- Formato de um patter:
    - Nome; Exemplo; Contexto; Problema; Solução.
- Tipos:
    - Criação: abstraem/adiam o processo de criação dos objetos.
        - Padrões de criação: `Abstract Factory, Builder, Factory Method, Prototype, Singleton`.
    - Estruturais: Se preocupa como `classes` e `objetos` são compostos para formar estruturas maiores.
        - Padrões de criação: `Adapter, Bridge, Composite, Decorator...Proxy`
    - Comportamentais: Se concentram nos algoritmos/atribuições de responsabilidades entre os objetos.
        - Padrões de criação: `Command, State, Visitor, Mediator, Observer...`

#### Patterns mais utilizados no JavaScript
- Factory;
    - Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory (fábrica).
    ```javascript
    function FakeUser(){
        return {
            name: 'Guilherme',
            lastName: 'Cabrini'
        }
    }
    const user = FakeUser();
    ```
- Singleton: Criar uma única instância de uma função construtora e retornar a mesma instância;
    ```javascript
    var SETTINGS = {
        api: 'https://localhost',
        trackJsToken: '12345'
    }
    ```
- Decorator: recebe uma outra função como parâmetro e estende seu comportamento sem modificá-la;
    ```javascript

    ```
- Observer;
- Module: possibilita organizar melhor o código, sem expor variáveis globais.

## Arrays
**Manipulação e Iteração de arrays**

- `Array.from`
    ```javascript
    const divs = document.querySelectorAll('div') //NodeList
    const divArray = Array.from(divs)//converte em Array, agora podemos tratá-lo como tal, lentgh, pop, shift...
    ```
### Inserir e remover:
- `push`: adiciona ao final do array;
- `pop`: remove último elemento;
- `unshift`: adiciona ao início:
- `shift`: remove o primeiro elemento;
- `concat`: concatena um ou mais arrays e retorna um novo array;
- `slice`: retorna um novo array "fatiando" de acordo com o início e fim. `arr.slice(-1) = pega último elemento`;
- `splice`: altera um array adicionando/removendo novos elementos. `splice(0, 0, "first)`;

### Iterar
- `forEach`
    ```javascript
    const arr = [1, 2, 3, 4]
    arr.forEach((value, index) => {
        console.log(`${index}: ${value}`);
    })
    ```
- `map`: retorna um novo array; `arr.map(val => console.log(val * 2)`
- `flat`: retorna um novo array concatenados com um sub-array de forma recursiva de acordo com o `depth` especificado;
    ```javascript
    const arr = [1, 2, [3, 4]]
    arr.flat();
    ```
- `flatMap`: retorna um novo array (como o map) e executa um `flat` de profundidade(depth) 1;
- `keys/values/entries`: retorna um `Array Iterator` que contém as chaves/valores/par(chave/valor) para cada elemento do array;
- `find`: retorna o primeiro item de um array que satisfaz a condição;
    ```javascript
    const arr = [1, 2, 3, 4];
    const firstGreaterThanTwo = arr.find(value => value > 2);
    console.log(firstGreaterThanTwo);
    // 3
    ```
    - `findIndex`: retorna o índice;
- `filter`: retorna um novo array com todos os elementos que satisfazem a condição;
    ```javascript
    const arr = [1, 2, 3, 4];
    const firstGreaterThanTwo = arr.filter(value => value > 2);
    console.log(firstGreaterThanTwo);
    // [3, 4]
    ```
- `indexOf`: retorna o primeiro índice em que um elemento pode ser encontrado;
- `lastIndexOf`;
- `includes`: Verifica se determinado item existe em um array (booleano);
- `some`: Verifica se pelo menos um item satisfaz a condição (booleano);
    - `every`: se todos satisfazem a condição;
- `sort`: Ordenar elementos de um array de acordo com a condição;
- `reverse`;

**Transformar em outro tipo de dado**
- `join`: Junta todos os elementos de um array, separados por um delimitador e retorna uma string;
- `reduce`: Retorna um novo tipo de dado iterando cada posição de um array;
    ```javascript
    const students = [
        {name: 'Bruno',age:30},
        {name: 'Carla',age:20},
        {name: 'Jose',age:35},
    ]
    students.reduce((totalAge, student) => totalAge += strudent.age, 0);
    // 0 = começa com 0
    // 85
    ```