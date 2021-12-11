import React, { useEffect, useState, useRef } from "react";
import { Row, Col,DatePicker } from "antd";
import "./index.less";
import SectionTitle from "@/components/SectionTitle";
import EchartView from "./EchartView";
import { chartColor,barOptionConfig } from './config'
import moment  from "moment";
import Loading from '../../components/Loading/index'
import EchartTop from './components/top'
import EchartFooter from './components/footer'
import EchartMiddle from './components/middle'
const Chart = () => {
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
    <div className="chart-wrap">
      <EchartTop />
        <EchartMiddle />
        <EchartFooter />
    </div>
  );
};

export default  Loading(Chart);
