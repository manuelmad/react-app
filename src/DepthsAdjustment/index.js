import React from "react";
import './DepthsAdjustment.css';
import { AnalisisIntermedio } from './features.js'

function DepthsAdjustment(props) {

    return(
        <section className="calculos">
			<h1 id="titulo-ajuste">{props.name}</h1>
			<div className="ajuste_int">
				<div className="ajuste_int1">
					<h2>{props.title}</h2>
					<p>Profundidad donde la presión cambia de normal a anormal (Densidad de Poro = 9 lpg.) (pies):<br/>
					<input value={props.pna} onChange={event => {props.setPna(event.target.value)}} type="number" id="PNA" /></p>

					<p id="tituloPMP">Profundidad de la formación más propensa a causar pega diferencial del revestidor evaluado (pies):<br/>
					<input value={props.pzp} onChange={event => {props.setPzp(event.target.value)}} type="number" id="Valor_tituloPMP"></input></p>

					<p id="tituloDEMP">Densidad de Poro Equivalente a dicha profundidad (lpg.):<br/>
					<input value={props.dzp} onChange={event => {props.setDzp(event.target.value)}} type="number" id="Valor_tituloDEMP"></input></p>

					<p><strong>REVESTIDOR A EVEALUAR:</strong></p>

					<p>Profundidad de Asentamiento (pies):<br/>
					<input value={props.pri} onChange={event => {props.setPri(event.target.value)}} type="number" id="PRI" /></p>
					
					<p>Densidad de Lodo en Zapata (lpg):<br/>
					<input value={props.dzi} onChange={event => {props.setDzi(event.target.value)}} type="number" id="DZI" /></p>
				
					<p className="boton_ajuste_int"><button id="boton_ajuste_int" onClick={()=>AnalisisIntermedio(props.pna, props.pzp, props.dzp, props.pri, props.dzi)}>Realizar Análisis</button></p>
				</div>
				<div className="ajuste_int2">
					<p><strong>RESULTADO ANÁLISIS PEGA DIFERENCIAL:</strong><span id="resultadoI"></span></p>
				</div>
			</div>
			<div className="ajuste_sup">
				<div className="ajuste_sup1">
					<h2>{props.title2}</h2>
					<p><strong>REVESTIDOR SUPERFICIAL:</strong></p>
					<p>Profundidad de Asentamiento (pies):<br/>
					<input type="number" id="PRS" /></p>
					<p>Densidad de Fractura Equivalente en Zapata (lpg.):<br/>
					<input type="number" id="DFES" /></p>
					<p><strong>PRÓXIMO HOYO:</strong></p>
					<p>Profundidad de Asentamiento del próximo revestidor (pies):<br/>
					<input type="number" id="PProxR" /></p>
					<p>Densidad de Lodo en Zapata del próximo revestidor (lpg):<br/>
					<input type="number" id="DProxR" /></p>
					<p><button id="boton_ajuste_sup">Realizar Análisis</button></p>
				</div>
				<div className="ajuste_sup2">
					<p><strong>RESULTADO ANÁLISIS REVESTIDOR SUPERFICIAL:</strong><span id="resultadoS"></span></p>
				</div>
			</div>
		</section>
    );
}

export { DepthsAdjustment };