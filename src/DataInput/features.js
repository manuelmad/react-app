// Tamaño de canvas responsivo
let tamano_ventana = window.innerWidth;
console.log(tamano_ventana);

let cabecera_1;
let cabecera_2;
let cabecera_3;
let cabecera_4;
let cabecera_5;
let cabecera_6;

// CABECERA DE TABLA RESPONSIVA
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

export { cabecera_1, cabecera_2, cabecera_3, cabecera_4, cabecera_5, cabecera_6 };