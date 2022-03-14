# Desenvolvimento avançado com JavaScript ES6
**<i style="color: purple;">Sumário</i>**
Tabela de conteúdos
=================
- JavaScript
    - <a href="#funcoes-avancadas-do-es6">Funções avançadas do ES6</a>;
    - <a href="#ecmascript">ECMAScript</a>; 

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
-

### Enchanced Objects Literals