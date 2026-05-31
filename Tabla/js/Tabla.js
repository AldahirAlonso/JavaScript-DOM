var ejemplo = {
    nombre: "Derick",
    edad: 30,
    correo: "dericklagunes@utez.edu.mx"
}

console.log(ejemplo.nombre);

const bd_personas = [
    {nombre: "Jorge", edad: 32, correo: "20233tn184@utez.edu.mx"},
    {nombre: "Diego", edad: 18, correo: "20253ds000@utez.edu.mx"},
    {nombre: "Ethan", edad: 18, correo: "20253ds009@utez.edu.mx"},
    {nombre: "Abraham", edad: 22, correo: "20233tn184@utez.edu.mx"}
]

// Imprimir el correo de...
console.log(bd_personas[2].correo);

// Hacer un llenado de la tabla x cada objeto
function agregar_a_la_tabla() {
    let tabla = document.getElementById("tabla");
    // Primera parte: necesito un elemento nuevo tr.
    let nueva_fila = document.createElement("tr");
    let persona = bd_personas.pop();
    // Segunda parte: llenar la informacion en las columnas.
    nueva_fila.innerHTML = `
        <td>${persona.nombre}</td>
        <td>${persona.edad}</td>
        <td>${persona.correo}</td>
    `

    // Tercera parte: agregar el tr virtual al html.
    tabla.appendChild(nueva_fila);
}

document.getElementById("add").addEventListener(
    "click", agregar_a_la_tabla);

function agregar_persona() {
    // Programar la logica de agregar a la BD
    let nueva = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        correo: document.getElementById("correo").value,
    };

    bd_personas.push(nueva);
    agregar_a_la_tabla();
    document.getElementById("mensaje").innerHTML =
        "PERSONA AGREGADA EXITOSSAMENTE!"
    document.getElementById("formulario").reset();
}

document.getElementById("agregar_persona").addEventListener(
    "click", agregar_persona
)