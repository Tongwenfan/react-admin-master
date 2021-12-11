import React, { useEffect, useState } from "react";
import { Row, Col,DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { chartColor,barOptionConfig } from '../config'
import { Select } from 'antd';
import moment  from "moment";
const { Option } = Select;
const ChartTop = () => {
  useEffect(() => {
  }, []);

  const [option,setOption] = useState({
    grid:{
      top:'40px',
      left:'40px',
      right:'30px',
      bottom:'24px'
    },
    color:chartColor,
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
  })


  const _option4 ={
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  const _option5  = {
      ...barOptionConfig
  };


  const onChange = (date,dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf() // 毫秒
    console.log(da)
  }

  return (
    
    <Col span={24}  className="content" >
        <div className="content-from" >
            <span>历史日期选择 :</span>
          <DatePicker size={"Small"}  style={{ margin:'0 8px',width: '200px' }}  onChange={onChange} />

          <span style={{ marginLeft:'12px' }}>定时任务 : </span>
          <Select defaultValue="lucy" style={{ width: 200 }} >
            <Option value="lucy">1</Option>
          </Select>
          </div>

          
          <div className="flex">
          <div className="flex-item-6 view flex-right">
          <EchartView option={_option4} />
          </div>


          <div className="flex-item-4 view">
          <EchartView option={_option5} />
          </div>
          </div>
          </Col>
  );
  }

export default  ChartTop
