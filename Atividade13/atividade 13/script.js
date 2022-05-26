function transformarMaiuscula(){
    var texto = document.getElementById("text");
    var maiuscula = document.getElementById("checkMaiuscula").checked;
    if(maiuscula){
        texto.value = texto.value.toUpperCase();
        document.getElementById("checkMinuscula").checked = false;
    }
}

function transformarMinuscula(){
    var texto = document.getElementById("text");
    var minuscula = document.getElementById("checkMinuscula").checked;
    if(minuscula){
        texto.value = texto.value.toLowerCase();
        document.getElementById("checkMaiuscula").checked = false;
    }
}

function limpar(){
    document.getElementById("checkMaiuscula").checked = false;
    document.getElementById("checkMinuscula").checked = false;
    document.getElementById("text").value = "";
}
