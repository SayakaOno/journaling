import React, { useState } from 'react';
import moment from 'moment';
import { Modal, Select, Input } from 'antd';
import { questions } from '../data';
const { Option } = Select;
const { TextArea } = Input;

const Add = props => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [startTime, setStartTime] = useState(null);

  const onSelect = question => {
    setStartTime(new Date());
    setQuestion(question);
  };

  const onOk = () => {
    let time = moment(new Date() - startTime).format('mm:ss');
    props.onSave(question, answer, time);
  };

  return (
    <div>
      <Modal
        title="Answer a question"
        visible={true}
        width="800px"
        okText="Save"
        onOk={question && answer && onOk}
        onCancel={props.onClick}
      >
        <Select
          placeholder="Select a question"
          style={{ width: '100%', marginBottom: 20 }}
          onChange={onSelect}
        >
          {questions.map((question, index) => (
            <Option key={index} value={question}>
              {question}
            </Option>
          ))}
        </Select>
        <TextArea
          disabled={!question}
          rows={10}
          onChange={e => setAnswer(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Add;
