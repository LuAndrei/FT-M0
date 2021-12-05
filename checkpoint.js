// Importante: No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function minutosASegundos(minutos) {
  // Escribir una funcion que reciba un entero (minutos)
  // y retorne la cantidad de segundos
  // ej:
  // minutosASegundos(5) => 300
  // minutosASegundos(3) => 180
  // Tu código aca:

    function convertir(segundosP) {

  const segundos = (Math.round(segundosP % 0x3C)).toString();
  
  const minutos  = (Math.floor(segundosP / 0x3C ) % 0x3C).toString();

    }
    }


   

     


function promedio(array) {
  // escribir una funcion que reciba un arreglo de enteros (array)
  // y retorne el promedio de esos numeros
  // ej:
  // promedio([1,2,3]) => 2
  // promedio([10, 20, 3]) => 11
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  let promedio("3","6","9") {
    return 6
  }


    
}

function salarioAnual(empleados, nombre) {
  // Escribe una funcion que reciba un arreglo de objetos con info de empleados (empleados)
  // y un string (nombre)
  // y retorne el salario anual del empleado con ese nombre;
  // ej: 
  // var empleados = [{
  //    nombre: 'Manuel',
  //    salario: 1000,
  //  },
  //  {
  //    nombre: 'Flor',
  //    salario: 4000,
  //  },
  //  {
  //    nombre: 'Maria',
  //    salario: 500,
  //  }
  // ];
  // salarioAnual(empleados, 'Flor'); => 48000
  // salarioAnual(empleados, 'Manuel;); => 12000
  // Tu código aca:

  return empleados.find(el => el.nombre==nombre).salario*12

}

function encontrarLaPalabra(string) {
  // Escribir una funcion que reciba un string (string) y retorne true si encuentra la palabra "henry" adentro.
  // si no, retorna false.
  // Ej:
  // encontrarLaBomba('bienvenidos a henry') => true;
  // encontrarLaBomba('hola que tal, como va?!') => false;

  // Tu código:
    return cadena.includes("henry");
}

const cadenas = [
  "Henry no está aquí",
  "Sin embargo, henry sí que está aquí",
  "bienvenidos a henry",
  "hola que tal, como va?!"
];

cadenas.forEach(cadena => {
  console.log(encontrarLaPalabra(cadena));
});
.as-console-wrapper {
  min-height: 100%;
  top: 0;
}



function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:
  function encuentraIndex(array, elemento) {
  for (let i=0;i<array.length;i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}
const miArray = [2,4,6,8,10,1,3,5,7,9];
let index = encuentraIndex(miArray, 5);
console.log('En la posición', index);

};



function crearClaseEmpleado() {
  // Crear una clase para construir objetos de tipo Empleado.
  // el constructor debe recibir:
  // nombre (string) , salario (integer) , tareas (array de objetos), jefe (booleano - por defecto false) 

  
    constructor() {

class Empleado {
        constructor(nombre, salario, tareas, jefe) { 
            this.nombre = nombre,
            this.salario = salario,
            this.tareas = tareas, 
            this.jefe = false
       }
    }
  
   return new Empleado("Jose",4000, ['operaciones'], true)
}

const persona = crearClaseEmpleado()
console.log(persona)
    }

    addTarea(tarea, prioridad) {
      // el metodo addTarea recibe un string tarea y un entero prioridad y debe agregar un objeto:
      // { tarea: tarea, prioridad: prioridad} al arreglo de tareas del empleado.
      // no debe retornar nada.
      
    }

    switchJefe() {
      // este método debe switchear el booleano jefe, si estaba en true, dejarlo en false
      // y si estaba en false, dejarlo en true
      // no debe retornar nada.
      
    }
    getTareas() {
      // Escribe una función que retorne un arreglo con sólo los nombres (tarea) del arreglo de tareas
      // del empleado.
      // this.tareas = [
      //    {tarea: 'compras', prioridad: 1},
      //    {tarea: 'dar clases', prioridad: 3},
      //    {tarea: 'operaciones', prioridad: 2}
      //  ];
      // Ej:
      // persona.getTareas() // retorna ['compras', 'dar clases', 'operaciones']
      
    }

    getTareasPrioritarias(prioridad) {
      // Escribe una función que retorne las tareas con prioridad mayor al entero prioridad
      // ej, si la persona tuviera estas tareas:
      // {
      //   tareas: [{
      //     nombre: 'compras',
      //     prioridad: 4,
      //   }, {
      //     nombre: 'operaciones',
      //     prioridad: 2,
      //   }]
      // }
      // persona.getTareasPrioritarias(3) // retorna 
      // [{
      //  nombre: 'compras',
      //  prioridad: 4,
      // }]
      
    }
    class Empleado {
        constructor(nombre, salario, tareas, jefe) { 
            this.nombre = nombre,
            this.salario = salario,
            this.tareas = tareas, 
            this.jefe = false
       }
    }
  
   return new Empleado("Jose",4000, ['operaciones'], true)


const persona = crearClaseEmpleado()
console.log(persona)
    

  };

  return Empleado;

  

/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  
  
};

Array.prototype.filtrar = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    const x = cb(this[i]);
    if(x)newArray.push(this[i]);
  }
  return newArray;
};

// No modifiques nada debajo de esta linea
//

module.exports = {
  minutosASegundos,
  promedio,
  encontrarLaPalabra,
  salarioAnual,
  crearClaseEmpleado,
  index,
  filtrar
}
