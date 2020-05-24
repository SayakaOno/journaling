import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const View = props => {
  return props.data ? (
    <div>
      <Table dataSource={props.data}>
        <Column title="Question" dataIndex="question" key="question" />
        <Column title="Answer" dataIndex="answer" key="answer" />
        <Column title="Words" dataIndex="words" key="words" />
        <Column title="Time" dataIndex="time" key="time" />
      </Table>
    </div>
  ) : null;
};

export default View;
