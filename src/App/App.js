import React from 'react';
import './App.css';
import { DataInput } from '../DataInput';
import { DensityCurves } from '../DensityCurves';
import { DepthsAdjustment } from '../DepthsAdjustment';
import { Cleaning } from '../Cleaning';

function App() {
  // Estado para mostrar/ocultar el div de trazado automático de líneas en DensityCurves
  const [displayAuto, setDisplayAuto] = React.useState('none');

  // Estado para mostrar/ocultar el div de trazado manual de líneas en DensityCurves
  const [displayManual, setDisplayManual] = React.useState('none');

  // Estados para establecer dimensiones del canvas
  const [canvasSizeX, setCanvasSizeX] = React.useState('');
  const [canvasSizeY, setCanvasSizeY] = React.useState('');

  return (
    <React.Fragment>
      <DataInput
        name="SELECCIÓN DE LAS PROFUNDIDADES DE ASENTAMIENTO DE LOS REVESTIDORES"
        title="MÁRGENES DE SEGURIDAD"
        title2="TABLAS DE VALORES"
        input1text="Margen de Viaje (lpg.):"
        input2text="Margen de Arremetida (lpg.):"
        addButtonText="Agregar fila"
        deleteButtonText="Eliminar fila"
      />
      <DensityCurves
        title="TRAZAR CURVAS DE DENSIDAD"
        subtitle1="Opciones de ejes del gráfico:"
        input1text="Máximo valor del eje X (lpg.):"
        input2text="Máximo valor del eje Y (pies):"
        drawCurvesButtonText="Trazar Curvas"
        eraseCurvesButtonText="Borrar Curvas"
        title2="TRAZAR LÍNEAS DE DISEÑO"
        subtitle2="TRAZADO AUTOMÁTICO"
        input3text="Profundidad Total (pies):"
        input4text="Dendidad de Lodo a P.T. (lpg.):"
        drawLinesButtonText="Trazar Líneas"
        eraseLinesButtonText="Borrar Líneas"
        title3="TABLA DE REVESTIDORES"
        subtitle3="TRAZADO MANUAL"
        displayAuto={displayAuto}
        setDisplayAuto={setDisplayAuto}
        displayManual={displayManual}
        setDisplayManual={setDisplayManual}
        tamano_ventana={window.innerWidth}
        canvasSizeX={canvasSizeX}
        setCanvasSizeX={setCanvasSizeX}
        canvasSizeY={canvasSizeY}
        setCanvasSizeY={setCanvasSizeY}
      />
      <DepthsAdjustment
        name="AJUSTE DE LAS PROFUNDIDADES DE ASENTAMIENTO DE LOS REVESTIDORES"
        title="ANÁLISIS DE POSIBLE PEGA DIFERENCIAL"
        title2="ANÁLISIS DE POSIBLE FRACTURA POR ARREMETIDA"
      />
      <Cleaning />
    </React.Fragment>
  );
}

export default App;
