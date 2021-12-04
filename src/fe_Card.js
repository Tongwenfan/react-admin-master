import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import './App.less'
import {
  StarTwoTone,
  CheckCircleOutlined,
  UpSquareOutlined,
} from '@ant-design/icons'
const MyCard = ({ title = '2222' }) => {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([
    // isEdit: true,
    // value: '',
    // isColor: false,
    // isCheckAnswer:false
  ])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  // 添加词块
  const setPushData = () => {
    if (data.length > 7) return
    data.push({
      isEdit: true,
      value: '',
      isColor: false,
    })
    setData([...data])
  }
  // 添加干扰
  const setDisturbData = () => {
    if (data4.length > 7) return
    data4.push({
      isEdit: true,
      value: '',
      isColor: false,
    })
    setData4([...data4])
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

  const setIsEdit = index => {
    data[index].isEdit = true
    setData([...data])
  }
  const setIsEdit2 = index => {
    data4[index].isEdit = true
    setData4([...data4])
  }

  const setColor = index => {
    data[index].isColor = true
    setData([...data])
  }

  const getIssueViewCopy = () => {
    const _data = data.filter(item => !item.isEdit)
    _data.map(item => (item.isCheckAnswer = false))
    setData2([..._data])
  }

  const getAnswer = index => {
    data2[index].isCheckAnswer = !data2[index].isCheckAnswer
    const _data = data2.filter(item => item.isCheckAnswer)
    setData2([...data2])
    setData3([..._data])
  }
  const getView = (item, index) => {
    let _isColor = item.isColor && 'isColor'
    if (item.isEdit) {
      return (
        <div className="item-div-input-content  isEdit" key={index}>
          <Input
            placeholder="Borderless"
            maxLength={7}
            value={item.value}
            bordered={false}
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
          className={`item-div-input-content isNotEdit ${_isColor}`}
          key={index}
          onClick={() => {
            setIsEdit(index)
          }}
        >
          {item.value}
        </div>
      )
    }
  }

  const getIssueView = (item, index) => {
    let _isColor = item.isColor && 'isColor'
    let _isCheckAnswer = item.isCheckAnswer && 'isCheckAnswer'
    return (
      <div
        className={`item-div-input-content isNotEdit ${_isColor}  ${_isCheckAnswer}`}
        key={index}
        onClick={() => {
          getAnswer(index)
        }}
      >
        {item.value}
      </div>
    )
  }

  const getDisturbView = (item, index) => {
    if (item.isEdit) {
      return (
        <div className="item-div-input-content  isEdit" key={index}>
          <Input
            placeholder="Borderless"
            maxLength={7}
            bordered={false}
            value={item.value}
            onChange={e => {
              data4[index].value = e.target.value
              setData4([...data4])
            }}
          />

          <CheckCircleOutlined
            onClick={() => {
              data4.splice(index, 1)
              setData4([...data4])
            }}
          />
          <CheckCircleOutlined
            onClick={() => {
              data4[index].isEdit = false
              setData4([...data4])
            }}
          />
        </div>
      )
    } else {
      return (
        <div
          className={`item-div-input-content isNotEdit`}
          onClick={() => {
            setIsEdit2(index)
          }}
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
        className="fe-card"
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

          <Col span={24} className="item">
            <label>xx:</label>
            <div className="item-div clearfix">
              {data2.map((item, index) => getIssueView(item, index))}
            </div>
            <UpSquareOutlined onClick={getIssueViewCopy} />
          </Col>

          <Col span={24} className="item">
            <label>xx:</label>
            <div className="item-div clearfix">
              {data3.map((item, index) => getIssueView(item, index))}
            </div>
            <span className="br"></span>
          </Col>

          <Col span={24} className="item">
            <label>xx:</label>
            <div className="item-div clearfix">
              {data4.map((item, index) => getDisturbView(item, index))}
            </div>
            <StarTwoTone onClick={setDisturbData} />
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default MyCard
