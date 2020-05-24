import React, { useState } from 'react';
import { Modal, Select, Input } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

const Add = props => {
  const [question, setQuestion] = useState('question1');
  const [answer, setAnswer] = useState('');
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={true}
        onOk={props.onClick}
        onCancel={props.onClick}
      >
        <>
          <Select
            defaultValue={question}
            style={{ width: 120 }}
            onChange={setQuestion}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </>
        <TextArea rows={10} onChange={setAnswer} />
      </Modal>
    </div>
  );
};

export default Add;
