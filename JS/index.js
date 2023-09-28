const d = document;

const $valorAnterior = d.getElementById("valor-anterior"),
  $valorActual = d.getElementById("valor-actual"),
  $btnNumero = d.querySelectorAll(".numero"),
  $btnOperadores = d.querySelectorAll(".operador");

const display = new Display($valorAnterior, $valorActual);

$btnNumero.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});
$btnOperadores.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.computar(boton.value);
  });
});
