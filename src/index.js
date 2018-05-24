import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import DatePicker from './DatePicker';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="" />
    <h2>This is a sample graph range-picker {'\u2728'}</h2>
    <DatePicker />
  
  </div>
);

render(<App />, document.getElementById('root'));
