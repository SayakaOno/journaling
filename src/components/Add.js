import React, { useState } from 'react';
import moment from 'moment';
import { Modal, Radio, Select, Input } from 'antd';
import { questions } from '../data';
const { Option } = Select;
const { TextArea } = Input;

const questionTypes = ['select', 'custom'];

const Add = props => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [questionType, setQuestionType] = useState(questionTypes[0]);

  const onSelect = question => {
    setQuestion(question);
  };

  const onOk = () => {
    let time = moment(new Date() - startTime).format('mm:ss');
    props.onSave(question, answer, time);
  };

  const onChange = e => {
    setQuestionType(e.target.value);
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
        <Radio.Group
          onChange={onChange}
          value={questionType}
          style={{ marginBottom: 20 }}
        >
          <Radio value={questionTypes[0]}>Select a question</Radio>
          <Radio value={questionTypes[1]}>Input a question</Radio>
        </Radio.Group>
        {questionType === questionTypes[0] ? (
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
        ) : (
          <Input
            placeholder="Type a question"
            onChange={e => setQuestion(e.target.value)}
            style={{ marginBottom: 20 }}
          />
        )}
        <TextArea
          disabled={!question}
          rows={10}
          onChange={e => setAnswer(e.target.value)}
          onFocus={() => setStartTime(new Date())}
        />
      </Modal>
    </div>
  );
};

export default Add;
