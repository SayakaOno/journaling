import React from 'react';
import moment from 'moment';
import { Table, Tooltip } from 'antd';
import Record from '../components/Record';

const getColumns = (date, setSelectedRecord, setAudioData, setPlay) => {
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
        return audio
          ? audio.map(data => {
              return (
                <Tooltip
                  key={Object.keys(data)[0]}
                  placement="topLeft"
                  title="play"
                >
                  <div
                    style={{
                      textDecoration: 'underline',
                      color: 'purple',
                      cursor: 'pointer'
                    }}
                    onClick={() =>
                      setPlay({
                        time: Object.keys(data)[0],
                        src: data[`${Object.keys(data)[0]}`]
                      })
                    }
                  >
                    {Object.keys(data)[0].slice(0, 5)}
                  </div>
                </Tooltip>
              );
            })
          : null;
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
        props.setAudioData,
        props.setPlay
      )}
      style={{ marginBottom: 20 }}
    />
  ) : null;
};

export default View;
