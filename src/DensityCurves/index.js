import React from 'react';
import './DensityCurves.css';
import arrow_down from './images/caret-down.svg';
// import { canvasInicial } from '../DrawingFunctions';


function DensityCurves(props) {
    
    // Función para cambiar el estado del display de trazado automático
    const mostrarOcultarAuto = () => {
        if(props.displayAuto === 'none') {
            props.setDisplayAuto('block');
        } else if(props.displayAuto === 'block') {
            props.setDisplayAuto('none');
        }
    }
    const stylesAuto = {
        display: props.displayAuto
    }

    
     // Función para cambiar el estado del display de trazado automático
    const mostrarOcultarManual = () => {
        if(props.displayManual === 'none') {
            props.setDisplayManual('block');
        } else if(props.displayManual === 'block') {
            props.setDisplayManual('none');
        }
    }
    const stylesManual = {
        display: props.displayManual
    }

    // Función para establecer dimensiones del canvas. La llamaré cuando cargue el section que contiene a todos los elementos
    const setSize = () => {
        if(props.tamano_ventana < 600) {
            props.setCanvasSizeX(280);
            props.setCanvasSizeY(280);
        }
        else if(props.tamano_ventana >= 600 && props.tamano_ventana < 1024) {
            props.setCanvasSizeX(550);
            props.setCanvasSizeY(550);
        }
        else if(props.tamano_ventana >= 1024) {
            props.setCanvasSizeX(720);
            props.setCanvasSizeY(720);
        }
    }

    return(
        <section className="grafica" onLoad={setSize}>
            <div className="opciones_graf">
                <h2>{props.title}</h2>
                <p className="titulo-opciones-grafica">{props.subtitle1}</p>
                <p><label htmlFor="max_den_graf">{props.input1text}</label><br/><input type="number" id="max_den_graf" /></p>
                <p><label htmlFor="max_prof_graf">{props.input2text}</label><br/><input type="number" id="max_prof_graf" /></p>
                <p className="botones-curvas"><button id = "botoncito">{props.drawCurvesButtonText}</button> <button id = "borrar_curvas">{props.eraseCurvesButtonText}</button></p>	
                <canvas width={props.canvasSizeX} height={props.canvasSizeY} id="Prof_vs_Dens"></canvas>
            </div>
            
            <div className="trazado-lineas">
                <h2>{props.title2}</h2>
                <p>{props.subtitle2}</p>
                <p><button id="mostrar_ocultar_auto" onClick={mostrarOcultarAuto}><img src={arrow_down} alt='arrow-down' /></button></p>
                <div className = "datos_auto" id="datos_auto" style={stylesAuto}>
                    <p><label htmlFor="PT">{props.input3text}</label><br/><input id="PT" type="number" /></p>
                    <p><label htmlFor="DLaPT">{props.input4text}</label><br/><input id="DLaPT" type="number" /></p>
                    <p className="botones-lineas"><button id = "lineas_auto">{props.drawLinesButtonText}</button> <button id = "deshacer">{props.eraseLinesButtonText}</button></p>
                    <div className = "tabla_rev">
                        <h2>{props.title3}</h2>
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
                <p id = "instruccion2">{props.subtitle3}</p>
                <p><button id="mostrar_ocultar_manual" onClick={mostrarOcultarManual}><img src={arrow_down} alt='arrow-down' /></button></p>
                <div className="div_tablas" id="div_tablas" style={stylesManual}>
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
                    <p><button id = "deshacer2">{props.eraseLinesButtonText}</button></p>
                </div>
            </div>
		</section>
    );
}


export { DensityCurves };