import React, { useState, useRef, useEffect,useCallback} from 'react'
import * as echarts from "echarts";
import './index.less'

const EchartView = ({ option }) => {
    const chartRef = useRef(null) 
    const [echartsInstance, setEchartsInstance] = useState(null) 
    const memoHeightWrapper = useCallback(() => {
      echartsInstance.resize();
  })
   
    useEffect(() => {
        if (chartRef.current) {
            setEchartsInstance(echarts.init(chartRef.current))  
        }
    }, [])

    useEffect(()=>{
      return () => {
        echartsInstance && echartsInstance.dispose()
        window.removeEventListener('resize', memoHeightWrapper);
      }
    },[])

    //监听依赖变化，并根据需要更新图表数据
    useEffect(() => {
        echartsInstance?.setOption(option)
    }, [echartsInstance, option])

    useEffect(() => {
    
      if(echartsInstance !== null) {
        window.addEventListener("resize", memoHeightWrapper);
      }
     
  }, [echartsInstance])

    return (
        <div  ref={chartRef}  className='chartView' />
    )
}

export default EchartView