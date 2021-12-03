import React, {Component} from 'react';
import PrivateRoute from './components/PrivateRoute'
import {Route,Switch} from 'react-router-dom'
import Login from './routes/Login/index'
// import Login from './routes/Login2/index'
import Index from './routes/Index/index'
import './App.css'
import './assets/font/iconfont.css'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/' component={Index}/>
      </Switch>
    )
  }
}

export default App;

// 英语项目
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import './App.less'
import { StarTwoTone, CheckCircleOutlined } from '@ant-design/icons'
const MyCard = ({ title = '2222' }) => {
  const [data, setData] = useState([])

  const setPushData = () => {
    data.push({
      isEdit: true,
      value: '',
      isColor: false,
    })
    setData([...data])
  }
  const del = index => {
    data.splice(index, 1)
    setData([...data])
  }
  const changeInput = (e, index) => {
    data[index].value = e.target.value
    setData([...data])
  }
  const save = index => {
    data[index].isEdit = false
    setData([...data])
  }

  const setColor = index => {
    data[index].isColor = true
    setData([...data])
  }
  const getView = (item, index) => {
    if (item.isEdit) {
      return (
        <div className="item-div-input-content  isEdit" key={index}>
          <Input
            placeholder="Borderless"
            maxLength={20}
            bordered={false}
            width={20}
            onChange={e => {
              changeInput(e, index)
            }}
          />

          <CheckCircleOutlined
            onClick={() => {
              del(index)
            }}
          />
          <CheckCircleOutlined
            onClick={() => {
              save(index)
            }}
          />
          <CheckCircleOutlined
            onClick={() => {
              setColor(index)
            }}
          />
        </div>
      )
    } else {
      return (
        <div
          className="item-div-input-content isNotEdit"
          style={item.isColor && { color: '#1890ff' }}
          key={index}
        >
          {item.value}
        </div>
      )
    }
  }
  return (
    <>
      <Card
        title={title}
        type="inner"
        extra={
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#" alt="">
            More
          </a>
        }
        style={{ width: '400px' }}
      >
        <Row gutter={20} className="card-content">
          <Col span={24} className="item">
            <label>xx:</label>
            <div className="item-div clearfix">
              {data.map((item, index) => getView(item, index))}
            </div>
            <StarTwoTone onClick={setPushData} />
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default MyCard
