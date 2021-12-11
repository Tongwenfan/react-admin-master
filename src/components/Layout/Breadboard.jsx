import React from 'react'
import { activeRoutes } from '@/router/routes'
import { Breadcrumb } from 'antd'

import './breadboard.less'

function Breadboard({ id }) {
  let routes = []
  const pathName = location.pathname.slice(1)

  if (pathName.includes('/')) {
    const [ before, after ] = pathName.split('/')
    const route = activeRoutes.find(o => o.path === ('/' + before))
    const currentRoute = route.routes.find(o => o.path === ('/' + pathName))
    routes = [ currentRoute ]
  } else {
    const route = activeRoutes.find(o => o.path === ('/' + pathName))
    routes = [ route ]
  }

  const attr = ({ meta }) => (Object.assign({}, id ? { href: meta.parentPath } : {} ))

  return (
    <div className="breadboard-wrap">
      <Breadcrumb>
      {
        !!routes.length && routes.map(o => (
          <Breadcrumb.Item key={o.path} {...attr(o)}>{ o.title || o.name }</Breadcrumb.Item>
        ))
      }
      {
        id && <Breadcrumb.Item>{ id }</Breadcrumb.Item>
      }
      </Breadcrumb>
    </div>
  )
}

export default Breadboard
