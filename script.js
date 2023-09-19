//Esctructuras de Control//


// 1. Entrada de datos
var items = [2,3,5,7,11,13,17];
console.log ("En la posicion 3 tenemos: " + items[3]);

// 2.Definicion funcion de busqueda: a la funcion le vamos a pasar dos parametros: el array items y el elementos_a_buscar y 
//el objetivo del algoritmo es encontrar en que posicion esta el elemento_a_buscar
function search (items, elemento_a_buscar){
  var posicion = 0;
  var total_itemsArray = items.length;
  while (posicion < total_itemsArray) {
    if (items[posicion] == elemento_a_buscar)
    return posicion;
    posicion ++;
  }
  return null;
}

// 3. Ejecucion de la funcion: buscar un elemento en el array
var resultado = search(items, 3);
console.log(resultado);

// 4. Salida del programa Output (O)
var resultadoHTML = document.createElement('p');
resultadoHTML.id = 'resultado'; // Asigna el ID que desees
if (resultado !== null) {
  resultadoHTML.textContent = 'El elemento se encuentra en la posición: ' + resultado + ' :)';
} else {
  resultadoHTML.textContent = 'El elemento no se encuentra en el array :(';
}
document.body.appendChild(resultadoHTML); //para mostrar el resultado en el HTML (visible)

