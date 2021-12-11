import React, { useEffect, useState } from "react";
import { Row, Col,DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { chartColor,barOptionConfig } from '../config'
import moment  from "moment";
const ChartFooter = () => {
  useEffect(() => {
  }, []);

  const _option2  = {
    grid:{
      top:'40px',
      left:'40px',
      right:'30px',
      bottom:'24px'
    },
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
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
  };

  const _option3 = {
    grid:{
      top:'40px',
      left:'40px',
      right:'30px',
      bottom:'24px'
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
  };


  const onChange = (date,dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf() // 毫秒
    console.log(da)
  }

  return (
    <Row>
        <Col span={24} className="flex" >
    <div className="flex-item-4 flex-right footerView viewFlow">
    <EchartView option={_option2} />
    </div>
    <div className="flex-item-6 footerView viewFlow">
    <EchartView option={_option3} />
    </div>
    </Col>
    </Row>
  
  );
  }

export default  ChartFooter
