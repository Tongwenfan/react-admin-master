import React, { memo, useEffect, useState } from 'react'
import { Avatar, Menu, Dropdown } from 'antd'
import { useSelector } from 'react-redux'

import SettingSvg from '@/assets/svg/layout/setting-light.svg'
import Logout from '@/assets/svg/layout/logout.svg'

import constants from '@/constants'
import './header.less'

const { USER_INFO } = constants

const strategyCommand = {
  logout() {
    localStorage.clear()
    location.href = process.env.LOG_OUT
  }
}

function Header(props) {
  const userInfo = JSON.parse(localStorage.getItem(USER_INFO)) || {}

  const handleCommand = ({ key }) => {
    strategyCommand[key].call(this)
  }

  // 设置拉下菜单
  const menu = (
    <Menu onClick={handleCommand} triggerSubMenuAction="hover">
      <Menu.Item key="logout" icon={<Logout />} >
        Log out
      </Menu.Item>
    </Menu>
  )


  return (
    <div
      className="header-wrap flex-sb"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${Number(props.opacity)})`,
        // borderBottom: parseInt(props.opacity) ? '1px solid rgba(0, 0, 0, 0.1)' : ''
        boxShadow: parseInt(props.opacity) ? '0 2px 3px rgba(0, 0, 0, .1)' : ''
      }}
    >
      <div className="avatar flex-sc">
     
        <Avatar
          size={40}
          style={{ marginRight: 10 }}
          src={userInfo?.Avatar}
        />
        {/* <span className="avatar-name">{ userInfo?.Name }</span> */}
        <span className="avatar-name">Everything is natural and everything is at ease. It is the ultimate state of mind and nature.</span>
      </div>

      <div className="operation flex-sc">
        <Dropdown overlayClassName="seeting-dropdown" overlay={menu}>
          <div className="setting-wrap flex-cc">
            <SettingSvg />
          </div>
        </Dropdown>
      
      </div>
    </div>
  )
}

export default Header
