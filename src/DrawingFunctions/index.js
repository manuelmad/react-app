import { tamano_ventana, ancho_canvas, alto_canvas } from '../DensityCurves/features.js';

// ACCEDER AL CANVAS DE HTML Y DARLE CONTEXTO //
let d = document.getElementById("Prof_vs_Dens");
let lienzo = d.getContext("2d");

// let ancho_canvas = d.width;
// let alto_canvas = d.height;

// RECUADRO PARA GRAFICAR
let ancho = 0.79* ancho_canvas;
let centro = ancho / 2;
let alto = 0.79* alto_canvas;

// MÁRGENES DEL GRÁFICO (EL MISMO PARA LOS 4 LADOS) //
let margen = (ancho_canvas-ancho)/2;
let medio_margen = margen / 2;

// FUNCIÓN PARA DIBUJAR LÍNEAS (2 PUNTOS) //
const dibujarLinea = (color, xinicial, yinicial, xfinal, yfinal) => {
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// FUNCIÓN PARA DIBUJAR LÍNEAS CON TRANSPARENCIA (2 PUNTOS) //
const dibujarLineaTrans = (xinicial, yinicial, xfinal, yfinal) => {
	lienzo.beginPath();
	lienzo.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// FUNCIÓN PARA TRAZAR UNA CURVA CONECTANDO LOS PUNTOS DADOS //
const CurvaDensidades = (color, xinicial, yinicial, xfinal, yfinal) => {
	lienzo.beginPath();
	lienzo.strokeStyle = (color);
	lienzo.lineJoin = "round"; // Permite el trazo a mano alzada uniendo puntos //
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// FUNCIÓN PARA BORRAR TODO LO QUE HAYA EN EL CANVAS
const borrarCanvas = () => {
	lienzo.clearRect(0, 0, ancho_canvas, alto_canvas);
}

// FUNCIÓN PARA RENDERIZAR EL CANVAS INICIAL, BORRANDO PRIMERO LO QUE HAYA EN ÉL
const canvasInicial = () => {
	
	borrarCanvas();

	// EJES DE COORDENADAS (FUERA DE LA FUNCIÓN DE DIBUJO "trazarCurva" PARA QUE SEA SIEMPRE VISIBLE) //
	dibujarLinea("black", margen, margen-5, margen, alto + margen + 5); // LÍNEA VERTICAL IZQUIERDA //
	dibujarLinea("black", margen-5, margen, ancho + margen + 5, margen); // LÍNEA HORIZONTAL SUPERIOR //

	// LEYENDA DE LÍNEAS DE DENSIDAD //
	let ancho_linea = 0.07*ancho_canvas;
	let separacion_leyendas = 0.3*ancho_canvas;

	let leyendas_y = 0.92*alto_canvas;
	let leyendas_y_abajo = 0.96*alto_canvas;

    let leyenda1_x1;
	if(tamano_ventana < 600) {
		leyenda1_x1 = 0.15*ancho_canvas;
	}
	else {
		leyenda1_x1 = 0.2*ancho_canvas;
	}

	let leyenda1_x2 = leyenda1_x1 + ancho_linea;
	let leyenda3_x1 = leyenda1_x2 + separacion_leyendas;
	let leyenda3_x2 = leyenda3_x1 + ancho_linea;

	if(tamano_ventana < 600) {
		lienzo.font = '8px "Tahoma"';
	}
	else {
		lienzo.font = '10px "Tahoma"';
	}
	lienzo.textAlign = 'left';
	dibujarLinea("blue", leyenda1_x1, leyendas_y, leyenda1_x2, leyendas_y);
	lienzo.fillStyle = "black";
	lienzo.fillText("Densidad de Poro", leyenda1_x2+5, leyendas_y+3);

	dibujarLinea("green", leyenda1_x1, leyendas_y_abajo, leyenda1_x2, leyendas_y_abajo);
	lienzo.fillStyle = "black";
	lienzo.fillText("Densidad de Lodo", leyenda1_x2+5, leyendas_y_abajo+3);

	dibujarLinea("orange", leyenda3_x1, leyendas_y, leyenda3_x2, leyendas_y);
	lienzo.fillStyle = "black";
	lienzo.fillText("Dens. de M. de Arrem.", leyenda3_x2+5, leyendas_y+3);

	dibujarLinea("red", leyenda3_x1, leyendas_y_abajo, leyenda3_x2, leyendas_y_abajo);
	lienzo.fillStyle = "black";
	lienzo.fillText("Densidad de Fractura", leyenda3_x2+5, leyendas_y_abajo+3);

	// LEYENDA DEL EJE Y (ROTADA) //
	let xv = margen/4; // COORDENADA X DONDE ESTARÁ EL TEXTO ROTADO //
	let yv = alto_canvas/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO ROTADO //
	lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	lienzo.translate(xv,yv); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	lienzo.rotate(-Math.PI / 2); // ESTABLECER EL ÁNGULO DE INCLINACIÓN DEL TEXTO (-90º) //
	lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	lienzo.fillText("Profundidad (TVD, pies)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	lienzo.restore(); // REGRESAR EL CANVAS A SU ESTADO ORIGINAL, ANTES DE GRABARLO CON papel.save() //


	// EJE X LEYENDA //
	let xh = ancho_canvas/2; // COORDENADA X DONDE ESTARÁ EL TEXTO //
	let yh = margen/2; // COORDENADA Y DONDE ESTARÁ EL TEXTO //
	lienzo.save(); // GRABAR EL CANVAS PARA HACER LOS SIGUIENTES CAMBIOS Y QUE NO AFECTEN AL CANVAS ORIGINAL //
	lienzo.translate(xh,yh); // TRASLADAR EL PUNTO DE DIBUJO DEL CANVAS A LAS COORDENADAS ANTES ESTABLECIDAS //
	lienzo.textAlign = 'center'; // ESTABLECER ALINEACIÓN DEL TEXTO //
	if(tamano_ventana < 600) {
		lienzo.font = '10px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	else {
		lienzo.font = '16px "Tahoma"'; // ESTABLECER FUENTE Y TAMAÑO DEL TEXTO //
	}
	lienzo.fillText("Densidad Equivalente (lpg.)", 0, 0); // ESTABLECER EL TEXTO Y EN QUÉ COORDENADAS DENTRO DEL PUNTO INICIAL ESTABLECIDO ANTERIORMENTE EMPEZARÁ A ESCRIBIRSE //
	lienzo.restore();
}

export { dibujarLinea, dibujarLineaTrans, CurvaDensidades, canvasInicial };