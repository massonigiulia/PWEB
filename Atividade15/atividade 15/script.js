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

        newWindow = window.open("info.hmtl", "Curso", "width=600px,height=300px");
        newWindow.document.open();
        newWindow.document.write(`<iframe src="${form.action}?${textarea.name}=${textarea.value}" style="width: 100%; height: 100%;"></iframe>`);
        newWindow.focus();

        form.appendChild(textarea);
        document.body.appendChild(form);
        form.submit();
    }

};
