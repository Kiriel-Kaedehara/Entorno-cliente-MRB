/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno
   
   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

/* ==============================================================
   Ejercicio 1 – Selectores y modificación (EJEMPLO COMPLETADO)
   ============================================================== */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
   // Cambiar el texto del primer párrafo
   const primerParrafo = contenido.querySelector('p');
   primerParrafo.textContent = 'Este texto ha sido modificado al clicar en el botón, ejecutando JavaScript';

   // Cambiar el color del segundo párrafo
   const segundoParrafo = contenido.querySelectorAll('p')[1];//Selecciona el segundo párrafo
   if (segundoParrafo) {

      segundoParrafo.style.color = 'Orange';
      
   }//if

   const tercerParrafo = contenido.querySelectorAll('p')[2];//Selecciona el tercer párrafo
   if (tercerParrafo) {

      tercerParrafo.style.color = 'Black';
      
   }
   // Añadir clase "resaltado" a todos los párrafos
   const todosLosParrafos = contenido.querySelectorAll('p');
   for (let i = 0; i < todosLosParrafos.length; i++) {

      todosLosParrafos[i].classList.add('resaltado');

   }
});

/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');

btnAdd.addEventListener('click', function () {//Función para añadir un nuevo párrafo

   const nuevoParrafo = document.createElement('p');//Crea el elemento <p>
   nuevoParrafo.textContent = 'Nuevo párrafo añadido';
   nuevoParrafo.classList.add('mb-2');
   contenido.appendChild(nuevoParrafo);//Añade el nuevo párrafo al contenedor #contenido
   aplicarHover(nuevoParrafo);//Aplica los eventos hover (Ej3) al nuevo párrafo

});

btnRemove.addEventListener('click', function () {//Función para eliminar el último párrafo

   const parrafo = contenido.getElementsByTagName('p');
   if (parrafo.length === 1) {

      alert('No se puede eliminar el último párrafo');
      return; //Si solo queda un párrafo, muestra una alerta y se sale de la función

   }//if 
   else {
      
      const nuevoParrafo = parrafo[parrafo.length - 1];//Selecciona el último párrafo
      contenido.removeChild(nuevoParrafo);//Elimina el último párrafo

   }//else

});

// TODO: 1. Seleccionar los botones con IDs: btn-add y btn-remove ✔️

// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p> ✔️
//         - Asignar texto: "Nuevo párrafo añadido" ✔️
//         - Añadir clase Bootstrap: "mb-2" ✔️
//         - Agregarlo al contenedor #contenido ✔️
//         - Aplicar eventos hover (función del ejercicio 3) - ✔️

// TODO: 3. Crear función para el botón "Eliminar párrafo" ✔️
//         - Buscar todos los párrafos en #contenido ✔️
//         - Si hay párrafos, eliminar el último ✔️


/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

const parrafo = contenido.getElementsByTagName('p');

function mouseOver(event) {

   event.target.style.backgroundColor = '#ff00ff90'; //Color de fondo al pasar el ratón por encima

}

function mouseOut(event) {

   event.target.style.backgroundColor = ''; //Restaurar color de fondo al quitar el ratón de encima

}//Funciones para cambiar y restaurar el color de fondo

//Esto es el código que se ejecutará en el evento
function aplicarHover(parrafo) {

   parrafo.addEventListener('mouseover', mouseOver); //Añade el evento mouseover al párrafo
   parrafo.addEventListener('mouseout', mouseOut); //Añade el evento mouseout al párrafo

}//Función que aplica los eventos al párrafo pasado como parámetro

for (let i = 0; i < parrafo.length; i++) {

   aplicarHover(parrafo[i]);

} //recorre los párrafos y aplica el hover

// TODO: 1. Crear función para cuando entra el ratón ✔️
//         - Cambiar backgroundColor a '#e7f5ff' ✔️ (Contenido personalizado)

// TODO: 2. Crear función para cuando sale el ratón ✔️
//         - Restaurar backgroundColor a ''✔️

// TODO: 3. Crear función para aplicar eventos hover a un párrafo ✔️
//         - Usar addEventListener para 'mouseover' y 'mouseout'✔️

// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente ✔️


/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */
const nuevoTextoForm = document.getElementById('nuevoTexto');
const btnCambiar = document.getElementById('btnCambiar');
const msgError = document.getElementById('msg-ej4');
const primerParrafo = contenido.querySelector('p');

btnCambiar.addEventListener('click', function () {
   const nuevoTexto = nuevoTextoForm.value.trim();

   if (nuevoTexto === '') { //Si "nuevoTexto" está vacío muestra el mensaje de error

      const mensaje = msgError.textContent.trim(); //El .trim elimina los espacios en blanco
      nuevoTextoForm.placeholder = mensaje;
      msgError.classList.add('d-none');//ocultar el mensaje de error        
      nuevoTextoForm.value = '';//limpia el input                  
      nuevoTextoForm.focus();

   }//if 
   else { //En cambio si tiene texto

      msgError.classList.add('d-none');
      nuevoTextoForm.placeholder = 'Escribe nuevo texto';
      primerParrafo.textContent = nuevoTexto;//cambia el texto del primer párrafo      
      nuevoTextoForm.value = '';

   }//else
});
// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)✔️

// TODO: 2. Crear función para el botón "Cambiar texto"✔️
//         - Obtener valor del input (usar .trim())✔️
//         - Si está vacío: mostrar mensaje error, enfocar input✔️
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo✔️


/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */
const tareaInput = document.getElementById('textoTarea');
const btnAñadirTarea = document.getElementById('btnAñadirTarea');
const btnBorrarCompletadas = document.getElementById('btnBorrarCompletadas');
const listaTareas = document.getElementById('listaTareas');
const msgErrorTarea = document.getElementById('msg-ej5');

btnAñadirTarea.addEventListener('click', function () {//Función para añadir una nueva tarea
   const textoTarea = tareaInput.value.trim();

   if (textoTarea === '') {//Si "textoTarea" está vacío muostrará el mensaje de error

      const mensaje = msgErrorTarea.textContent.trim();
      tareaInput.placeholder = mensaje;
      tareaInput.value = '';
      tareaInput.focus();//Limpiar y enfocar el input después de añadir la tarea

   }//if 
   else {//Si tiene texto

      msgErrorTarea.classList.add('d-none');
      tareaInput.placeholder = 'Escribe la tarea';

      const nuevaTarea = document.createElement('li');//Crear nuevo elemento <li>
      nuevaTarea.textContent = textoTarea;//Crear nuevo elemento <li> con el texto de la tarea
      nuevaTarea.style.cursor = 'pointer';

      nuevaTarea.addEventListener('click', function () {//Añadir evento para marcar como completada
         nuevaTarea.classList.toggle('completada');//Pone como 'completada' al hacer clic
      });

      listaTareas.appendChild(nuevaTarea);//Agregar la nueva tarea a la lista
      tareaInput.value = '';
      tareaInput.focus();

   }//else
});

btnBorrarCompletadas.addEventListener('click', function () {//Función para borrar tareas completadas
   const tareasCompletadas = listaTareas.querySelectorAll('.completada');//Selecciona todas las tareas con la clase 'completada'

   tareasCompletadas.forEach(function (listaTarea) {//Recorre las tareas completadas
      listaTareas.removeChild(listaTarea);//Elimina cada tarea completada de la lista
   });
});

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)✔️

// TODO: 2. Función para añadir tarea ✔️
//         - Obtener texto del input✔️
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'✔️
//         - Limpiar input y enfocar✔️

// TODO: 3. Función para borrar tareas completadas✔️
//         - Buscar todos los <li> con clase 'completada'✔️
//         - Eliminar cada uno de la lista✔️


/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */