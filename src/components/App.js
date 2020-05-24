import React, { useState } from 'react';
import { DatePicker, Button } from 'antd';
import View from './View';
import Add from './Add';
import './App.css';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const MODE = ['View', 'Add'];

const App = () => {
  const [mode, setMode] = useState(MODE[0]);
  const onSetMode = () => setMode(mode === MODE[0] ? MODE[1] : MODE[0]);

  return (
    <div>
      <DatePicker onChange={onChange} />
      <Button type="primary" size={10} onClick={onSetMode}>
        + Create
      </Button>
      <View />
      {mode === MODE[1] && <Add onClick={onSetMode} />}
    </div>
  );
};

export default App;
