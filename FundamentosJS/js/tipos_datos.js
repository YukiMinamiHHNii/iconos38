//Es buena práctica comenzar tu archivo con un punto y coma
;

console.log('HOla')

/*
Declaración y asignación de variables primitivas

Para declarar una variable en JS se utilizaba la palabra 'var'.

Ahora usamos 'let' o 'const'
*/

//Un Bloque de código define el alcance que tendran mis variables definidas con let y con const. POr eso usar var es mala práctica
{

  let cadena = 'Hola mundo',
    numero = 19.11,
    booleano = true,
    nulo

  console.log(
    numero,
    '\n',
    booleano,
    '\n',
    cadena,
    '\n',
    nulo
  )

  cadena = 'Hello World'
  numero = 20
  booleano = false
  nulo = null

  console.log(
    numero,
    '\n',
    booleano,
    '\n',
    cadena,
    '\n',
    nulo
  )

  const PI = 3.1416,
    NOT_FOUND = 404

  console.log(PI, NOT_FOUND)

  //Una vez que una variable de tipo const se le asigna valor, éste no podrá cambiar
  //PI = 3.141529
}


//Declaración de funciones
//Una función es un conjunto de instrucciones que se agrupan y ejecutan como una sola, para llevar a cabo una tarea en particular. Pueden o no, recibir parámetros de entrada y también, pueden o no devolver algún valor de salida.

function saludar(nombre = 'Extrañ@') {
  console.log(`Hola ${nombre}`)
}

saludar('Isabel')
saludar()

//Declaración de arreglos
//Un arreglo es una colección de valores, cada valor puede ser de diferente tipo de dato

const unArreglo = [
  13,
  'Hola',
  false,
  null,
  { nombre: 'Jonathan', edad: 34 },
  ['blanco', 'negro', 'gris']
]

console.log(unArreglo)
console.log(unArreglo.length)
console.log(unArreglo[1])
console.log(unArreglo[5])
console.log(unArreglo[5][1])

unArreglo[6] = 'Hola'
console.log(unArreglo)

//Declaración de objetos
//Los objetos en JS son una colección de propiedades con sus respectivos valores. Esas propiedades pueden ser tipos de datos primitivos o complejos. Una variable dentro de un objeto se llama Atributo, una función dentro de un objeto se llama Método.

const persona = {
  nombre: 'Jonathan',
  edad: 34,
  soltero: false,
  contacto: {
    email: 'jonamircha@gmail.com',
    movil: '5518388261',
    web: 'jonmircha.com'
  },
  pasatiempos: ['Correr', 'Programar', 'Hacer Ejercicio'],
  saludar: function (aQuien = 'Extrañ@') {
    return `Hola ${aQuien}, me llamo ${this.nombre}, tengo ${this.edad} años`
  }
}

//OBJETOS LITERALES
const persona2 = {
  nombre: 'Irma',
  edad: 34,
  soltero: false,
  contacto: {
    email: 'irmacampos@gmail.com',
    movil: '5511223344'
  },
  pasatiempos: ['Leer', 'Viajar', 'Hacer Ejercicio'],
  saludar: function (aQuien = 'Extrañ@') {
    return `Hola ${aQuien}, me llamo ${this.nombre}, tengo ${this.edad} años`
  }
}


console.log(persona)
console.log(persona.nombre)

console.log(persona2)
console.log(persona2.nombre)

//Clases
//Una clase es el objeto fundamental de la Programación Orientada a Objetos. Es un modelo a seguir (un machote) para generar varios objetos de un mismo tipo (de clase); nos permite reutilizar su código, generando varias instancias (copias) que podemos guardar en variables.

/* PHP y JS sonlenguajes Case Sensitive */
class Persona {
  //El método contructor se ejecuta cuando la clase se instancia
  constructor(nombre, edad, soltero, contacto, pasatiempos) {
    this.nombre = nombre
    this.edad = edad
    this.soltero = soltero,
    this.contacto = contacto
    this.pasatiempos = pasatiempos
  }

  saludar(aQuien = 'Extrañ@') {
    return `Hola ${aQuien}, me llamo ${this.nombre}, tengo ${this.edad} años`
  }
}

//la variable oscar está genrando una instancia de la clase Persona
const oscar = new Persona(
  'Oscar',
  39,
  false,
  {
    email: 'oscaryordi@hotmail.com',
    movil: '5566778899'
  },
  ['Perros', 'Programar']
)

console.log(oscar)
console.log(oscar.saludar('Isabel'))

const isabel = new Persona(
  'Isabel',
  23,
  true,
  {
    email: 'isa.baezg@gmail.com',
    twitter: '@i_baezg'
  },
  ['Pintar', 'Leer']
)

console.log(isabel)
console.log(isabel.saludar())

/*
  Tarea:
    Generar un objeto literal como el ejercicio del libro y generar una clase
    Leer Capítulo 11 del libro JavaScript, ¡Inspírate!
*/
