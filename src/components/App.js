import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Layout, Row, Button, DatePicker } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import UploadModal from './UploadModal';
import View from './View';
import Add from './Add';
import './App.css';

const MODE = ['View', 'Add'];

const App = () => {
  const { Content } = Layout;
  const [mode, setMode] = useState(MODE[0]);
  const [today, setToday] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState({});
  const onSetMode = () => setMode(mode === MODE[0] ? MODE[1] : MODE[0]);

  useEffect(() => {
    let today = moment().format('YYYY-MM-DD');
    setToday(today);
    setDate(today);
  }, []);

  const onSave = (question, answer, time) => {
    let key = new Date();
    let words = answer.split(' ').length;
    let newData = { key, question, answer, words, time };
    let todaysData = data[`${today}`] ? data[`${today}`].slice() : [];
    todaysData.push(newData);
    setData({ ...data, [today]: todaysData });
    onSetMode(MODE[0]);
    setDate(today);
  };

  const onDownload = async () => {
    const url = window.URL.createObjectURL(new Blob([JSON.stringify(data)]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'journaling.json'); //or any other extension
    document.body.appendChild(link);
    link.click();
  };

  const disabledDates = date => {
    let availableDates = Object.keys(data);
    return availableDates.length
      ? !availableDates.includes(date.format('YYYY-MM-DD'))
      : date.format('YYYY-MM-DD') !== today;
  };

  const setUpData = data => {
    setData(data);
    let dates = Object.keys(data);
    setDate(dates[dates.length - 1]);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: 50 }}>
        <h1 style={{ marginBottom: 30, fontSize: 24 }}>Journaling</h1>
        <Row style={{ marginBottom: 30 }}>
          <DatePicker
            value={moment(date)}
            onChange={(date, dateString) => setDate(dateString)}
            disabledDate={disabledDates}
            style={{ marginRight: 20 }}
          />
          <Button type="primary" size={10} onClick={onSetMode}>
            + Anaswer
          </Button>
        </Row>
        <View data={data[`${date}`]} date={date} />
        {Object.keys(data).length ? (
          <Button
            icon={<DownloadOutlined />}
            onClick={onDownload}
            style={{ float: 'right' }}
          >
            Download
          </Button>
        ) : null}
        {mode === MODE[1] && <Add onClick={onSetMode} onSave={onSave} />}
      </Content>
      <UploadModal setData={setUpData} />
    </Layout>
  );
};

export default App;
