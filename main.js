

// Los objetos pueden tener definidos metodos
const persona = {
    nombre: 'Manuel',
    edad: 18,
    hablar: function(){console.log('hola soy manuel')}
}

console.log(persona)
persona.hablar()


// como hacer una funcion contructora (funcion creadora de objetos).
function Auto(marca, color, puertas, año){
    // El this es un parametro que se asegura que los valores se los agreguemos al objeto que estamos creando en el momento. Se asegura que se lo agreguemos al objeto que se refiere la funcion.
    this.marca = marca;
    this.color = color;
    this.puertas = puertas;
    this.año = año;
    // tambien se le pueden agregar metodos
    this.hablar = function(){console.log('bip, bip')}
}

// Asi utilizamos la funcion contructora

// La palabra new esta reservada para las funciones contructoras
const auto1 = new Auto('BMW', 'rojo', 4, 2022)

auto1.hablar()

// Condicional para ver si hay un parametro dentro de un objeto 
if('marca' in auto1){
    console.log(auto1.marca)
}

// bucle para recorrer un objeto
for(let propiedad in auto1){
    console.log(propiedad + ': ' + auto1[propiedad])
}


// CLASES

// Las clases son muy parecidas a las funciones contructoras pero son mas ordenadas y legibles 

class Producto {
    
    // La sintaxis es simple
    // Primero tenemos la funcion constructora
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false
    }

    // Aca vienen los metodos de la clase
    sumaIva(){
        this.precio = this.precio*1.21;
    }
}

const producto1 = new Producto('manzanas', 250)
const producto2 = new Producto('Pera', 230)

console.log(producto1.precio)
producto1.sumaIva()
console.log('Sumamos el Iva')
console.log(producto1.precio)