var parrafoClonar = document.getElementById('parrafoClonar')
var parrafoClonado = document.getElementById('parrafoClonado')
var listaElementos = document.getElementById('listaElementos')

var parrafoClonarTexto = parrafoClonar.textContent

function clonarParrafo() {
    parrafoClonado.innerHTML = parrafoClonarTexto
}

function elementoNuevo() {
    var nuevoElemento = document.createElement("li")
    nuevoElemento.appendChild(document.createTextNode("Elemento"))
    listaElementos.appendChild(nuevoElemento)
}
