//Ingreso de datos por medio de la ventana de Javascript
//Listas
/*let lista_de_informacion = [];
let nombre = prompt("Ingrese su nombre");
lista_de_informacion.push(nombre);
let apellido = prompt("Ingrese su apellido");
lista_de_informacion.push(apellido);
console.log(lista_de_informacion);*/


/*let lista_de_informacion = [];
lista_de_informacion["nombre"] = "Yuri";
lista_de_informacion["apellido"] = "Sanguino";
lista_de_informacion[0] = 30;
console.log(lista_de_informacion);*/

//Ingresar datos a lista asociativa
/*let lista_de_informacion = [];

let nombre = prompt("Ingrese su nombre");
lista_de_informacion["nombre"] = nombre;
let apellido = prompt("Ingrese su apellido");
lista_de_informacion["apellido"] = apellido;
console.log(lista_de_informacion);*/

//Json
/*let lista_de_informacion = {};


let nombre = prompt("Ingrese su nombre");
lista_de_informacion.NOMBRE = nombre;


let apellido = prompt("Ingrese su apellido");
lista_de_informacion.APELLIDO = apellido;


console.log(lista_de_informacion);*/

let lista_de_informacion = {};

let nombre = prompt("Ingrese su nombre");
lista_de_informacion.NOMBRE = nombre;
localStorage.setItem("NOMBRE", nombre);
let apellido = prompt("Ingrese su apellido");
lista_de_informacion.APELLIDO = apellido;
localStorage.setItem("APELLIDO", apellido);

console.log(lista_de_informacion);


