const cursos = document.getElementById("cursos");

function verCurso() {
    let idCurso = cursos.selectedIndex;
    let nomeCurso = cursos.options[idCurso].innerText;

    var confirma = confirm("O curso de " + nomeCurso + " será aberto em uma nova janela, deseja continuar?");

    if (confirma) {

        let form = document.createElement("form");
        form.classList.add("d-none");
        form.action = "info.html";
        form.target = "_blank";

        let textarea = document.createElement("textarea");
        textarea.value = idCurso;
        textarea.name = "curso";

        form.appendChild(textarea);
        document.body.appendChild(form);
        form.submit();
    }

};
