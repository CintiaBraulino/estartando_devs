//3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao 
//final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.

let nome = "Maria"
let nota1 = 10
let nota2 = 5
let nota3 = 5

let media = ((nota1+nota2+nota3)/3)

if (media >= 8) { 
    console.log("" + nome + " a média foi " + media + " e foi aprovado(a)!")
} else if (media < 8) {
    console.log("" + nome + " a média foi " + media + " e foi reprovado(a)!")
}