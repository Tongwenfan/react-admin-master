import React, { lazy, useEffect, useState } from "react"

import { getQueryObj } from '@/utils'
import constants from '@/constants'
import api from '@/api'

const { USER_INFO } = constants

function Login({ history }) {
  const querys = getQueryObj()

  useEffect(() => {
    async function login() {
      const res = await api.login(querys.code)
      const data = res.Data
      localStorage.setItem(USER_INFO, JSON.stringify(data))
      location.href = '/'
      // history.push('/')
    }
    login()
  }, [])

  return (
    <div>Login......</div>
  )
}

export default Login
