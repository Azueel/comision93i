//solo trae por id y si llamamos a una clase nos va a retornar null
const element = document.getElementById('unico');
console.log(element);

//querySelector
//trabaja con ID y Class solamente tenemos que declarar cual de las 2
const elementQuery = document.querySelector('#query');
console.log(elementQuery);

/* <h3 class="practica">Practica Alumno</h3> */

const elementPractica = document.querySelector('.practica');
console.log(elementPractica);
