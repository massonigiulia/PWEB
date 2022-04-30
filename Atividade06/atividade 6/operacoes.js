var num1, num2, soma, subtr, multi, divisao, resto;

num1 = parseFloat(prompt("Digite o primeiro número: "));
num2 = parseFloat(prompt("Digite o segundo número: "));

soma = num1 + num2;
subtr = num1 - num2;
multi = num1 * num2;
divisao = num1 / num2;
resto = num1 % num2;

alert("A) " + num1 + " + " + num2 + " = " + soma +
"\nB) " + num1 + " - " + num2 + " = " + subtr +
"\nC) " + num1 + " * " + num2 + " = " + multi +
"\nD) " + (num2 === 0 ? num1 + " / " + num2 + " = " + "Não é possível fazer divisão por zero." : num1 + " / " + num2 + " = " + divisao) +
"\nE) " + (num2 === 0 ? num1 + " % " + num2 + " = " + "Não é possível fazer divisão por zero." : num1 + " % " + num2 + " = " + resto)
);

// a soma dos dois;
//   a subtração do primeiro pelo segundo;
//   o produto dos dois;
//   a divisão do primeiro pelo segundo;
//   o resto da divisão do primeiro pelo segundo.