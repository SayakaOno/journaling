import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';
import { questions } from '../data';
const { Option } = Select;
const { TextArea } = Input;

const Add = props => {
  const [question, setQuestion] = useState('question1');
  const [answer, setAnswer] = useState('');
  return (
    <div>
      <Modal
        title="Answer a question"
        visible={true}
        width="800px"
        okText="Save"
        onOk={props.onClick}
        onCancel={props.onClick}
      >
        <Select
          placeholder="Select a question"
          style={{ width: '100%', marginBottom: 20 }}
          onChange={setQuestion}
        >
          {questions.map((question, index) => (
            <Option value={++index}>{question}</Option>
          ))}
        </Select>
        <TextArea rows={10} onChange={setAnswer} />
      </Modal>
    </div>
  );
};

export default Add;
