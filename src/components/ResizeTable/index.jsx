import { Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { Resizable } from 'react-resizable';
import './index.less';

const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props

  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

const ResizeTable = (props) => {

  const { columns, dataSource, style, ...rest} = props;

  const [cols, setCols] = useState(props.columns);
  const colsRef = useRef([]);

  const components = {
    header: {
      cell: ResizeableTitle,
    },
  }

  useEffect(() => {
    setCols(props.columns);
  }, [props.columns])
  
  const handleResize = (index) => (e, { size }) => {
    const nextColumns = [...cols];

    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    };

    setCols(nextColumns);
  };

  colsRef.current = (cols || []).map((col, index) => ({
    ...col,
    onHeaderCell: (column) => ({
      width: column.width,
      onResize: handleResize(index),
    }),
  }))

  return (
    <div className="components-table-resizable-column" style={style}>
      <Table
        components={components}
        columns={colsRef.current}
        dataSource={props.dataSource}
        { ...rest }
      />
    </div>
  )
}

export default ResizeTable;