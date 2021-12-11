import React, { memo, useEffect, useState } from "react"
import { useSelector } from 'react-redux'

/**
 * @description 权限控制组件
 * @param {keyword} String 唯一权限id 需要传入redux的functions里面唯一的权限id以确认该用户是否有权限
 * @returns 
 */
function Permission({ keyword, children }) {
  const functions = useSelector(state => state.app.functions.map(o => o.Value))
  return functions.includes(keyword) ? children : ''
}

export default Permission
