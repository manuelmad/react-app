import React from 'react';
import './DataInput.css';
import { cabecera_1, cabecera_2, cabecera_3, cabecera_4, cabecera_5, cabecera_6 } from './features';

function DataInput() {
    return(
        <section className='tabla_de_valores'>
            <div className='margenes'>
                <h2>MÁRGENES DE SEGURIDAD</h2>
                <p><label htmlFor="margen_viaje">Margen de Viaje (lpg.):</label><br /><input id="margen_viaje" type="number" /></p>
                <p><label htmlFor="margen_arremetida">Margen de Arremetida (lpg.):</label><br /><input id="margen_arremetida" type="number" /></p>
            </div>
            <div className="container-botones-filas">
                <h2>TABLAS DE VALORES</h2>
                <p>
                    <button id="agregar_fila" title="Agregar fila">Agregar fila</button> <button id="eliminar_fila" title="Eliminar fila">Eliminar fila</button>
                </p>
            </div>
            <div>
                <table className="datos" id="tabla">
                    <thead className="cabecera_tabla">
                        <tr>
                            <th id="cabecera1">{cabecera_1}<br />(pies)</th>
                            <th id="cabecera2">{cabecera_2}<br />(lpg.)</th>
                            <th id="cabecera3">{cabecera_3}<br />(lpg.)</th>
                            <th className="columna_vacia"></th>
                            <th id="cabecera4">{cabecera_4}<br />(pies)</th>
                            <th id="cabecera5">{cabecera_5}<br />(lpg.)</th>
                            <th id="cabecera6">{cabecera_6}<br />(lpg.)</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <td><input id="prof1" type="number" /></td>
                            <td><input id="pporo1" type="number" /></td>
                            <td><span id="dlodo1"></span></td>
                            <td className="columna_vacia2"></td>
                            <td><input id="prof1a" type="number" /></td>
                            <td><span id="pmargenarrem1"></span></td>
                            <td><input id="pfractura1" type="number" /></td>
                        </tr>
                        <tr>
                            <td><input id="prof2" type="number" /></td>
                            <td><input id="pporo2" type="number" /></td>
                            <td><span id="dlodo2"></span></td>
                            <td></td>
                            <td><input id="prof2a" type="number" /></td>
                            <td><span id="pmargenarrem2"></span></td>
                            <td><input id="pfractura2" type="number" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export { DataInput };