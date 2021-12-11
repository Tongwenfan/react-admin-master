import React, { Component, PureComponent, memo, useEffect, useState } from "react"
import Breadboard from "./Breadboard"

function Page({ noBreadboard, children, id }) {
  return (
    <>
      { !noBreadboard && <Breadboard id={id} /> }
      { children }
    </>
  )
}

export default Page
