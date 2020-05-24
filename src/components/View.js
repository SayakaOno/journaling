import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const data = [
  {
    key: '1',
    question: 'question1',
    answer: 'answer1',
    words: 80,
    time: '02:00'
  },
  {
    key: '2',
    question: 'question2',
    answer: 'answer2',
    words: 80,
    time: '02:00'
  },
  {
    key: '3',
    question: 'question3',
    answer: 'answer3',
    words: 80,
    time: '02:00'
  }
];

const View = () => {
  return (
    <div>
      <Table dataSource={data}>
        <Column title="Question" dataIndex="question" key="question" />
        <Column title="Answer" dataIndex="answer" key="answer" />
        <Column title="Words" dataIndex="words" key="words" />
        <Column title="Time" dataIndex="time" key="time" />
      </Table>
    </div>
  );
};

export default View;
