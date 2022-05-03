var usuario;

function user(){
    usuario = document.getElementById("usuario").value;
}

function pedra(){
    jogada(1, "Pedra");
}

function papel(){
    jogada(2, "Papel");
}

function tesoura(){
    jogada(3, "Tesoura");
}

function jogada(valor, nome){

    var computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    var nomeC = computador == 1 ? "Pedra" : computador == 2 ? "Papel" : "Tesoura";

    resultado = valor == computador ? "EMPATE -_-" : 
    (valor == 1 && computador == 3 || valor == 2  && computador == 1 || valor == 3 && computador == 2) ?
     "VITÓRIA!!! " + "Parabéns " + usuario + "!" : "DERROTA :(";
    
    mensagem = "Sua escolha: " + nome + "\nEscolha do computador: " + nomeC + "\n\n" + resultado;
    alert(mensagem);
}

function mostrarJogo(){
    if(document.getElementById("usuario").value === undefined || document.getElementById("usuario").value == ""){
        document.getElementById("forms").hidden = false;
        document.getElementById("opcoes").hidden = true;
    }
    else{
        document.getElementById("forms").hidden = true;
        document.getElementById("opcoes").hidden = false;
    }
}


