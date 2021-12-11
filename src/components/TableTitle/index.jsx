import React from "react";
import "./index.less";
const TableTitle = (props) => {
  const {title, children} = props;
  return (<div className={"table-title"}>
    <div className={"title"}>{title}</div>
    {
      children && <div className={"content"}>
        {children}
      </div>
    }
  </div>)
}

export default TableTitle;
