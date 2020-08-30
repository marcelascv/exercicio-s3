// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois(num1) {
    return 2 ** num1
}

console.log(potenciaDeDois(10))
console.log(potenciaDeDois(2))

//OU

let resultado = 1
for (let contador = 0; contador < 10; contador++){
  resultado = resultado * 2
}

console.log(resultado)


// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function numeroMaior(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } if (num2 > num1 && num2 > num3) {
        return num2
    }
    return num3
}

console.log(numeroMaior(1, 2, 3))
console.log(numeroMaior(40, 16, 20))

// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function numeroPrimo(numero) {
    for (let n = 2; n < numero; n++)
    if (numero % n === 0) return false;
    return numero !== 1;
    let resl = true;
}

console.log(numeroPrimo(10))
console.log(numeroPrimo(3))

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

const numero = 'string'
console.log(numero.length)

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]