import React from 'react';
import moment from 'moment';
import { Table } from 'antd';
import Record from '../components/Record';

const getColumns = (date, setSelectedRecord, setAudioData) => {
  let columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question'
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'answer'
    },
    {
      title: 'Words',
      dataIndex: 'words',
      key: 'words'
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: 'Audio',
      dataIndex: 'audio',
      key: 'audio',
      render: audio => {
        return audio ? <audio controls src={audio} type="audio/ogg" /> : null;
      }
    }
  ];
  if (date === moment().format('YYYY-MM-DD')) {
    columns.push({
      title: 'Record',
      render: data => (
        <Record
          dataKey={data.key}
          setSelectedRecord={setSelectedRecord}
          setAudioData={setAudioData}
        />
      )
    });
  }
  return columns;
};

const View = props => {
  return props.data ? (
    <Table
      dataSource={props.data}
      columns={getColumns(
        props.date,
        props.setSelectedRecord,
        props.setAudioData
      )}
      style={{ marginBottom: 20 }}
    />
  ) : null;
};

export default View;
