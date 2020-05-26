import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const View = props => {
  return props.data ? (
    <Table dataSource={props.data} style={{ marginBottom: 20 }}>
      <Column title="Question" dataIndex="question" key="question" />
      <Column title="Answer" dataIndex="answer" key="answer" />
      <Column title="Words" dataIndex="words" key="words" />
      <Column title="Time" dataIndex="time" key="time" />
    </Table>
  ) : null;
};

export default View;
