var tituloIntroduccion = document.getElementById('tituloIntroduccion')
var tituloIntroduccionTexto = tituloIntroduccion.textContent

if (tituloIntroduccionTexto === '') {
    alert('VACÍO')
} else {
    alert('TIENE INFO')
}