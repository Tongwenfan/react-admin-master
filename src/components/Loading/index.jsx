import React from "react";
import { Spin } from 'antd';
import { loadingPublisher } from '@/utils/subscribe'
import './index.less'

function WithSpinComponent(Component) {
  // loading 组件包含根据请求自动loading
  // 多次请求也会以最后此请求完为准触发
  // 后续添加可配置项---
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        globalLoading: false,
        subIndex: 0, // 当前组件的函数
      };
    }

    componentDidMount() {
      // 增加订阅loading状态更新
      loadingPublisher.subscribe((loadingTag,index) => {
        if (this.state.globalLoading !== !!loadingTag) {
          this.setState({ globalLoading: !!loadingTag,subIndex:index});
        }
      });
    }

    componentWillUnmount() {
      // 取消异步操作，销毁组件后会删除当前位置的函数
      loadingPublisher.del(this.state.subIndex)
      this.setState = () => false
    }
    render() {
      const { globalLoading } = this.state
      return <Spin spinning={globalLoading}   delay={300} wrapperClassName="cbc-wrapper-spin"
      style={{
        zIndex: 2500
      }} >
        <Component  {...this.props} />
      </Spin>
    }
  };
}

export default WithSpinComponent
