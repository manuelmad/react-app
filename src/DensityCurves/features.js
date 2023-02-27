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

export { tamano_ventana, ancho_canvas, alto_canvas };