var Aluno1 = new Object();
Aluno1.ra = "0030482021008";
Aluno1.nome = "Giulia Alves Massoni";

var Aluno2 = {
    ra: "0030482021008",
    nome: "Giulia Alves Massoni"
};

var Aluno3 = {};
//criando as propriedades
var ra = 'ra';
var nome = 'nome';
//atribuindo valor
Aluno3[ra] = '0030482021008';
Aluno3[nome] = "Giulia Alves Massoni";

var objeto = document.getElementById("objeto");

function construtor() {
    document.getElementById("objeto").hidden = false;
    objeto.value = "Estrutura utilizando Construtor:\n" +
                    "\tvar Aluno1 = new Object() \n\tAluno1.ra = '0030482021008' \n\tAluno1.nome = 'Giulia Alves Massoni'" + 
                    "\n\nPropriedades do objeto Aluno1: " + "\n• Ra: " + Aluno1.ra + "\n• Nome: " + Aluno1.nome +
                    "\n\n**Verifique o Console do seu navegador para mais detalhes. - Construtor";

    console.log(Aluno1);
    return Aluno1;
}

function literal() {
    document.getElementById("objeto").hidden = false;
    objeto.value = "Estrutura utilizando Literal:\n" +
                    "\tvar Aluno2 = { \n\t\tra: '0030482021008', \n\t\tnome: 'Giulia Alves Massoni'" + "\n\t};" +
                    "\n\nPropriedades do objeto Aluno2: " + "\n• Ra: " + Aluno2.ra + "\n• Nome: " + Aluno2.nome +
                    "\n\n**Verifique o Console do seu navegador para mais detalhes. - Literal";

    console.log(Aluno2);
    return Aluno2;
}

function dotnotation() {
    document.getElementById("objeto").hidden = false;
    objeto.value = "Estrutura utilizando Dot Notation:\n" +
                    "\tvar Aluno3 = {} \n\tvar ra = 'ra' \n\tvar nome = 'nome'" + "\n\tAluno3[ra] = '0030482021008'" + "\n\tAluno3[nome] = 'Giulia Alves Massoni'" +
                    "\n\nPropriedades do objeto Aluno3: " + "\n• Ra: " + Aluno3[ra] + "\n• Nome: " + Aluno3[nome] +
                    "\n\n**Verifique o Console do seu navegador para mais detalhes. - Dot Notation";

    console.log(Aluno3);
    return Aluno3;
}