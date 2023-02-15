var tituloIntroduccion = document.getElementById('tituloIntroduccion')
var tituloIntroduccionTexto = tituloIntroduccion.textContent

if (tituloIntroduccionTexto === '') {
    console.log('VACÍO')
} else {
    console.log('TIENE INFO')
}

var segundoCaracter = tituloIntroduccionTexto.charAt(2)
console.log(segundoCaracter)

function escribirParrafo() {
    // 1) Acceder al DOM del parrafo.
    var miPrimerParrafoDinamico = document.getElementById('miPrimerParrafoDinamico')

    // 2) Utilizar la propiedad innerHTML para establecer un texto.
    miPrimerParrafoDinamico.innerHTML += ' MI PRIMER TEXTO EN UN PÁRRAFO DINÁMICO'
}

function anyadirElemento() {
    // 1) Acceder al DOM de la lista.
    var miPrimeraListaDinamica = document.getElementById('miPrimeraListaDinamica')

    // 2) Creo una variable que representa la creación del elemento "li"
    var miElementoLi = document.createElement("li");

    // 3) Añadir un texto deseado al "li" previamente creado
    miElementoLi.appendChild(document.createTextNode('Nuevo Elemento de la Lista'))

    // 4) Añadir a la lista el elemento "li" previamente customizado
    miPrimeraListaDinamica.appendChild(miElementoLi)
}


function convierteParrafo() {
    var miParrafoClaseDinamica = document.getElementById('miParrafoClaseDinamica')
    miParrafoClaseDinamica.setAttribute('class', 'claseDinamica')
}