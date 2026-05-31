// Variables
var numero1 = 0;
var numero2 = 0;
var resultado = 0;

// Funciones
    function sumar() {
        numero1 = document.getElementById("numero1").value;
        numero2 = document.getElementById("numero2").value;
        resultado = (+numero1) + (+numero2);
        document.getElementById("resultado").innerHTML = resultado;
    }

    function restar() {
        numero1 = document.getElementById("numero1").value;
        numero2 = document.getElementById("numero2").value;
        resultado = (+numero1) - (+numero2);
        resultado = document.getElementById("resultado").innerHTML = resultado;
    }

    function multiplicacion() {
        numero1 = document.getElementById("numero1").value;
        numero2 = document.getElementById("numero2").value;
        resultado = (+numero1) * (+numero2);
        resultado = document.getElementById("resultado").innerHTML = resultado;
    }

    function division() {
        numero1 = document.getElementById("numero1").value;
        numero2 = document.getElementById("numero2").value;
        resultado = (+numero1) / (+numero2);
        resultado = document.getElementById("resultado").innerHTML = resultado;
    }

document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);
document.getElementById("multiplicar").addEventListener("click", multiplicacion);
document.getElementById("dividir").addEventListener("click", division);