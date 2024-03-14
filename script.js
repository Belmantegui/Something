var textoElemento = document.getElementsByClassName("header-logo-titulo2");
var texto = textoElemento.innerText;
var novoTexto = "";
for (var i = 0; i < texto.length; i++) {
  if (i === 1 || i === 4 || i === 7) {
    novoTexto += '<span style="color: red;">' + texto[i] + "</span>";
  } else {
    novoTexto += texto[i];
  }
}
