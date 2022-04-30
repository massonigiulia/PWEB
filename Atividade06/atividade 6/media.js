var nome, nota1, nota2, nota3, media;

nome = prompt("Digite o nome do aluno:");
nota1 = prompt("Nota 1:");
nota2 = prompt("Nota 2:");
nota3 = prompt("Nota 3:");

media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))  / 3;

alert("A média do(a) aluno(a) " + nome + " é: " + media.toFixed(2));