import React from 'react';
import './DensityCurves.css';
import { ancho_canvas, alto_canvas, mostrarOcultarAuto, mostrarOcultarManual } from './features';
import arrow_down from './images/caret-down.svg';
// import { canvasInicial } from '../DrawingFunctions';
let datos_auto = document.getElementById("datos_auto");
datos_auto.style.display = "none";

let div_tablas = document.getElementById("div_tablas");
div_tablas.style.display = "none";

function DensityCurves() {
    
    return(
        <section className="grafica">
            <div className="opciones_graf">
                <h2>TRAZAR CURVAS DE DENSIDAD</h2>
                <p className="titulo-opciones-grafica">Opciones de ejes del gráfico:</p>
                <p><label htmlFor="max_den_graf">Máximo valor del eje X (lpg.):</label><br/><input type="number" id="max_den_graf" /></p>
                <p><label htmlFor="max_prof_graf">Máximo valor del eje Y (pies):</label><br/><input type="number" id="max_prof_graf" /></p>
                <p className="botones-curvas"><button id = "botoncito">Trazar Curvas</button> <button id = "borrar_curvas">Borrar Curvas</button></p>	
                <canvas width={ancho_canvas} height={alto_canvas} id="Prof_vs_Dens"></canvas>
            </div>
            
            <div className="trazado-lineas">
                <h2>TRAZAR LÍNEAS DE DISEÑO</h2>
                <p>TRAZADO AUTOMÁTICO</p>
                <p><button id="mostrar_ocultar_auto" onClick={mostrarOcultarAuto}><img src={arrow_down} alt='arrow-down' /></button></p>
                <div className = "datos_auto" id="datos_auto">
                    <p><label htmlFor="PT">Profundidad Total (pies):</label><br/><input id="PT" type="number" /></p>
                    <p><label htmlFor="DLaPT">Dendidad de Lodo a P.T. (lpg.):</label><br/><input id="DLaPT" type="number" /></p>
                    <p className="botones-lineas"><button id = "lineas_auto">Trazar Líneas</button> <button id = "deshacer">Borrar Líneas</button></p>
                    <div className = "tabla_rev">
                        <h2>TABLA DE REVESTIDORES</h2>
                        <div>
                            <table id = "tabla_rev">
                                <tbody>
                                    <tr className="tabla_rev_fila1">
                                        <td>Profundidad (pies)</td>
                                        <td>D.P.<br/>(lpg.)</td>
                                        <td>D.L.<br/>(lpg.)</td>
                                        <td>D.A.<br/>(lpg.)</td>
                                        <td>D.F.<br/>(lpg.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="container-aviso-num-rev">
                            <span id="aviso-num-rev"></span>
                        </div>
                    </div>
                </div>
                <p id = "instruccion2">TRAZADO MANUAL</p>
                <p><button id="mostrar_ocultar_manual" onClick={mostrarOcultarManual}><img src={arrow_down} alt='arrow-down' /></button></p>
                <div className="div_tablas" id="div_tablas">
                    <table className = "tabla_lineas_manuales">
                        <tbody>
                            <tr>
                                <td colSpan="2">DESDE</td>
                                
                                <td colSpan="2">HASTA</td>

                                <td></td>
                            </tr>
                            <tr>
                                <td>X<sub>1</sub></td>
                                <td>Y<sub>1</sub></td>
                                <td>X<sub>2</sub></td>
                                <td>Y<sub>2</sub></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x1" type="number" /></td>
                                <td><input className="coord" id="y1" type="number" /></td>
                                <td><input className="coord" id="x2" type="number" /></td>
                                <td><input className="coord" id="y2" type="number" /></td>
                                <td><button id = "botoncito2">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x3" type="number" /></td>
                                <td><input className="coord" id="y3" type="number" /></td>
                                <td><input className="coord" id="x4" type="number" /></td>
                                <td><input className="coord" id="y4" type="number" /></td>
                                <td><button id = "botoncito3">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x5" type="number" /></td>
                                <td><input className="coord" id="y5" type="number" /></td>
                                <td><input className="coord" id="x6" type="number" /></td>
                                <td><input className="coord" id="y6" type="number" /></td>
                                <td><button id = "botoncito4">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x7" type="number" /></td>
                                <td><input className="coord" id="y7" type="number" /></td>
                                <td><input className="coord" id="x8" type="number" /></td>
                                <td><input className="coord" id="y8" type="number" /></td>
                                <td><button id = "botoncito5">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x9" type="number" /></td>
                                <td><input className="coord" id="y9" type="number" /></td>
                                <td><input className="coord" id="x10" type="number" /></td>
                                <td><input className="coord" id="y10" type="number" /></td>
                                <td><button id = "botoncito6">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x11" type="number" /></td>
                                <td><input className="coord" id="y11" type="number" /></td>
                                <td><input className="coord" id="x12" type="number" /></td>
                                <td><input className="coord" id="y12" type="number" /></td>
                                <td><button id = "botoncito7">Trazar Línea</button></td>
                            </tr>
                            <tr>
                                <td><input className="coord" id="x13" type="number" /></td>
                                <td><input className="coord" id="y13" type="number" /></td>
                                <td><input className="coord" id="x14" type="number" /></td>
                                <td><input className="coord" id="y14" type="number" /></td>
                                <td><button id = "botoncito8">Trazar Línea</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <p><button id = "deshacer2">Borrar Líneas</button></p>
                </div>
            </div>
		</section>
    );
}


export { DensityCurves, datos_auto, div_tablas };