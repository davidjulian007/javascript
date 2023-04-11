

class Mercosur {
    constructor(nombre, capital, idioma, moneda){
        this.nombre = nombre;
        this.capital = capital;
        this.idioma = idioma;
        this.moneda = moneda
}
}

const paises = []

paises.push(new Mercosur("Argentina", "Buenos Aires", "español", "peso argentino"))
paises.push(new Mercosur("Brasil", "Brasilia", "portugues", "real"))
paises.push(new Mercosur("Paraguay", "Asuncion", "español", "guaraní"))
paises.push(new Mercosur("Uruguay", "Montevideo", "español", "peso uruguayo"))

console.log(paises)

function buscarCapital(nombrecapital){
    return paises.find(dato => dato.capital === nombrecapital)
}

for(let i = 0; i<4; i++){
    let busqueda = buscarCapital(prompt("ingresa las 4 capitales para saber si pertenecen al mercosur y ver sus datos"))
    if(busqueda != undefined){
        alert("Esta capital si pertenece al mercosur, el nombre del Pais es " + busqueda.nombre + " el idioma del Pais es " + busqueda.idioma + " y la moneda del Pais es el " + busqueda.moneda)
    } else {
        alert("esta capital no pertenece al mercosur")
    }
}