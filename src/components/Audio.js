import React from 'react';
import { Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Audio = props => {
  return (
    <Card
      style={{
        background: '#f0f2f5',
        position: 'fixed',
        top: 0,
        right: 0,
        padding: 0,
        boxShadow: '-2px 2px 10px 0px #888888',
        zIndex: 1
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
        onClick={() => props.resetPlay()}
      />
      <h2 style={{ position: 'absolute', top: 5, left: 10, zIndex: 1 }}>
        {props.file}
      </h2>
      <audio controls src={props.src} type="audio/ogg" />
    </Card>
  );
};

export default Audio;
