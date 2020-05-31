import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { Button } from 'antd';
import { AudioOutlined, BorderOutlined } from '@ant-design/icons';

const Record = props => {
  const [recording, setRecording] = useState(false);
  const [audioData, setAudioData] = useState('');

  const startRecording = () => {
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onData = recordedBlob => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = recordedBlob => {
    console.log('recordedBlob is: ', recordedBlob);
    setAudioData(recordedBlob.blobURL);
  };

  return (
    <>
      <div className="react-mic">
        <ReactMic
          visualSetting={false}
          record={recording}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
        />
      </div>
      <Button
        type="primary"
        shape="circle"
        onClick={recording ? stopRecording : startRecording}
        icon={recording ? <BorderOutlined /> : <AudioOutlined />}
      />
    </>
  );
};

export default Record;
