import React, { useState, useEffect } from 'react';
import { Button, Upload, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';

const UploadModal = () => {
  const [uploadFile, setUploadFile] = useState(true);

  const props = {
    name: 'file',
    action: 'http://localhost:8000/upload',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        setTimeout(() => {
          setUploadFile(false);
        }, 5000);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <Modal
      className="upload-modal"
      title="Upload"
      visible={uploadFile}
      cancelText="Close"
      onCancel={() => setUploadFile(false)}
    >
      <p>Please upload your file to add new answers to your records.</p>
      <div style={{ height: 80 }}>
        <Upload {...props}>
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </div>
      <p>
        If you are new here, please close the modal and click "Answer" to start.
      </p>
    </Modal>
  );
};

export default UploadModal;
