console.log("scrip cargado");

const botonConvertir = document.querySelector("#convertir");
const number = document.querySelector("input[type='number']");
const select = document.querySelector("#tipo");
const resultadoElemento = document.querySelector("#resultado");

console.log("Click Funcionando");

botonConvertir.addEventListener("click", function(){

    console.log(number.value);

    const valor = Number(number.value);

    const tipo = select.value;

    if(number.value === "" || isNaN(valor)){
        resultadoElemento.textContent = "Ingresá un número válido";
        return;
    }

    if(tipo === ""){
        resultadoElemento.textContent = "Seleccioná una conversión";
        return;
    }

    console.log(tipo);
    if(tipo === "m-km"){
        const resultado = valor / 1000;
        console.log(resultado);
        resultadoElemento.textContent = resultado;
    }
    else if(tipo === "km-m"){
        const resultado = valor * 1000;
        resultadoElemento.textContent = resultado;
    } 
    else if(tipo === "c-f"){
       const resultado = (valor * 9/5) + 32;
       resultadoElemento.textContent = resultado;
    };
   
});


