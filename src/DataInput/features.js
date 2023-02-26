// CABECERA DE TABLA RESPONSIVA
let tamano_ventana = window.innerWidth;
console.log(tamano_ventana);

let cabecera_1;
let cabecera_2;
let cabecera_3;
let cabecera_4;
let cabecera_5;
let cabecera_6;

if(tamano_ventana < 600) {
	cabecera_1 = "Prof.";
	cabecera_2 = `P.P`;
	cabecera_3 = `D.L`;
	cabecera_4 = `Prof.`;
	cabecera_5 = `D.A`;
	cabecera_6 = `P.F`;
} else {
    cabecera_1 = `Profundidad`;
	cabecera_2 = `Densidad de Poro`;
	cabecera_3 = `Densidad de Lodo`;
	cabecera_4 = `Profundidad`;
	cabecera_5 = `Densidad de Marg. de Arrem.`;
	cabecera_6 = `Densidad de Fractura`;
}


// FUNCIÓN PARA AGREGAR FILAS A LA TABLA CON LOS ID'S CORRESPONDIENTES
const agregarFila = () => {
	//Creo una nueva fila
	let nueva_fila = document.createElement("tr");

	// Creo las columnas de esa fila (ignoro la columna del centro)
	let nueva_columna = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");
	let nueva_columna5 = document.createElement("td");
	let nueva_columna6 = document.createElement("td");
	let nueva_columna7 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila.appendChild(nueva_columna);
	nueva_fila.appendChild(nueva_columna2);
	nueva_fila.appendChild(nueva_columna3);
	nueva_fila.appendChild(nueva_columna4);
	nueva_fila.appendChild(nueva_columna5);
	nueva_fila.appendChild(nueva_columna6);
	nueva_fila.appendChild(nueva_columna7);

	// Creo 4 inputs
	let nuevo_input = document.createElement("input");
	let nuevo_input2 = document.createElement("input");
	let nuevo_input3 = document.createElement("input");
	let nuevo_input4 = document.createElement("input");

	// Asigno "id's" a los inputs creados

	// Cuento las filas de la tabla y creo un índice
	let tabla = document.getElementById("tabla");
	let filas_cuerpotabla = tabla.getElementsByTagName("tr").length -1; // "-1" para ignorar la cabecera
	let indice = filas_cuerpotabla + 1;

	/*** 1 ***/
	let nombre = "prof";
	let identity = nombre+indice;

	nuevo_input.setAttribute("id", identity);

	/*** 2 ***/
	let nombre2 = "pporo";
	let identity2 = nombre2+indice;

	nuevo_input2.setAttribute("id", identity2);

	/*** 3 ***/
	let nombre3 = "prof";
	let identity3 = nombre3+indice+"a";

	nuevo_input3.setAttribute("id", identity3);

	/*** 4 ***/
	let nombre4 = "pfractura";
	let identity4 = nombre4+indice;

	nuevo_input4.setAttribute("id", identity4);
	
	
	// Creo 2 spans
	let nuevo_span = document.createElement("span");
	let nuevo_span2 = document.createElement("span");

	// Asigno "id's" a los spans creados
	/*** 1 ***/
	let nombre5 = "dlodo";
	let identity5 = nombre5+indice;

	nuevo_span.setAttribute("id", identity5);

	/*** 2 ***/
	let nombre6 = "pmargenarrem";
	let identity6 = nombre6+indice;

	nuevo_span2.setAttribute("id", identity6);


	// Inserto los 4 inputs en las columnas (celdas) correspondientes
	nueva_columna.appendChild(nuevo_input);
	nueva_columna2.appendChild(nuevo_input2);
	nueva_columna5.appendChild(nuevo_input3);
	nueva_columna7.appendChild(nuevo_input4);

	// Inserto los 2 spans en las columnas (celdas) correspondientes
	nueva_columna3.appendChild(nuevo_span);
	nueva_columna6.appendChild(nuevo_span2);

	// Accedo al body de la tabla
	let cuerpo_tabla = document.getElementById("cuerpotabla");

	// Inserto la fila, sus columnas, inputs y spans en el body de la tabla
	cuerpo_tabla.appendChild(nueva_fila);
}

// FUNCIÓN PARA ELIMINAR FILAS DE LA TABLA (LA ÚLTIMA)

const eliminarFila = () => {
	// Cuento las filas de la tabla
	let tabla = document.getElementById("tabla");
	let filas_cuerpotabla = tabla.getElementsByTagName("tr").length -1; // "-1" para ignorar la cabecera

	if(filas_cuerpotabla >2) // Para que el botón eliminar no funcione cuando solo quedan las 2 filas originales
	{
		let cuerpo_tabla = document.getElementById("cuerpotabla");
		let ultima_fila = cuerpo_tabla.lastElementChild;
		cuerpo_tabla.removeChild(ultima_fila);
	}
}

export { cabecera_1, cabecera_2, cabecera_3, cabecera_4, cabecera_5, cabecera_6, agregarFila, eliminarFila };
