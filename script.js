(function () {
  var btn = document.getElementById('btn-copiar');
  var texto = document.getElementById('correo');
  var estado = document.getElementById('estado');
  var timer;
  function avisar(msg) {
    estado.textContent = msg;
    clearTimeout(timer);
    timer = setTimeout(function () { estado.textContent = ''; }, 2500);
  }
  function seleccionar() {
    var r = document.createRange();
    r.selectNodeContents(texto);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }
  btn.addEventListener('click', function () {
    var correo = texto.textContent.trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(correo).then(
        function () { avisar('Correo copiado'); },
        function () { seleccionar(); avisar('Correo seleccionado, cópialo con Ctrl+C'); }
      );
    } else {
      seleccionar();
      avisar('Correo seleccionado, cópialo con Ctrl+C');
    }
  });
})();