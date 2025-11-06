// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value); //se pasan a las variables const los valores por DOM y con el parseFLOAT se convierte a decimal
  const out = document.getElementById('out-e1');

  function raizCuadrada(numero) {
    return Math.sqrt(numero); //se utiliza el método sqrt (raíz cuadrada) del objeto math de JS, pasándole por parámetro la variable o valor a utilizar
  }
  // TODO: implementar raizCuadrada(numero) 
  const result = raizCuadrada(v); //Se pasa por parámetro "v" ya que es la variable que guarda el "número" introducido por el usuario y obtenido mediante el DOM

  out.textContent = `Resultado: ${result}`; //se obtiene el resultado utilizando la variable const de res

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo'; //Pasa el valor del DOM al const y con || (OR) Muestra el mensaje de ejemplo

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';

  function alerta(mensj) {
    alert(mensj);
  }

  alerta(msg); //se pasa por parámetro la variable msg para que pueda usarse la función "alerta"
  document.getElementById('out-e2').textContent = `Alerta: "${msg}"`; 
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e3a').value); //se pasan a las variables const los valores por DOM y con el parseFLOAT se convierte a decimal
  const b = parseFloat(document.getElementById('a-e3b').value);
  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const sumar = new Function('a', 'b', 'return a + b;'); /*new function no funciona como una función normal
  Esto es debido a que usa Strings, por lo que se debe declarar de la forma en la que está declarada actualmente*/
  const result = sumar(a, b);
  document.getElementById('out-e3').textContent = `Resultado: ${result}`;

});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () { //preguntar al profesor
  // TODO: reproduce el ejemplo en el código editando esta función.
  function mostrarVar() { /*El hoisting "reorganiza" el código
    de tal forma que, pasa la variable hacia arriba, pero no su valor definido */
    console.log('Valor del var: ', variable);
    return variable;
  }
  const result = mostrarVar();

  var variable = "Ha sido declarada después";
  console.log("La variable sí está asignada: ", variable);
  const output = `Valor obtenido: ${result}`;
  document.getElementById('out-e4').textContent = output;

});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const result = (function () {/*IIFE es una función autoinvocada, esto quiere decir, que "function"
    se auntoinvoca para poder ejecutarse ser y mostrada al estar el valor definido de "result" conjunto el DOM */
    console.log("IIFE ejecutado");
    return "Dolor de cabeza devuelto👍"; //Se asigna a "result", al ser el valor retornado de la función autoinvocada
  })();
  document.getElementById('out-e5').textContent = `Resultado: ${result}`;

});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const dividir = function (a, b) { //función sin nombre, por lo que es anónima
    return a / b;
  }
  const a = parseFloat(document.getElementById('a-e6a').value); //se pasan a las variables const los valores por DOM y con el parseFLOAT se convierte a decimal
  const b = parseFloat(document.getElementById('a-e6b').value);

  if (b === 0) {
    document.getElementById('out-e6').textContent = 'No se puede dividir por cero';
  } else {
    const result = dividir(a, b);
    document.getElementById('out-e6').textContent = `Resultado: ${result}`;
  }

});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  const a = parseFloat(document.getElementById('a-e7a').value); //se pasan a las variables const los valores por DOM y con el parseFLOAT se convierte a decimal
  const b = parseFloat(document.getElementById('a-e7b').value);
  // TODO: implementa una función flecha multiplicar = 
  const multiplicar = (a, b) => a * b; //la función flecha es una forma "reducida" de implementar una función
  const result = multiplicar(a, b);
  document.getElementById('out-e7').textContent = `Resultado: ${result}`;
  
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  function saludar(nombre = 'Anónimo') { //la función tiene el parámetro por defecto ya definido
    return (`Hola, ${nombre}`);
  }
  const nombreIn = document.getElementById('a-e8').value.trim(); //por DOM, se asigna un valor a la variable nombreIn
  let result; //let, ya que const debe inicializarse
  if (nombreIn) { //si nombreIn tiene valor, mostrará el valor "nuevo"
    result = saludar(nombreIn);
  } else { //en caso de no tener valor, se mostrará el valor por defecto pasado por parámetro a la función
    result = saludar();
  }
  document.getElementById('out-e8').textContent = result;
});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  function externa() { //La función externa al ser ejecutada, suma en 1 el contador
    let contador = 0;
    contador++;

    function interna() { //La función interna se encarga de devolver el valor del contador de la función externa
      return (contador);

    }
    return interna(); //devuelve el valor de la función interna, es decir, devuelve el "return(contador)"
  }
  const result = externa(); //Al ser asignada la función a una variable, podremos obtener su return
  document.getElementById('out-e9').textContent = `Resultado: ${result}`; //mostramos el resultado mediante el DOM
  // TODO: implementar función externa e interna

});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () { 

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  let texto = document.getElementById('a-e10').value.trim() || "  Hola, Mundo!  "; /*se obtiene el valor mediante el DOM
  en caso de tener un valor, se declarará dicho valor, en cambio, si no hay valor, se usará "Hola, Mundo"*/

  
  let resultado = `
    <h3>Texto original:</h3> "${texto}"<br> 
    <h3>Longitud:</h3> ${texto.length}<br>
    <h3>Mayúsculas:</h3> ${texto.toUpperCase()}<br>
    <h3>Sin espacios (trim):</h3> "${texto.trim()}"<br>
    <h3>Posición de 'Mundo':</h3> ${texto.indexOf('Mundo')}<br>
    <h3>Número aleatorio:</h3> ${Math.random()}<br>
    <h3>Fecha actual (timestamp):</h3> ${Date.now()}`; 
    /*Se coge el "let" (variable) texto y para
    poder usarlo e imprimirlo, se inserta el valor con ${}. En el caso de "Math" y "Date", no es intrínsecamente necesario
    llamar a "texto" para ser ejecutadas y mostradas, ya que con ${} se evalúa el contenido y se muestra
    mediante el DOM al usar la variable "resultado"*/

  
  document.getElementById('out-e10').innerHTML = resultado;
  
});

