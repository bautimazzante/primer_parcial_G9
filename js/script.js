console.log("scrip cargado");

const botonConvertir = document.querySelector("#convertir");
const number = document.querySelector("input[type='number']");
const select = document.querySelector("#tipo");
const resultadoElemento = document.querySelector("#resultado");

console.log("Click Funcionando");

botonConvertir.addEventListener("click", function () {
  console.log(number.value);

  const valor = Number(number.value);

  const tipo = select.value;

  if (number.value === "" || isNaN(valor)) {
    resultadoElemento.textContent = "Ingresá un número válido";
    return;
  }

  if (tipo === "") {
    resultadoElemento.textContent = "Seleccioná una conversión";
    return;
  }

  console.log(tipo);
  if (tipo === "m-km") {
    const resultado = valor / 1000;
    console.log(resultado);
    resultadoElemento.textContent = resultado.toFixed(2) + " Km";
  } else if (tipo === "km-m") {
    const resultado = valor * 1000;
    resultadoElemento.textContent = resultado.toFixed(2) + " m";
  } else if (tipo === "c-f") {
    const resultado = (valor * 9) / 5 + 32;
    resultadoElemento.textContent = resultado.toFixed(2) + " °F";
  } else if (tipo === "kg-lb") {
    const resultado = valor * 2.20462;
    resultadoElemento.textContent = resultado.toFixed(2) + " lb";
  } else if (tipo === "lb-kg") {
    const resultado = valor / 2.20462;
    resultadoElemento.textContent = resultado.toFixed(2) + " kg";
  } else if (tipo === "f-c") {
    const resultado = ((valor - 32) * 5) / 9;
    resultadoElemento.textContent = resultado.toFixed(2) + " °C";
  } else if (tipo === "l-gal") {
    const resultado = valor / 3.785;
    resultadoElemento.textContent = resultado.toFixed(2) + " Galones";
  } else if (tipo === "gal-l") {
    const resultado = valor * 3.785;
    resultadoElemento.textContent = resultado.toFixed(2) + " Litros";
  } else if (tipo === "km-mi") {
    const resultado = valor / 1.60934;
    resultadoElemento.textContent = resultado.toFixed(2) + " Millas";
  } else if (tipo === "mi-km") {
    const resultado = valor * 1.60934;
    resultadoElemento.textContent = resultado.toFixed(2) + " Km";
  }
});
