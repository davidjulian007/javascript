let id = 0

class Persona{
    constructor(nombre, apellido, profesion, provincia, edad, hobby){
        this.id = id++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.provincia = provincia;
        this.edad = edad;
        this.hobby = hobby;
    }
}

//crear un array inicial

const personasInscriptas = []

let Juan = new Persona(
        "Juan",
        "Perez",
        "Abogado",
        "Buenos Aires",
        "45",
        "Futbolista"
    )
let Pablo = new Persona(
        "Pablo",
        "Gomez",
        "Escritor",
        "Mendoza",
        50,
        "pool"
    )
let Pedro = new Persona(
        "Pedro",
        "Gimenez",
        "Contador",
        "Corrientes",
        30,
        "hockey"
    )
let Andres = new Persona(
        "Andres",
        "Ortubia",
        "Mecanico",
        "Chubut",
        55,
        "Carreras de Autos"
    )

//enviar contructores al array
personasInscriptas.push(Juan,Pablo,Pedro,Andres)
console.log(personasInscriptas)
//destructuring


const { nombre, apellido, profesion, provincia, edad, hobby } = Pablo


//mostrar las personas que ya estan inscriptas

let mostrarPersonasInscriptas = document.getElementById("mostrarPersonasInscriptas")

//mostrar el array inicial por pantalla
for (const dato of personasInscriptas) {
//los 3 pasos para crear una una etiqueta del DOM en JS

    //paso 1 crear el elemento
    let li = document.createElement("li")
    //paso 2 imprimir a partir del innerHTML
    li.innerHTML = `nombre de la persona: <b> ${dato.nombre}</b> <br>
                    apellido de la persona: <b> ${dato.apellido}</b> <br>
                    su profesion: <b> ${dato.profesion}</b> <br>
                    su provincia: <b> ${dato.provincia}</b> <br>
                    su edad es: <b> ${dato.edad}</b> <br>
                    y su hobby es: <b> ${dato.hobby} </b>`
    //paso 3 decirle al document / body que creamos un elemento nuevo
    //document.body.appendChild(li)
    //si tenemos una etiqueta padre:
    mostrarPersonasInscriptas.appendChild(li)    
}



//funciones

//traer el form padre al DOM

let agregarPersona = document.getElementById("agregarPersona")


//crear una nueva persona a partir del form y mostrarlo por pantalla

const agregarPersonaNueva = (e) =>{
    e.preventDefault()
    //target
    //children[].value
    id++;
    let nombre = e.target
    let apellido = e.target
    let profesion = e.target
    let provincia = e.target
    let edad = e.target
    let hobby = e.target

    let personaNueva = new Persona(
        nombre.children[1].value,
        apellido.children[4].value,
        profesion.children[7].value,
        provincia.children[10].value,
        edad.children[13].value,
        hobby.children[16].value,
    );

    //pushearla al array
    personasInscriptas.push(personaNueva)
    

    //mostrar el nuevo resultado
    let mostrarPersonasInscriptas = document.getElementById("mostrarPersonasInscriptas")
    mostrarPersonasInscriptas.innerHTML = "";
    personasInscriptas.forEach(persona =>{
        let li = document.createElement("li")
        li.innerHTML = `nombre de la persona: <b> ${persona.nombre}</b> <br>
                         apellido de la persona: <b> ${persona.apellido}</b> <br>
                         profesion de la persona: <b> ${persona.profesion}</b> <br>
                         provincia donde vive: <b> ${persona.provincia}</b> <br>
                         su edad: <b> ${persona.edad}</b> <br>
                         su hobby: <b> ${persona.hobby}</b>`
                        mostrarPersonasInscriptas.appendChild(li) 

    })

   

}

//agregar el evento submit

agregarPersona.addEventListener("submit", agregarPersonaNueva)


//agregar un metodo de orden superior y una estructura de control
//obtener el elemento select del DOM

let filtrarPorProvinciaChange = document.getElementById("filtrarPorProvinciaChange")

//crear el evento change

filtrarPorProvinciaChange.addEventListener("change", filtrarPorProvinciaPersona)

//crear la funcion para filtrar por Provincia

function filtrarPorProvinciaPersona(e){
    //obtenemos el valor seleccionado del select
    let filtro = e.target.value;
    //elemento de HTML donde se va a mostrar el resultado
    let mostrarPorProvincia = document.getElementById("mostrarPorProvincia")
    mostrarPorProvincia.innerHTML = "" //limpia el contenido antes de mostrar

    //definir un criterio de filtrado segun el tipo de animal
    let provinciaFiltrada;
    if (filtro === "Buenos Aires") {
        provinciaFiltrada = personasInscriptas.filter((persona) => persona.provincia === "Buenos Aires")
    } else if (filtro === "Mendoza") {
        provinciaFiltrada = personasInscriptas.filter((persona) => persona.provincia === "Mendoza")
    } else if (filtro === "Corrientes") {
        provinciaFiltrada = personasInscriptas.filter((persona) => persona.provincia === "Corrientes")
    } else if (filtro === "Chubut") {
        provinciaFiltrada = personasInscriptas.filter((persona) => persona.provincia === "Chubut")
    }

    //crear un nuevo elemento de HTML para cada animal filtrado y agregado por el DOM

    provinciaFiltrada.forEach(info =>{
        let p = document.createElement("p")
        mostrarPorProvincia.innerHTML = `Hay una persona inscripta de nombre: ${info.nombre} <br>
                                         Apellido: ${info.apellido} <br>
                                         profesion: ${info.profesion} <br>
                                         edad: ${info.edad} <br>
                                         hobby: ${info.hobby}`
        mostrarPorProvincia.appendChild(p)
    })
}

//enviar datos al storage -> clave = valor

//paso 1 guardar el array de objeto en una variable con el storage

//creo una funcion que recorra el array y envie los datos 
const guardarDatosEnElStorage = (clave, valor) => {localStorage.setItem(clave, valor)}
// almacenar array completo
guardarDatosEnElStorage("listaDePersonas", JSON.stringify(personasInscriptas))

const personasAlmacenadas = JSON.parse(localStorage.getItem("listaDePersonas"))


