import React, { Component } from "react"
import Layout from '@/components/Layout'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import ViewRouter from "./router"
import { constantRoutes, activeRoutes } from "./router/routes"
import actions from '@/store/actions'
import constants from '@/constants'

import { getQueryObj } from '@/utils'
import './assets/css/app.less'

import api from '@/api/'

const { MenuBoard, Header } = Layout
const { addEnum, setMenus, setFunctions } = actions
const { USER_INFO } = constants

const mapStateToProps = (state) => ({
  collapsed: state.app.collapsed
})

const mapDispatchToProps = (dispatch) => ({
  addEnum: (data) => dispatch(addEnum(data)),
  setMenus: (data) => dispatch(setMenus(data)),
  setFunctions: (data) => dispatch(setFunctions(data)),
})

class App extends Component {

  viewContent = null
  routeList = [] // 路由列表

  constructor(props) {
    super(props)
    this.state = {
      // hasError: false, // 是否发生报错
      opacity: 0, // header透明度
      isOverRoute: true, // 路由加载完成
      routes: [] // 真实路由列表
    }
  }
  
  // 截取子组件错误信息， 显示备用UI
  static getDerivedStateFromError(error) {
    console.log("page error", error)
    console.dir(error)
    return { hasError: true }
  }

  componentDidMount() {
    this.getEasyRouter()
    // if (location.pathname !== '/login') {
    //   // this.getFunctional()
    // } else {
    //   this.login()
    // }
  }

  componentWillUnmount() {
     this.viewContent.removeEventListener('scroll', this.scrollView)
  }

  // // 登录
  // login = async () => {
  //   const querys = getQueryObj()
  //   const res = await api.login(querys.code)
  //   const data = res.Data
  //   localStorage.setItem(USER_INFO, JSON.stringify(data))
  //   location.href = '/'
  // }

  getEasyRouter = () => {
    const _routes  =  activeRoutes.concat(constantRoutes)
    this.routeList =  this.easyMenus(activeRoutes)
    this.props.setMenus(this.routeList)
    console.log('this.routeList', this.routeList);
      this.setState({
        routes: _routes
      },()=>{
        this.viewContent.addEventListener('scroll', this.scrollView)
      })
  }

  easyMenus = (router) => {
    // 用权限就用下面的
    let routeItem =[]
    router.map(item =>{
      routeItem.push({
        path:item.path,
        MenuName:item.name,
        Show:true,
        icon:item.meta.icon,
        component:item.component
      })
    })
   return  routeItem
  }

  // // 获取用户权限
  // getFunctional = async () => {
  //   const [ funRes, dictRes ] = await Promise.all([api.functional(), api.getDict()])
  //   if (!funRes.Code && !dictRes.Code) {

  //     // 注入全局枚举数据
  //     this.props.addEnum(dictRes.Data)

  //     const { Menus, Functions } = funRes.Data
  //     this.props.setFunctions(Functions)
  //     this.routeList = JSON.parse(JSON.stringify(Menus))
  //     this.assemblyMenus(Menus, activeRoutes, this.routeList)

  //     // 等路由处理完后，存储菜单信息并显示页面视图
  //     this.props.setMenus(this.routeList)
  //     console.log('this.routeList', this.routeList);
  //     this.setState({
  //       routes: [ ...this.routeList, ...constantRoutes ],
  //       isOverRoute: true
  //     }, () => {
  //       this.viewContent.addEventListener('scroll', this.scrollView)
  //     })
  //   }
  // }

  // // 组装路由菜单
  // assemblyMenus = (data, routes, meus) => {
  //   for (let i = 0; i < data.length; i++) {
  //     const item = data[i]
  //     for (let j = 0; j < routes.length; j++) {
  //       const route = routes[j];
  //       if (item.MenuCode === route.meta?.parentCode) {
  //         meus.push(route)
  //       }
  //       if (item.MenuCode === route.meta?.code) {
  //         const routeItem = meus.find(o => o.MenuCode === item.MenuCode)
  //         routeItem.path = route.path
  //         routeItem.name = route.name
  //         routeItem.icon = route.meta.icon
  //         routeItem.component = route.component
  //         if (item?.ChildMenus?.length) {
  //           this.assemblyMenus(item.ChildMenus, route.routes, routeItem.ChildMenus)
  //         }
  //       }
  //     }
  //   }
  // }

  // header头 滚动渐变
  scrollView = (e) => {
    let opacity = (e.target.scrollTop / 60).toFixed(2)
    if (opacity >= 1) {
      opacity = 1
    }
    this.setState({ opacity })
  }

  render() {
    return (
      this.state.isOverRoute ? (
        <BrowserRouter>
          <div className="app flex">
            <MenuBoard />
            <section className="app-content"
              style={{
                width: `calc(100% - ${this.props.collapsed ? '80px' : '240px' })`,
                left: this.props.collapsed ? '80px' : '240px'
              }}
            >
              <Header opacity={this.state.opacity} />
              <section
                className="view-content"
                ref={v => this.viewContent = v}
              >
                <ViewRouter routes={this.state.routes} />
                {/* {
                  !this.state.hasError ? <ViewRouter routes={this.state.routes} /> : <div>Some errors occurred, please refresh or contact the administrator</div>
                } */}
              </section>
            </section>
          </div>
        </BrowserRouter>
      ) : <Result
          icon={<SmileOutlined />}
          title="The system is in preparation..."
        />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
