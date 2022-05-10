var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var resultado = document.getElementById("resultado");

const btnMaior = document.getElementById("btnMaior");
const btnOrdem = document.getElementById("btnOrdem");

const validate = () => {
    if (num1.value == "" || num2.value == "" | num3.value == "")
        return false;
    else
        return true;
}

function ordenar(x, y, z) {
    var numeros = [x, y, z];
    numeros.sort(function(a, b){return a-b});

    return numeros;
}

function maior(x, y, z) {
    var maior = ordenar(x, y, z)[2];
    return maior;
}

const exibirOrdenados = () => {
    if(validate()){
        var ordenados = ordenar(num1.value, num2.value, num3.value);
        resultado.value = ordenados[0] + " , " + ordenados[1] + " , " + ordenados[2];
    }
    else{
        alert("Por favor, insira um número válido em cada caixa.");
    }
}

const exibirMaior = () => {
    if(validate()){
    resultado.value = maior(num1.value, num2.value, num3.value);
    }
    else{
        alert("Por favor, insira um número válido em cada caixa.");
    }
}


