import React, { useEffect, useState } from "react";
import { Row, Col, DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { chartColor, barOptionConfig } from "./config";
import moment from "moment";
const ChartMiddle = () => {
  useEffect(() => {}, []);

  const [option, setOption] = useState({
    title: {
      text: 'Top 10 Platform',
     
    },
    grid: {
      top: "40px",
      left: "40px",
      right: "30px",
      bottom: "24px",
    },
    color: chartColor,
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  });
  const [optionBottom,setOptionBottom] = useState(
    {
      title: {
        text: 'Top 10 Seller'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        containLabel: true
      },
    
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    })

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf(); // 毫秒
    console.log(da);
  };

  return (
    <Row className="middle">
       <Col span={24} className="contentMiddle">
      <div className="content-from">
        <span>历史日期选择 :</span>
        <DatePicker
          size={"Small"}
          style={{ margin: "0 8px", width: "200px" }}
          onChange={onChange}
        />
      </div>
      <div className="flex">
        <div  className="flex-item-1 viewFlow">
          <EchartView option={option} />
        </div>

       
      </div>
    </Col>

    <Col span={24} className="contentMiddle">
      <div className="flex">
        <div  className="flex-item-1 viewFlow">
          <EchartView option={optionBottom} />
        </div>

       
      </div>
    </Col>
    </Row>
   
  );
};

export default ChartMiddle;
