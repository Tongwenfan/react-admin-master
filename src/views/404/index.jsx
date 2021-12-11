import React, { } from 'react'
import { withRouter } from 'react-router-dom'
import { Result, Button, Input, Row, Col, Select, Table, Cascader, Spin } from "antd"

function NotFind(props) {

  function jump() {
   props.history.push('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={jump}>Back Home</Button>}
    />
  )
}

export default withRouter(NotFind)
