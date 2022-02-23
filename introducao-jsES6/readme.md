# JavaScript
## Conceitos
- Linguagem interpretada;
- Linguagem de tipagem fraca e dinâmica;
- Funções de primeira classe e ordem maior
Pode ser atribuída a uma variável, a uma estrutura de dados, passada como argumentos e como retorno de outra função;
- Closure: Capacidade de uma função lembrar do ambiente que foi criada (escopo[3]).

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

## Typescript
- adicionar tipos e funcionalidades ao JavaScript;
## Flow
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

    //Permite apenas alterar as propriedades existentes
    const person = { name: 'Bruno'}
    Object.seal(person)
    ```
### Symbol
- atributo único;
- não é possível sobrescrever;
- `getOwnPropertySymbols()`: Symbols registrados no objeto;
- `Reflect.ownKeys()`: Todas as propriedades do objeto

## 