import React from 'react';
import { Table } from 'antd';
const { Column } = Table;

const data = [
  {
    key: '1',
    question: 'question1',
    answer: 'answer1'
  },
  {
    key: '2',
    question: 'question2',
    answer: 'answer2'
  },
  {
    key: '3',
    question: 'question3',
    answer: 'answer3'
  }
];

const View = () => {
  return (
    <div>
      <Table dataSource={data}>
        <Column title="Question" dataIndex="question" key="question" />
        <Column title="Answer" dataIndex="answer" key="answer" />
      </Table>
    </div>
  );
};

export default View;
