/******** AJUSTE DE LA PROFUNIDAD REVESTIDOR INTERMEDIO *******/

const AnalisisIntermedio = (a, b, c, d, e) => {
	// VARIABLES //

    let Prof_Normal_Anormal = a;
    console.log(Prof_Normal_Anormal);

    let Prof_Zona_Propensa = b;
    console.log(Prof_Zona_Propensa);

	let Densidad_Eq_Zona_Propensa = c;
    console.log(Densidad_Eq_Zona_Propensa);

    let Prof_Rev_Int = d;
    console.log(Prof_Rev_Int);

	let Densidad_Zap_Int = e;
    console.log(Densidad_Zap_Int);

	let Delta_Presion_Teorico;
	let Delta_Presion_Calculado;

	let Prof_Rev_Int_Correg;
	let Densidad_Zap_Int_Correg;

    // Arrays hardcodeados que tengo que quitar de aquí luego porque deben venir de la sección anterior de la aplicación
    let P_vs_DL = [
        8.5, 0,
        9.5, 2000,
        11.5, 4000,
        13.5, 6000,
        15.5, 8000,
        16.5, 10000
    ];
    
    let P_vs_DA = [
        14.5, 0,
        17.5, 2000,
        18.5, 4000,
        19.5, 6000,
        21.5, 8000,
        22.5, 10000
    ];
    
    let factorX = 700/23;
    let factorY = 700/10000;

	if(Prof_Normal_Anormal !== "" && Prof_Rev_Int !== "" && Densidad_Zap_Int !== "" && Prof_Zona_Propensa !== "" && Densidad_Eq_Zona_Propensa !== "")
	{
		if(Prof_Rev_Int > Prof_Normal_Anormal)
		{
			Delta_Presion_Teorico = 3000;
			console.log("El Delta Presión Teórico es " + Delta_Presion_Teorico + " lpc.");
		}
		else
		{
			Delta_Presion_Teorico = 2000;
			console.log("El Delta Presión Teórico es " + Delta_Presion_Teorico + " lpc.");
		}

		Delta_Presion_Calculado = 0.052 * (Densidad_Zap_Int - Densidad_Eq_Zona_Propensa) * Prof_Zona_Propensa;
		console.log("El Delta Presión Calculado es " + Delta_Presion_Calculado + " lpc.");

		if(Delta_Presion_Calculado < Delta_Presion_Teorico)
		{
			let x = `Presion Diferencial Teórica = ${Delta_Presion_Teorico} lpc.
			Presion Diferencial Calculada = ${Delta_Presion_Calculado.toFixed(1)} lpc.
			Presion Diferencial Calculada < Presion Diferencial Teórica.

			El revestidor PUEDE ASENTARSE a ${Prof_Rev_Int} pies sin riesgo de pega diferencial.`;
			document.getElementById("resultadoI").innerText = x;
		}
		else
		{
			Densidad_Zap_Int_Correg = Number(((Delta_Presion_Teorico / (0.052 * Prof_Zona_Propensa)) + Densidad_Eq_Zona_Propensa)).toFixed(2);

			let w = Densidad_Zap_Int_Correg;
			//var w= 11; Valor de prueba porque era muy difícil lograr falla
			
			// CICLO PARA QUE LA LÍNEA VERTICAL DE MÁXIMA DENSIDAD DE LODO PERMITIDA INTERSECTE A LA LÍNEA DE DL
			let n;
					
			let datosDL = P_vs_DL.length;
			let pendiente;
			let interseccion;
            let auto1;
			for(n=0; n<=datosDL-1; n=n+2)
			{
				if(w >= P_vs_DL[n]/factorX && w< P_vs_DL[n+2]/factorX)
				{
					pendiente = (P_vs_DL[n+3] - P_vs_DL[n+1]) / (P_vs_DL[n+2] - P_vs_DL[n]);
                    
					if(pendiente === "Infinity") // Solución si la pendiente es infinito
					{
						auto1 = P_vs_DL[n+3];
					}
					else
					{
						console.log(pendiente);
						interseccion = P_vs_DL[n+3] - (pendiente*P_vs_DL[n+2]);
						console.log(interseccion);
						auto1 = pendiente*w*factorX + interseccion;
						Prof_Rev_Int_Correg = auto1/factorY;
						console.log("La profundidad de asentamiento corregida del revestidor por riesgo de pega diferencial es: " + Prof_Rev_Int_Correg + " pies.");
					}
				}
			}

			// CICLO PARA QUE LA LÍNEA HORIZONTAL DE PROFUNDIDAD DE ASENTAMIENTO CORREGIDA INTERSECTE A LA LÍNEA DE DA
			let s;
					
			let datosDA = P_vs_DA.length;
			let pendienteDA;
			let interseccionDA;
            let auto2;

			for(s=0; s<=datosDA-1; s=s+2)
			{
				if(auto1 >= P_vs_DA[s+1] && auto1 < P_vs_DA[s+3])
				{
					pendienteDA = (P_vs_DA[s+3] - P_vs_DA[s+1]) / (P_vs_DA[s+2] - P_vs_DA[s]);
                    
					if(pendienteDA === "Infinity") // Solución si la pendiente es infinito
					{
						auto2 = P_vs_DA[s+2];
					}
					else
					{
						console.log(pendienteDA);
						interseccionDA = P_vs_DA[s+3] - (pendienteDA*P_vs_DA[s+2]);
						console.log(interseccionDA);
						auto2 = (auto1 - interseccionDA)/pendienteDA;
						console.log("La D.A. a la profundidad de " + Prof_Rev_Int_Correg + " pies es: " + auto2/factorX + " lpg.");
					}
				}
			}


			// CICLO PARA QUE LA LÍNEA VERTICAL DE D.A. INTERSECTE A LA LÍNEA DE DL
			let q;
					
			let datosDL2 = P_vs_DL.length;
			let pendienteDL2;
			let interseccionDL2;
            let auto3

			for(q=0; q<=datosDL2-1; q=q+2)
			{
				if(auto2 >= P_vs_DL[q] && auto2 < P_vs_DL[q+2])
				{
					pendienteDL2 = (P_vs_DL[q+3] - P_vs_DL[q+1]) / (P_vs_DL[q+2] - P_vs_DL[q]);
					if(pendienteDL2 === "Infinity") // Solución si la pendiente es infinito
					{
						auto3 = P_vs_DL[q+3];
					}
					else
					{
						console.log(pendienteDL2);
						interseccionDL2 = P_vs_DL[q+3] - (pendienteDL2*P_vs_DL[q+2]);
						console.log(interseccionDL2);
						auto3 = (pendienteDL2*auto2 + interseccionDL2);
						console.log(auto3);
						console.log("La máxima profundidad de asentamiento del revestidor adicional es: " + auto3/factorY + " pies");
					}
				}
			}
			
			let x = `Presion Diferencial Teórica = ${Delta_Presion_Teorico} lpc.
			Presion Diferencial Calculada = ${Delta_Presion_Calculado.toFixed(1)} lpc.
			Presion Diferencial Calculada > Presion Diferencial Teórica.
			
			El revestidor NO PUEDE ASENTARSE a ${Prof_Rev_Int} pies por riesgo de pega diferencial.
			
			Para evitar este riesgo, la máxima densidad de lodo permitida en este hoyo es ${Densidad_Zap_Int_Correg} lpg.
			
			Para dicha densidad de lodo, la nueva Profundidad de Asentamiento es: ${Prof_Rev_Int_Correg.toFixed(0)} pies.
			
			IMPORTANTE: Se debe agregar una sarta de revestimiento adicional para cubrir el intervalo desnudo resultante de asentar este revestidor más arriba de lo diseñado.
			
			Elija la Profundidad de Asentamiento de la sarta de revestimiento adicional, la cual puede estar comprendida entre ${Prof_Rev_Int} pies y ${(auto3/factorY).toFixed(0)} pies, siendo esta última la máxima profundidad permisible.`;
			
			document.getElementById("resultadoI").innerText = x;
		}
	}
	else
	{
		alert("Todos los datos son necesarios para realizar el análisis. Por favor no deje ningún campo vacío.");
	}
}

export { AnalisisIntermedio };