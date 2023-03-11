/******** AJUSTE DE LA PROFUNIDAD REVESTIDOR SUPERFICIAL *******/

const AnalisisSuperficial = (a, b, c, d) => {
	let Prof_Rev_Sup = Number(a);
    console.log(Prof_Rev_Sup);
	let Densidad_Frac_Equiv_Sup = Number(b);
    console.log(Densidad_Frac_Equiv_Sup);

	let Prof_Prox_Rev = Number(c);
    console.log(Prof_Prox_Rev);
	let Den_Prox_Rev = Number(d);
    console.log(Den_Prox_Rev);

	let Densidad_Equiv_Fluido = Den_Prox_Rev + (Prof_Prox_Rev / Prof_Rev_Sup) * 0.5;
	console.log("La densidad eq. del fluido es: " + Densidad_Equiv_Fluido);

	if(Prof_Prox_Rev !== "" && Den_Prox_Rev !== "" && Prof_Rev_Sup !== "" && Densidad_Frac_Equiv_Sup !== "")
	{
		if(Densidad_Equiv_Fluido < Densidad_Frac_Equiv_Sup)
		{
			let w = `Densidad Equivalente de Fractura = ${Densidad_Frac_Equiv_Sup} lpg.
			Densidad Equivalente del Lodo luego del influjo = ${Densidad_Equiv_Fluido.toFixed(1)} lpg.
			Densidad Equivalente del Lodo < Densidad Equivalente de Fractura.
			
			El revestidor superficial PUEDE ASENTARSE a ${Prof_Rev_Sup} pies sin riesgo de falla por arremetida.`;
	
			document.getElementById("resultadoS").innerText = w;
		}
		else
		{
			let w = `Densidad Equivalente de Fractura = ${Densidad_Frac_Equiv_Sup} lpg.
			Densidad Equivalente del Lodo luego del influjo = ${Number(Densidad_Equiv_Fluido.toFixed(1))} lpg.
			Densidad Equivalente del Lodo > Densidad Equivalente de Fractura.
			
			El revestidor superficial NO PUEDE ASENTARSE a ${Prof_Rev_Sup} pies por riesgo de falla por arremetida. Introduzca una profundidad de asentamiento mayor y su correspondiente Densidad de Fractura Equivalente.`;
			
			document.getElementById("resultadoS").innerText = w;
		}
	}
	else
	{
		alert("Todos los datos son necesarios para realizar el análisis. Por favor no deje ningún campo vacío.");
	}
}

export { AnalisisSuperficial };