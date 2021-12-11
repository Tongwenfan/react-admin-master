import React, { useEffect, useState } from "react";
import { Row, Col,DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { barOptionConfig } from './config'
import { Select } from 'antd';
import moment  from "moment";
const { Option } = Select;

const ChartFooter = () => {
  useEffect(() => {
  
  }, []);

  const [option,setOption] = useState({
    title: {
      text: '订单来源',
      left: 'center',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
       top: '1%',
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '75%',
        center:['50%','62%'],
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })

  const [optionRight,setOptionRight] = useState(
    {
      title: {
        text: '订单量统计',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
     
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    })



 

  const onChange = (date,dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf() // 毫秒
    console.log(da)
  }

  return (
    <Row>
    <Col span={12}  className="content" >
        <div className="content-from" >
            <span>历史日期选择 :</span>
          <DatePicker size={"Small"}  style={{ margin:'0 8px',width: '200px' }}  onChange={onChange} />
          </div>
          <div className="flex">
          <div className="flex-item-1 view flex-right">
          <EchartView option={optionRight} />
          </div>
          </div>
          </Col>

          <Col span={11}  className="content" style={{ marginLeft:'4.1%' }} >
          <div className="flex-item-1 view">
          <EchartView option={option} />
          </div>
            </Col>
          </Row>
  );
  }

export default  ChartFooter
