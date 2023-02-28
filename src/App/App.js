import React from 'react';
import './App.css';
import { DataInput } from '../DataInput';
import { DensityCurves } from '../DensityCurves';
import { DepthsAdjustment } from '../DepthsAdjustment';
import { Cleaning } from '../Cleaning';

function App() {
  return (
    <React.Fragment>
      <DataInput />
      <DensityCurves />
      <DepthsAdjustment />
      <Cleaning />
    </React.Fragment>
  );
}

export default App;
