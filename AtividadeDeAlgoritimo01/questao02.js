//2 - Faça um algoritmo que leia o nome e o salário de um funcionário. O funcionário terá um aumento de 18%, caso seu novo salário seja acima de R$3.000,00, ele deverá declarar imposto. 
//Ao fim do algoritmo diga ao usuário seu nome, seu novo salário e se ele deverá ou não declarar imposto.

let nome = "Maria"
let salario = 3000

let novoSalario = (salario*0.18+salario)

if (novoSalario > 3000) { 
    console.log("" + nome + " seu novo salario é " + novoSalario + ", e terar que declarar imposto de renda!")
} else if (novoSalario <= 3000) {
    console.log("" + nome + " você tem " + novoSalario + ", e não terar que declarar imposto de renda!")
}
