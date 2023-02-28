import { datos_auto } from ".";
import { div_tablas } from ".";

/* CANVAS */

// Variables
let tamano_ventana = window.innerWidth;

let ancho_canvas;
let alto_canvas;

// Tamaño de canvas responsivo
if(tamano_ventana < 600) {
	ancho_canvas = 280;
	alto_canvas = 280;
}
else if(tamano_ventana >= 600 && tamano_ventana < 1024) {
	ancho_canvas = 550;
	alto_canvas = 550;
}
else if(tamano_ventana >= 1024) {
	ancho_canvas = 720;
	alto_canvas = 720;
}


/* BOTÓN PARA MOSTRAR / OCULTAR DISEÑO AUTOMÁTICO */
const mostrarOcultarAuto = () => {

	if(datos_auto.style.display === "none")
	{
		datos_auto.style.display = "block";
	}
	else if(datos_auto.style.display === "block")
	{
		datos_auto.style.display = "none";
	}
}

/* BOTÓN PARA MOSTRAR / OCULTAR DISEÑO MANUAL */
const mostrarOcultarManual = () => {

	if(div_tablas.style.display === "none")
	{
		div_tablas.style.display = "block";
	}
	else if(div_tablas.style.display === "block")
	{
		div_tablas.style.display = "none";
	}
}

export { tamano_ventana, ancho_canvas, alto_canvas, mostrarOcultarAuto, mostrarOcultarManual };