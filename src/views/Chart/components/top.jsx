import React, { useEffect, useState } from "react";
import { Row, Col,DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { barOptionConfig } from './config'
import { Select } from 'antd';
import moment  from "moment";
const { Option } = Select;
let  pollTimer = null
const ChartTop = () => {
  useEffect(() => {
    pollingFunction(getEchartData,Number(loopTime))
   
  }, []);

  /**
 * @Description: 轮询执行方法
 * @param {func} function 需要轮询的方法
 * @param {time} number 轮询间隔,默认1s
 * @param {endTime} number 可轮询时间, 为空时一直轮询
 * @param {immedaite} boolean 第一次是否立即执行
 * 
 */
const pollingFunction = (func, time = 1000, endTime,immediate = false) => {
  immediate && func(); //是否立即执行一次，由实际决定
  const startTime = new Date().getTime();
     pollTimer = setInterval(() => {
    const nowTime = new Date().getTime();
    if (endTime && nowTime - startTime >= endTime) {
      pollTimer && clearInterval(pollTimer);
    }
    func();
  }, time);
  return pollTimer;
};


  const [option,setOption] = useState({
    ...barOptionConfig
  })

  const [optionRight,setOptionRight] = useState(
{
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  title: {
    text: 'Seller Top10 排行',
    left: 'center',
  },
  legend: {
    top: '8%',
    left: 'center',
  },
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
})
const [loopTime,setLoopTime] = useState('10000')

const  getEchartData = () => {
  console.log('我在测试')
  option.series[0].data.map(item => item.value = item.value +1000)
  setOption({...option})
}

  const onLoopChange =  (e) => {
    console.log(e)
    setLoopTime(e)
    clearInterval(pollTimer)
    // if(e ==='10000') {
    //    pollingFunction(getEchartData,Number(e))
    // }
    // else
    // {
    //   pollingFunction(getEchartData2,Number(e))
    // }
   
  }

  const onChange = (date,dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf() // 毫秒
    console.log(da)
  }

  return (
    <Row>
    <Col span={24}  className="content" >
        <div className="content-from" >
            <span>历史日期选择 :</span>
          <DatePicker size={"Small"}  style={{ margin:'0 8px',width: '200px' }}  onChange={onChange} />

          <span style={{ marginLeft:'12px' }}>定时任务 : </span>
          <Select  value={loopTime} style={{ width: 200 }}  onChange={onLoopChange}>
            <Option value="300000">5min</Option>
            <Option value="10000">10s</Option>
            <Option value="5000">5s</Option>
            <Option value="600000">10min</Option>
          </Select>
          </div>

          
          <div className="flex">
          <div className="flex-item-6 view flex-right">
          <EchartView option={optionRight} />
          </div>


          <div className="flex-item-4 view">
          <EchartView option={option} />
          </div>
          </div>
          </Col>
          </Row>
  );
  }

export default  ChartTop
