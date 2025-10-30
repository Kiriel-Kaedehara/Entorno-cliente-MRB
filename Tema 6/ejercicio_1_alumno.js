/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    var estudiante = {
        nombre: "Kiriel", 
        apellidos: "Kaedehara Spade", 
        edad: 24, 
        curso: "2º DAW",
        información: "Es el rey del infierno, conocido como Tolobajo",
    // TODO: Crear un objeto estudiante con las siguientes propiedades:✔️
    // - nombre: "María"✔️
    // - apellidos: "García López"✔️
    // - edad: 20✔️
    // - curso: "2º DAW"✔️
    // - mostrarInfo: function() que retorne HTML con toda la información

        // TODO: Completar las propiedades del objeto✔️

        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante✔️
            // Sugerencia: usar template strings o concatenación

            return this.nombre + " " + this.apellidos + ". " + " Su edad es: " + this.edad + ". Está cursando: " + this.curso + ". Información a tener en cuenta: " + this.información; 
        }//Función que mostrará la información del objeto estudiante (También podemos usar el mismo nombre del objeto para mostrar la información)
    };

    let boton = document.getElementById("btn-ej1");//Selección del botón ej1 mediante DOM con su ID
    let resultado = document.getElementById("resultado-ej1");//Selección del lugar donde se mostrará el resultado mediante DOM con su ID

    boton.addEventListener("click", function() { //Evento que al hacer click en el botón, se ejecutará la función
        resultado.innerHTML = estudiante.mostrarInfo(); //Mostrar el resultado en el lugar seleccionado del DOM
    });


    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"]; //array de colores predeterminados
var agregado = []; //array para almacenar los colores agregados por el usuario
function agregarColor() {

    // TODO: Obtener el valor del input con id "color-input" ✔️

    var colorInput = document.getElementById("color-input");
    var resultado = document.getElementById("resultado-ej2");
    var nuevoColor = colorInput.value.trim(); // tomamos el valor del input

    if (nuevoColor !== "") {

        // TODO: Agregar el color al array usando push() (desde input) ✔️

        agregado.push(nuevoColor); //"pushea" o agrega el nuevo color

        // TODO: Mostrar mensaje de confirmación ✔️

        resultado.innerHTML =
            "<div class='alert alert-success'>Color " + nuevoColor + " agregado correctamente desde el input.</div>";
    }//if 
    else if (colores.length > 0) {

        // TODO: Agregar el color al array usando push() (desde array colores) ✔️

        nuevoColor = colores.shift(); //Se coge el primer color del array principal
        agregado.push(nuevoColor); //Se agrega al array

        // TODO: Mostrar mensaje de confirmación ✔️

        resultado.innerHTML =
            "<div class='alert alert-success'>Color " + nuevoColor + " agregado correctamente desde el array.</div>";
    }//elseif 
    else {
        // Si no hay input y el array colores está vacío
        resultado.innerHTML =
            "<div class='alert alert-danger'>No hay más colores para agregar.</div>";
            
        return; // salir de la función
    }//else

    // TODO: Limpiar el input ✔️
    colorInput.value = "";
    // TODO: Mostrar mensaje de confirmación ✔️
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-success'>Color " + nuevoColor + " agregado correctamente.</div>";

}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop() ✔️
    if (agregado.length > 1){ //Si la longitud del array es mayor a 1, borra un color
    var colorEliminado = agregado.pop();
    
    // TODO: Mostrar mensaje indicando qué color se eliminó ✔️
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-warning'>Color " + colorEliminado + " eliminado correctamente.</div>"; //muestra el color eliminado
    }
    // TODO: Si el array está vacío, mostrar mensaje apropiado ✔️
    if (agregado.length === 1) { //si la longitud del array es 1, es decir, que si queda un solo color, no puede borrarse
        document.getElementById("resultado-ej2").innerHTML +=
            "<div class='alert alert-danger'>No se puede dejar el array vacío.</div>";
    }//if
    else{
        resultadoDiv.innerHTML =
            "<div class='alert alert-danger'>No hay más colores para eliminar.</div>";
        return;
    }//else
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array ✔️

    // TODO: Crear HTML con la lista de colores ✔️

    // Sugerencia: usar un bucle for para crear la lista

    // TODO: Completar el bucle para mostrar los colores ✔️
    var html = "<h5>Lista de Colores:</h5><ul>";
    
    for (var i = 0; i < agregado.length; i++) { //recorre el array
        html += "<li>" + agregado[i] + "</li>"; //muestra los colores por índice
    }//for
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto ✔️
    // Cada producto debe tener: nombre, precio, categoria ✔️
    productos = [
        // TODO: Completar con objetos producto ✔️
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" } 
        {nombre: "Radeon RX 7900XTX 24GB Phantom Gaming - Asrock", precio: 1014.99, categoria: "GPU"},
        {nombre: "Ryzen 7 9800X3D", precio: 789.99, categoria: "CPU"},
        {nombre: "Asus ROG FLOW X13", precio: 2499.99, categoria: "Microbook reversible"},
        {nombre: "Razer Viper Ultimate", precio: 159.99, categoria: "Periférico"},
        {nombre: "GravaStar Mercury LowProfile", precio: 199.99, categoria: "Periférico"}
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    
    var productosOrdenados = productos.slice();
    productosOrdenados.sort(function (a, b) { //compara ambas variables pasadas por parámetro
        return a.precio - b.precio; //devuelve la comparativa para saber cuál es menor y cual es mayor
    });

    // TODO: Ordenar el array productos por precio de menor a mayor ✔️
    // Pista: usar el método sort() con función comparadora ✔️

    mostrarProductos(productosOrdenados);
}

function filtrarProductosCaros() {

    var filtrarProductosCaros = [] // TODO: Implementar el filtro ✔️
    filtrarProductosCaros = productos.filter(function (producto) { //Con el método filter pasando por parámetro "producto" y retornando que muestre los productos por precio mayor a 50
        return producto.precio > 50; //mostrará primero de forma ordenada los productos de mas de 50 euros
    });

    // TODO: Filtrar productos con precio mayor a 50€ ✔️
    // Pista: usar el método filter() ✔️

    mostrarProductos(filtrarProductosCaros);
}

function mostrarProductos(arrayProductos) { //coge por parámetro e array de los productos
    // TODO: Mostrar los productos en formato HTML ✔️
    // Crear tarjetas o lista con nombre, precio y categoría ✔️

    var html = "<h5>Catálogo de Productos:</h5>";
    // TODO: Recorrer el array y crear HTML para cada producto ✔️

    document.getElementById("resultado-ej3").innerHTML = html;
    for (var i = 0; i < arrayProductos.length; i++) { //el for lo recorre para poder agregar los productos al html
        html += "<div class='card mb-2'><div class='card-body'>";
        html += "<h6 class='card-title'>" + arrayProductos[i].nombre + "</h6>";
        html += "<p class='card-text'>Precio: " + arrayProductos[i].precio + "€</p>";
        html += "<p class='card-text'>Categoría: " + arrayProductos[i].categoria + "</p>";
        html += "</div></div>";
    }//for //terminada la interación con el bucle for, muestra los productos según índice con su nombre, precio y demás

    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Kiriel Kaedehara",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10 ✔️
        // TODO: Agregar la nota al array de notas ✔️
        // TODO: Mostrar mensaje de confirmación ✔️

        if (nota >= 0 && nota <= 10) { //se encarga de que la nota no quede vacía o en número negativo
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-success'>Nota " + nota + " agregada.</div>";
        } //if
        else {
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-danger'>Nota inválida. Debe estar entre 0 y 10.</div>";
        }//else
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas ✔️
        // TODO: Retornar el promedio redondeado a 2 decimales ✔️
        // Pista: usar reduce() o un bucle for ✔️

        if (this.notas.length === 0) {
            return 0;
        }//if

        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) { //recorre el array de notas para sumarlas 
            suma += this.notas[i];
        }//for

        var promedio = suma / this.notas.length; //y divide la suma con las notas del array para obtener el resultado
        return promedio.toFixed(2); //redondea a 2 decimales

    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas ✔️
        // TODO: Incluir el promedio si hay notas ✔️

        if (this.notas.length === 0) { //muestra un mensaje de que no hay notas si no se han agregado
            return "<div class='alert alert-warning'>No hay notas para mostrar.</div>";
        }//if

        var html = "<h5>Notas de " + this.nombre + ":</h5><ul>";

        for (var i = 0; i < this.notas.length; i++) { //recorre el array de notas para mostrarlo en el html
            html += "<li>" + this.notas[i] + "</li>";
        }//for

        html += "</ul>";
        var promedio = this.calcularPromedio();
        html += "<p><strong>Promedio:</strong> " + promedio + "</p>";
        return html; //muestra el promedio de las notas si las hay
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota ✔️
    // TODO: Convertir a número ✔️
    // TODO: Llamar al método agregarNota del objeto ✔️
    // TODO: Limpiar el input ✔️
    // TODO: Actualizar la visualización ✔️

    var notaInput = document.getElementById("nota-input");
    var notaNueva = parseFloat(notaInput.value);

    estudianteNotas.agregarNota(notaNueva);
    notaInput.value = "";
    mostrarNotasEstudiante();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio ✔️
    // TODO: Mostrar el resultado en el DOM ✔️

    var promedio = estudianteNotas.calcularPromedio(); //invoco a la función de calcular promedio creada anteriormente
    document.getElementById("resultado-ej4").innerHTML =
        "<div class='alert alert-info'>Promedio de notas: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas ✔️
    // TODO: Mostrar el resultado en el DOM ✔️

    var notasHTML = estudianteNotas.mostrarNotas(); //invoco a la función de mostrarnotas creada anteriormente
    document.getElementById("resultado-ej4").innerHTML = notasHTML;
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado ✔️
    // Cada empleado: nombre, departamento, salario, antiguedad ✔️
    empleados = [
        
        { nombre: "Kiriel", departamento: "CEO", salario: 6000, antiguedad: 9 },
        { nombre: "Juan Verdegay", departamento: "IT", salario: 3200, antiguedad: 5 },
        { nombre: "Marto", departamento: "Marketing", salario: 1300, antiguedad: 2 },
        { nombre: "Jorge el travieso", departamento: "Recursos Humanos", salario: 1400, antiguedad: 4 },
        { nombre: "Ángel motero", departamento: "Ventas", salario: 1350, antiguedad: 1 },
        { nombre: "Tralalero", departamento: "IT", salario: 2500, antiguedad: 4 }
        // TODO: Completar con datos de empleados ✔️
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input ✔️
    // TODO: Filtrar empleados por departamento ✔️
    // TODO: Mostrar los resultados ✔️

    var departamento = document.getElementById("departamento-input").value.trim();
    
    var empleadosDepto = [];
    
    for (var i = 0; i < empleados.length; i++) { //itera sobre el array de empleados
        if (empleados[i].departamento.toLowerCase() === departamento.toLowerCase()) { //igualamos a lowercase para que no haya fallos en caso de introducir en minúscula la búsqueda
            empleadosDepto.push(empleados[i]);
        }//if
    }//for
    
    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€ ✔️
    var empleadosAltoSalario = []; // TODO: Implementar filtro
    empleadosAltoSalario = empleados.filter(function (empleado) {
        return empleado.salario > 3000;
    });

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML ✔️
    // Incluir nombre, departamento, salario ✔️

    var html = "";
    // TODO: Crear HTML para cada empleado ✔️
    if (arrayEmpleados.length === 0) { //si el array de empleados está vacío, muestra que no hay empleados
        html = "<div class='alert alert-warning'>No hay empleados para mostrar.</div>";
    }//if 
    else { //En caso de haberlos, indexa a los empleados con todas sus propiedades
        html = "<h5>Lista de Empleados:</h5>";
        for (var i = 0; i < arrayEmpleados.length; i++) {
            html += "<div class='card mb-2'><div class='card-body'>";
            html += "<h6 class='card-title'>" + arrayEmpleados[i].nombre + "</h6>";
            html += "<p class='card-text'>Departamento: " + arrayEmpleados[i].departamento + "</p>";
            html += "<p class='card-text'>Salario: " + arrayEmpleados[i].salario + "€</p>";
            html += "</div></div>";
        }//for
    }//else

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas ✔️
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga", "ToloArto", "ToloBajo"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio ✔️
    // TODO: Mostrar qué elementos se eliminados ✔️
    // TODO: Mostrar el array resultante ✔️
    var posicionMedio = ciudades.length / 2; //Borra las posiciones al medio del array
    var elementosEliminados = ciudades.splice(posicionMedio, 2); 
    
    var html = "<h5>Elementos eliminados:</h5>" + elementosEliminados.join(", ");
    
    html += "<h5>Ciudades después de eliminar:</h5>" + ciudades.join(", ");
    
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array ✔️
    // TODO: Mostrar la porción extraída ✔️
    // TODO: Mostrar que el array original no se modifica ✔️
    var porcionExtraida = ciudades.slice(1, 5); //se extrae una pequeña porción del array, en concreto la posición 2, que indexadamente es el 1 pero por que la primera posición es 0 y la 4
    
    var html = "<h5>Porción extraída (posiciones 2 a 4):</h5>" + porcionExtraida.join(", ");
    
    html += "<h5>Array original (sin cambios):</h5>" + ciudades.join(", ");
    
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid" ✔️
    // TODO: Usar indexOf() para encontrar su posición ✔️
    // TODO: Mostrar los resultados ✔️
    var ciudadEncontrada = ciudades.find(function(ciudad) { //con el método find, podemos encontrar una ciudad concreta, en este caso, madrid
        return ciudad === "Madrid";
    });
    
    var posicion = ciudades.indexOf("Madrid");
    
    var html = "<h5>Resultado de find():</h5>" + ciudadEncontrada;
    html += "<h5>Posición con indexOf():</h5>" + posicion;
    
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo ✔️
function Vehiculo(marca, modelo, año, velocidad) { 
    // TODO: Asignar propiedades usando this ✔️
    // TODO: Crear método acelerar() que incremente la velocidad ✔️
    // TODO: Crear método mostrarInfo() que retorne información ✔️
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = velocidad; //IMPORTANTE
 
    this.acelerar = function() { //función para acelerar en 10 la velocidad de cada vehículo

        this.velocidad += 10;
    
    };

    this.mostrarInfo = function () { //función que se encarga de retornar el objeto concatenando cada una de sus características
        return (
            "<div class='card bg-light mb-2'><div class='card-body'>" +
            "<h6 class='card-title'>" + this.marca + " " + this.modelo + " (" + this.año + ")</h6>" +
            "<p class='card-text'>Velocidad actual: " + this.velocidad + " km/h</p>" +
            "</div></div>"
        );
    };

}

var vehiculos = [];

function crearVehiculos() { //Creamos el objeto "vehículo"
    // TODO: Crear varios objetos usando el constructor ✔️
    // TODO: Agregar al array vehiculos ✔️
    vehiculos = [ //Aquí creamos todos los objetos, en este caso 4 vehículos
    new Vehiculo("Kawasaki", "H2", "2018", 300),
    new Vehiculo("Quadra", "R Type", "2037", 250),
    new Vehiculo("RayField", "Caliburn", "2067", 270),
    new Vehiculo("RayField", "Mordred", "2077", 290)
    ];
    mostrarInfoVehiculos();
}

function acelerarTodos() { 
    // TODO: Llamar al método acelerar() de todos los vehículos ✔️
    // TODO: Actualizar la visualización ✔️
    for (var i = 0; i < vehiculos.length; i++) { //itera sobre el array de los vehículos para acelerarlos a todos a la vez
        if (typeof vehiculos[i].acelerar === "function") {
            vehiculos[i].acelerar();
        }//if
    }//for
    document.getElementById("resultado-ej7").innerHTML =
        "<div class='alert alert-success'>Vehículos acelerados</div>";
}



function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos ✔️
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo ✔️
    for (var i = 0; i < vehiculos.length; i++) { //recorre el array y hace uso de la función de mostrar info para mostrar la información de todos los vehículos a la vez
        html += vehiculos[i].mostrarInfo();
    }//for

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios ✔️
    // Pista: usar bucles anidados y Math.random() ✔️
    matriz = [];
    for (var i = 0; i < 3; i++) { //bucle anidado para crear las filas y los números
        var fila = [];
        for (var j = 0; j < 3; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 100); // Números entre 0 y 99
            fila.push(numeroAleatorio);
        }//for anidado
        matriz.push(fila); 
    }//for

    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal ✔️
    var suma = 0;
    for (var i = 0; i < 3; i++) { 
        suma += matriz[i][i];
    }//for
    
    // TODO: Mostrar el resultado ✔️
    var html = "<div class='alert alert-info'>Suma de la diagonal: " + suma + "</div>";
    document.getElementById("resultado-ej8").innerHTML = "";
    document.getElementById("resultado-ej8").innerHTML += html;
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML ✔️
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";

    // TODO: Crear filas y celdas de la tabla ✔️
    for (var i = 0; i < 3; i++) { //crea las filas y celdas con un bucle anidado
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }//for anidado
        html += "</tr>";
    }//for

    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10 ✔️
    numeros = []; // TODO: Completar
    for (var i = 1; i <= 10; i++) { //array de números creado del 1 al 10
        numeros.push(i);
    }//for

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números ✔️
    var duplicados = []; // TODO: Implementar map
    duplicados = numeros.map(function (num) {
        return num * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() { //divide entre 2 y si el resultado es 0, el número es par, por lo que solo muestra estos números
    // TODO: Usar filter() para obtener solo números pares ✔️
    var pares = numeros.filter(function(num) {
        return num % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() { //suma todos los números del array con el método reduce, este retorna el valor de acumulado, el cual usamos para sumar los números 
    // TODO: Usar reduce() para sumar todos los números ✔️
    var suma = numeros.reduce(function(acumular, num) {
        return acumular + num;
    }, 0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs ✔️
    var titulo = document.getElementById("libro-titulo").value.trim();
    var autor = document.getElementById("libro-autor").value.trim();
    var año = parseInt(document.getElementById("libro-year").value);
    var genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos ✔️
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") { //si algún campo no ha sido introducido, pide que se introduzcan todos 
        document.getElementById("resultado-ej10").innerHTML = 
            "<div class='alert alert-danger'>Por favor, completa todos los campos</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca ✔️
    var libro = { //objeto libro con todas sus características
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };
    
    biblioteca.push(libro); //se agrega el objeto al array biblioteca

    // TODO: Limpiar los inputs ✔️
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    
    // TODO: Mostrar mensaje de confirmación ✔️
    document.getElementById("resultado-ej10").innerHTML = 
        "<div class='alert alert-success'>Libro '" + titulo + "' agregado correctamente</div>";
    
    // TODO: Actualizar visualización ✔️
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca ✔️
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente ✔️
    var librosOrdenados = biblioteca.slice().sort(function(a, b) { //Compara los títulos de los libros
        if (a.titulo < b.titulo) return -1; //Si alfabéticamente está antes A que B, se muestra antes A
        if (a.titulo > b.titulo) return 1; //En cambio. si B está antes que B, se muestra después que B
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado ✔️
    var generoSeleccionado = document.getElementById("libro-genero").value;
    
    if (generoSeleccionado === "") { //Pide que se seleccione un género antes de filtrar
        document.getElementById("resultado-ej10").innerHTML = 
            "<div class='alert alert-warning'>Por favor, selecciona un género primero</div>";
        return;
    }//if
    
    // TODO: Filtrar libros por género ✔️
    var librosFiltrados = biblioteca.filter(function(libro) {
        return libro.genero === generoSeleccionado; //compara que los libros tienen ese género
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020 ✔️
    var recientes = biblioteca.filter(function(libro) {
        return libro.año > 2020; //Devuelve solo los libros publicados después de 2020
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML ✔️
    var html = "";

    if (arrayLibros.length === 0) { //si el array está vacío muestra que no hay libros
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    }//if 
    else { //con un bucle for se recorre el array y se imprime el libro
        // TODO: Crear HTML para cada libro ✔️
        html = "<div class='row'>";
        for (var i = 0; i < arrayLibros.length; i++) {
            html += "<div class='col-md-4 mb-3'>";
            html += "<div class='card'>";
            html += "<div class='card-body'>";
            html += "<h5 class='card-title'>" + arrayLibros[i].titulo + "</h5>";
            html += "<p class='card-text'><strong>Autor:</strong> " + arrayLibros[i].autor + "</p>";
            html += "<p class='card-text'><strong>Año:</strong> " + arrayLibros[i].año + "</p>";
            html += "<p class='card-text'><strong>Género:</strong> " + arrayLibros[i].genero + "</p>";
            html += '<button class="btn btn-danger btn-eliminar" data-index="' + i + '">Eliminar libro</button>';
            html += "</div>";
            html += "</div>";
            html += "</div>";
        }//for
        html += "</div>";
    }//else
        
    document.getElementById("resultado-ej10").innerHTML = html;
        var botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(function(boton) { //por cada botón creado en la card de los libros
        boton.addEventListener('click', function() { //aplica el addevenlistener
            var index = parseInt(this.getAttribute('data-index')); //obtiene el atributo de data index
            arrayLibros.splice(index, 1); //Eliminar del array el libro concreto de su card
            mostrarLibros(arrayLibros); //Vuelve a mostrar el array de los libros 
        });
    });
   
}

function eliminarLibros() {
    var resultadoDiv = document.getElementById("resultado-ej10");

    if (biblioteca.length === 0) {
        resultadoDiv.innerHTML = "<div class='alert alert-danger'>No hay más libros que eliminar.</div>";
        return;
    }

    if (biblioteca.length === 0) {
        resultadoDiv.innerHTML = "<div class='alert alert-danger'>No se puede dejar la biblioteca vacía.</div>";
        return;
    }

    // Elimina el último libro
    var libroEliminado = biblioteca.pop();

    resultadoDiv.innerHTML = 
        "<div class='alert alert-warning'>Libro '" + libroEliminado.titulo + "' eliminado correctamente.</div>";

    // Actualiza la visualización de la biblioteca
    mostrarBiblioteca();
}


// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10 ✔️

    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);
    document.getElementById("btn-libro-eliminado").addEventListener("click", eliminarLibros);
});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/