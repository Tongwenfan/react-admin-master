import React from "react"
import './index.less'

function SectionTitle({ title, ...reset }) {

  return (
    <div className="section-title" { ...reset }>{ title }</div>
  )
}

export default SectionTitle