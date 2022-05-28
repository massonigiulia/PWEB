const opcao = document.getElementsByName("opcao");

function validarDados() {
            
    if (document.forms.form1.elements[0].value == "" || document.forms.form1.elements[0].length < 10) {
        alert("Preencha o campo NOME corretamente!");
        document.forms.form1.elements[0].focus();
        return false;
    };

    if (document.forms.form1.elements["email"].value == "" || document.forms.form1.elements["email"].value.indexOf('@') == -1 || document.forms.form1.elements["email"].value.indexOf('.') == -1) {
        alert("Preencha o campo E-MAIL corretamente!");
        document.forms.form1.elements.email.focus();
       return false;
    }

    if (document.forms.form1.elements.comentario.value == "" || document.forms.form1.elements.comentario.value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIO com pelo menos 20 caracteres!");
        document.getElementById("comentario").focus();
        return false;
    }

    if (!opcao[0].checked && !opcao[1].checked) {
        alert("É necessario marcar 'Sim' ou 'Não'!");
        return false;
    } else if (opcao[0].checked) {
        alert("Volte sempre a esta página!");
    } else {
        alert("Que bom que você voltou a visitar esta página!");
    }

    return true;
}