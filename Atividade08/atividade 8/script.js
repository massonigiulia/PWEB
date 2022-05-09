var pessoas = []; //45 pessoas
var sexoPessoa;
var opiniaoPessoa;

//inputs
var idade = document.getElementById("idade");
var sexo = document.getElementsByName("sexo");
var opiniao = document.getElementsByName("opiniao");
var salvar = document.getElementById("btnSalvar");
var reiniciar = document.getElementById("btnReiniciar");
var formulario = document.getElementById("form");

//resultados
var qtdeTotal = document.getElementById("qtdeTotal");
var mediaIdade = document.getElementById("mediaIdade");
var maiorIdade = document.getElementById("maiorIdade");
var menorIdade = document.getElementById("menorIdade");
var qtdePessimo = document.getElementById("qtdePessimo");
var qtdeOtimoBom = document.getElementById("qtdeOtimoBom");
var qtdeHomens = document.getElementById("qtdeHomens");
var qtdeMulheres = document.getElementById("qtdeMulheres");

function validate() {
    if (idade.value == "")
        return false;
    else
        return true;
}

function addPessoa() {

    opiniao.forEach(select => {
        if (select.checked) {
            opiniaoPessoa = select.value;
        }
    })

    sexo.forEach(select => {
        if (select.checked) {
            sexoPessoa = select.value;
        }
    })

    let pessoa = {
        idade: parseInt(idade.value),
        sexo: sexoPessoa,
        opiniao: opiniaoPessoa
    }

    pessoas.push(pessoa);
    console.log(pessoas)
    console.log(pessoas.length)
}

function atualizarResultados() {
    let total = pessoas.length;

    let somaIdades = 0;

    pessoas.forEach(pessoa => {
        somaIdades += pessoa.idade;
    });

    mediaIdade.value = (somaIdades / pessoas.length);

    let idadeNew = 0;
    pessoas.forEach(pessoa => {
        if (pessoa.idade > idadeNew) {
            idadeNew = pessoa.idade;
        }
    });

    maiorIdade.value = idadeNew;

    pessoas.forEach(pessoa => {
        if (pessoa.idade < idadeNew) {
            idadeNew = pessoa.idade;
        }
    });

    menorIdade.value = idadeNew;

    let otimoBom = 0;
    let pessimo = 0;
    pessoas.forEach((p) => {
        if (p.opiniao == '3' || p.opiniao == '4')
            otimoBom++;
        else {
            pessimo++;
        }
    });

    qtdeOtimoBom.value = Math.round((otimoBom / total) * 100) + "%";
    qtdePessimo.value = pessimo;

    let homens = 0;
    let mulheres = 0;
    pessoas.forEach((p) => {
        switch (p.sexo) {
            case 'H':
                homens++;
                break;
            case 'M':
                mulheres++;
                break;
        };
    });

    qtdeTotal.value = `Total: ${total}  |  Homens: ${homens}  |  Mulheres: ${mulheres}`;
    //qtdeHomens.value = homens;
    //qtdeMulheres.value = mulheres;

    if(total === 45){
        document.getElementById("result").hidden = true;
        document.getElementById("finalResult").hidden = false;
        document.getElementById("pesquisa").hidden = true;
        form.hidden = true;
        document.getElementById("reiniciar").hidden = false;
    }
    else{
        document.getElementById("result").hidden = false;
        document.getElementById("finalResult").hidden = true;
    }

}

onload = () => {
    qtdeTotal.value = 0;
    mediaIdade.value = 0;
    maiorIdade.value = 0;
    menorIdade.value = 0;
    qtdePessimo.value = 0;
    qtdeOtimoBom.value = 0;
    qtdeMulheres.value = 0;
    qtdeHomens.value = 0;
}


salvar.addEventListener("click", () => {
    if (validate()) {
        addPessoa();
        form.reset();
        atualizarResultados();
    }
    else {
        alert("Insira sua idade!");
    }

});

reiniciar.addEventListener("click", () => {
    document.getElementById("result").hidden = false;
    document.getElementById("finalResult").hidden = true;
    document.getElementById("pesquisa").hidden = false;
    form.hidden = false;
    document.getElementById("reiniciar").hidden = true;
    pessoas.length = 0;
    onload();
});