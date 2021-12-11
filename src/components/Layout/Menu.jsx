import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LogoSvg from '@/assets/svg/layout/logo.svg'
import PutAwaySvg from '@/assets/svg/layout/putAway.svg'
import LogoPutSvg from '@/assets/svg/layout/logo-put.svg'
import actions from '@/store/actions'

import { Menu } from 'antd'

import './menu.less'

const { SubMenu } = Menu

const { toggleCollapsed } = actions

function MenuBoard(props) {
  const dispatch = useDispatch()
  const collapsed = useSelector(state => state.app.collapsed)
  const menus = useSelector(state => state.app.menus)
  const [ openKeys, setOpenKeys ] = useState([])
  const [ selectedKeys, setSelectedKeys ] = useState([])

  useEffect(() => {
    showHeightLight()
  }, [location.pathname])

  // 显示菜单高亮
  const showHeightLight = () => {
    const path = location.pathname.slice(1)
    const isSub = path.includes('/')
    if (isSub) {
      const [ subT, subI ] = path.split('/')
      setOpenKeys([ '/' + subT ])
      setSelectedKeys([ '/' + path ])
    } else {
      setSelectedKeys([ location.pathname ])
    }
  }

  /**
   * @description 路由跳转
   * @param { String } route 路由信息
   * @returns { Function }
   */
  const handleJupm = (route) => {
    return () => {
      props.history.push(route.path)
    }
  }

  function handleOpenChange(val) {
    setOpenKeys(val)
  }

  return (
    <div className="menu-wrap" style={{ width: collapsed ? '80px' : '' }}>
      <div className="logo-wrap">
        {
          collapsed ? <LogoPutSvg className="logo" /> : <LogoSvg onClick={() => props.history.push('/')} />
        }
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        inlineCollapsed={collapsed}
        onOpenChange={handleOpenChange}
      >
        {
          menus.map((o, idx) => {
            if(!o?.ChildMenus?.length) {

              return (
                o.Show &&
                <Menu.Item key={o.path} icon={o?.icon} onClick={handleJupm(o)}>
                  <div className="text-ellipsis flex-sc">
                    { o.MenuName }
                  </div>
                </Menu.Item>
              )
            } else {
             
              return (
                o.Show ?
                <SubMenu key={o.path} icon={o?.icon} title={o.MenuName}>
                  {
                    o.ChildMenus.map(subO => (
                      subO.Show && <Menu.Item key={subO.path} onClick={handleJupm(subO)}>{ subO.MenuName }</Menu.Item>
                    ))
                  }
                </SubMenu>
                : ''
              )
            }
          })
        }
      </Menu>

      <div className="put-away flex-sc" onClick={() => dispatch(toggleCollapsed())}>
        <PutAwaySvg className={ collapsed ? 'icon rotote' : 'icon' } style={{ marginRight: collapsed ? 0 : 10, marginLeft: !collapsed ? 0 : 5 }} />
        { !collapsed && 'Put away' }
      </div>
    </div>
  )
}

export default withRouter(MenuBoard)
