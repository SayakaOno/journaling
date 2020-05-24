import React from 'react';
import { Modal } from 'antd';

const Add = props => {
  return (
    <div>
      <div>
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={props.onClick}
          onCancel={props.onClick}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default Add;
