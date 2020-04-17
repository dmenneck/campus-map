import React from 'react';
import { Form, Input, Button, Select, Upload, Rate } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <div>
        Die CampusMap lebt von Open-Source-Software und offenen Daten. Diese
        Offenheit möchten wir beibehalten!
        <div>
          Haben Sie Informationen zu Gebäuden (Einrichtungen, Fotos, ...),
          welche wir nicht in voller Gänze aufgeführt haben?
        </div>
        Schicken Sie uns gerne eine Email und partizipieren mit dem CampusMap
        Projekt!
      </div>

      <Form
        id='contactForm'
        name='basic'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label='Field A'>
          <Input.TextArea placeholder='input placeholder' />
        </Form.Item>

        <Form.Item
          name='select'
          label='Select'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <Select placeholder='Please select a country'>
            <Option value='china'>China</Option>
            <Option value='usa'>U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item label='Dragger'>
          <Form.Item
            name='dragger'
            valuePropName='fileList'
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name='files' action='/upload.do'>
              <p className='ant-upload-drag-icon'>
                <InboxOutlined />
              </p>
              <p className='ant-upload-text'>
                Click or drag file to this area to upload
              </p>
              <p className='ant-upload-hint'>
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item name='rate' label='Rate'>
          <Rate />
        </Form.Item>
      </Form>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </div>
  );
};

export default Contact;
