//1 - Faça um algoritmo que leia o nome e a idade de uma pessoa e ao final escreva o nome da pessoa, sua idade e se ela é maior de idade ou não.

let nome = "Maria"
let idade = 15

if (idade >= 18) { 
    console.log("" + nome + " você tem " + idade + " anos, logo é maior de idade!")
} else if (idade < 18) {
    console.log("" + nome + " você tem " + idade + " anos, logo é menor de idade!")
}
