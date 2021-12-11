import React from "react";
import {Form, Modal, Button} from "antd";
import { CloseCircleOutlined,CheckCircleOutlined } from '@ant-design/icons';
import "./index.less"
const CustomerModal = (props) => {
  const {title='',visible=false, handleOk, handleCancel, form } = props;
  return <Modal
    title={title}
    width="800px"
    wrapClassName="customer-modal no-border-modal"
    visible={visible}
    afterClose={() => form?.resetFields()}
    onOk={() => {
      handleOk && handleOk()
    }}
    onCancel={()=> handleCancel()}
    footer={[
      <Button key="cancel" icon={<CloseCircleOutlined />}>取消</Button>,
      <Button type="primary" key="confirm" icon={<CheckCircleOutlined />}>确认</Button>
    ]}
  >
    {props.children}
  </Modal>
}

export default CustomerModal;
