import React from 'react';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Audio = props => {
  return (
    <Card
      style={{
        background: '#f0f2f5',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 0,
        paddingRight: 20,
        boxShadow: '-2px 2px 10px 0px #888888'
      }}
    >
      <CloseOutlined
        style={{
          top: 5,
          right: 5,
          position: 'absolute',
          color: '#8b8c8c',
          fontSize: 16
        }}
        onClick={() => props.setPlay('')}
      />
      <audio controls src={props.src} type="audio/ogg" />
    </Card>
  );
};

export default Audio;
