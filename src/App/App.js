import React from 'react';
import './App.css';
import { DataInput } from '../DataInput';
import { DensityCurves } from '../DensityCurves';

function App() {
  return (
    <React.Fragment>
      <DataInput />
      <DensityCurves />
    </React.Fragment>
  );
}

export default App;
