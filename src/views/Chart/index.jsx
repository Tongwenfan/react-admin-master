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

 

  return (
    <div className="chart-wrap">
      <EchartTop />
        <EchartMiddle />
        <EchartFooter />
    </div>
  );
};

export default  Loading(Chart);
