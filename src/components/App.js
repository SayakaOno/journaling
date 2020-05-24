import React from 'react';
import { DatePicker } from 'antd';
import View from './View';
import './App.css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const App = () => {
  return (
    <div>
      <DatePicker onChange={onChange} />
      <View />
    </div>
  );
};

export default App;
