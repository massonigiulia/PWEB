// function minhaFoto(){
//     document.getElementById("imagem1").hidden = true;
//     document.getElementById("imagem1").hidden = true;

// }

function mDown(obj) {
    obj.src = "eu.jpeg";
    document.getElementById("cliqueAqui").hidden = true;
    obj.style = "margin-top:45px; border-radius: 10px";
}

function mUp(obj) {
    obj.src = "eu.jpeg";
    document.getElementById("cliqueAqui").hidden = true;
    obj.style = "margin-top:45px; border-radius: 10px";
}

function mOut(obj) {
    obj.src = "kjInicio.png";
    document.getElementById("cliqueAqui").hidden = false;
}

function zoom(obj){
    document.getElementsByClassName("zoom").style = ".zoom img {-webkit-transition: -webkit-transform .5s ease; transition: transform .5s ease;}"
}

function slide1(){
    document.getElementById('anime').src="My-Hero-Academia-Logo-Transparent-Background.png";
    setTimeout("slide2()", 1500)
    }
    
function slide2(){
    document.getElementById('anime').src="Attack-on-Titan-Logo.png";
    setTimeout("slide3()", 1500)
}

function slide3(){
    document.getElementById('anime').src="Demon-Slayer-Logo.png";
    setTimeout("slide4()", 1500)
}
function slide4(){
    document.getElementById('anime').src="april.png";
    document.getElementById('anime').style.width = "500px";
    setTimeout("slide5()", 1500)
}
function slide5(){
    document.getElementById('anime').src="Naruto_logo.svg.png";
    setTimeout("slide6()", 1500)
}
function slide6(){
    document.getElementById('anime').src="JoJo's_Bizarre_Adventure_logo.png";
    setTimeout("slide7()", 1500)
}
function slide7(){
    document.getElementById('anime').src="Logo_de_Avatar_la_leyenda_de_Aang.png";
    setTimeout("slide8()", 1500)
}

function slide8(){
    document.getElementById('anime').src="pngegg.png";
    setTimeout("slide9()", 1500)
}

function slide8(){
    document.getElementById('anime').src="ano-hi-mita-hana.png";
    setTimeout("slide9()", 1500)
}

function slide9(){
    document.getElementById('anime').src="love-chunibyo-other-delusions-logo.png";
    setTimeout("slide1()", 1500)
}

///////////
function slidess1(){
    document.getElementById('serie').src="Stranger-Things-Logo.png";
    setTimeout("slidess2()", 1500)
    }
    
function slidess2(){
    document.getElementById('serie').src="atypical-59fd219f3fc71.png";
    setTimeout("slidess3()", 1500)
}

function slidess3(){
    document.getElementById('serie').src="Casadepapel.png";
    setTimeout("slidess4()", 1500)
}
function slidess4(){
    document.getElementById('serie').src="sabrina.png";
    setTimeout("slidess5()", 1500)
}
function slidess5(){
    document.getElementById('serie').src="arcane-logo.png";
    setTimeout("slidess6()", 1500)
}
function slidess6(){
    document.getElementById('serie').src="umbrella.png";
    setTimeout("slidess7()", 1500)
}
function slidess7(){
    document.getElementById('serie').src="sexeducation.png";
    setTimeout("slidess1()", 1500)
}





