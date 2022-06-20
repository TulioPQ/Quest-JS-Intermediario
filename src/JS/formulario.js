const formularioPrincipal = document.forms['Formulario']

document.getElementById('botao-enviar').addEventListener('click', () => {
    Array.from(formularioPrincipal).forEach(elemento => {
        let idSpan = "#alerta-" + elemento.getAttribute('id')
        if (elemento.value === '') {
            elemento.style.border = '2px solid red'
            document.querySelector(idSpan).innerHTML = 'Campo obrigatório'
        }
    })
})

formularioPrincipal.addEventListener('input', () => {
    Array.from(formularioPrincipal).forEach(element => {
        if (element.value !== '') {
            element.style.border = " 2px solid lightgreen"
            document.querySelector("#alerta-" + element.getAttribute('id')).style.color = 'white'
        }
    });
})
