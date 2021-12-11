import React, { useEffect, useState } from "react";
import { Row, Col, DatePicker } from "antd";
import "../index.less";
import EchartView from "../EchartView";
import { chartColor, barOptionConfig } from "../config";
import moment from "moment";
const ChartMiddle = () => {
  useEffect(() => {}, []);

  const [option, setOption] = useState({
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    let da = moment(date).valueOf(); // 毫秒
    console.log(da);
  };

  return (
    <Row>
       <Col span={24} className="content">
      <div className="content-from">
        <span>历史日期选择 :</span>
        <DatePicker
          size={"Small"}
          style={{ margin: "0 8px", width: "200px" }}
          onChange={onChange}
        />
      </div>
      <div className="flex">
        <div  className="flex-item-1 view">
          <EchartView option={option} />
        </div>

       
      </div>
    </Col>
    </Row>
   
  );
};

export default ChartMiddle;
