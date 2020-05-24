import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Layout, Row, Col, Button, DatePicker } from 'antd';
import UploadModal from './UploadModal';
import View from './View';
import Add from './Add';
import './App.css';

const MODE = ['View', 'Add'];

const App = () => {
  const { Content } = Layout;
  const [mode, setMode] = useState(MODE[0]);
  const [date, setDate] = useState('');
  const [data, setData] = useState({});
  const onSetMode = () => setMode(mode === MODE[0] ? MODE[1] : MODE[0]);
  useEffect(() => {
    let date = new Date();
    let month = date.getMonth() + 1;
    month = month.toString().length === 1 ? '0' + month : month;
    let initialDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
    setDate(initialDate);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, fontSize: 24 }}>Journaling</h1>
        <Row style={{ marginBottom: 30 }}>
          <DatePicker
            value={moment(date)}
            onChange={(date, dateString) => setDate(dateString)}
            style={{ marginRight: 20 }}
          />
          <Button type="primary" size={10} onClick={onSetMode}>
            + Anaswer
          </Button>
        </Row>
        <View data={data[`${date}`]} />
        {mode === MODE[1] && <Add onClick={onSetMode} />}
      </Content>
      <UploadModal setData={setData} />
    </Layout>
  );
};

export default App;
