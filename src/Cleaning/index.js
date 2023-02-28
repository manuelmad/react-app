import React from "react";
import './Cleaning.css';
import { cleanFields } from "./features";

function Cleaning() {
    return(
        <section className="seccion_limpiar_campos">
            <p>
                <button id="boton_limpiar_campos" onClick={cleanFields}>Limpiar todos los campos</button>
            </p>
        </section>
    );
}
export { Cleaning };