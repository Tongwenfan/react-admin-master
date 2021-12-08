import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Checkbox, Table } from 'antd'
import './App.less'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
  NotificationTwoTone,
} from '@ant-design/icons'
const MyCard = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]

  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
      ellipsis: true,
      width: 80,
    },
    {
      title: '操作',
      dataIndex: 'age',
      key: 'age',

      width: 120,
      render: () => (
        <div>
          <ArrowUpOutlined /> <ArrowDownOutlined style={{ margin: '0 12px' }} />
          <DeleteOutlined />
        </div>
      ),
    },
    {
      title: '单词',
      dataIndex: 'address',
      key: 'address',

      width: 150,
      render: () => (
        <div>
          <NotificationTwoTone /> xxxxx
        </div>
      ),
    },
    {
      title: '词义',
      dataIndex: 'address',
      key: 'address',
      width: 200,
      render: () => (
        <div>
          <p>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </p>
          <p>
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </p>
        </div>
      ),
    },
    {
      title: '配图',
      dataIndex: 'address',
      key: 'address',
      render: () => (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'space-between',
          }}
        >
          <img
            src="https://dfis-gdev.newegg.org/globalselling/quote/dfd7d690-daf7-4e9c-ae30-24902e844efc.jpg"
            style={{
              maxWidth: '50%',
              maxHeight: '130px',
              margin: ' auto',
              padding: '6px',
            }}
            alt=""
          />
          <img
            src="https://s0.2mdn.net/simgad/13643478230671096814?sqp=-oaymwEOCKwCEPoBIAFIZFABWAE&rs=AOga4qmJpdn4M7kLS98kIVh_mkNkTpKm7w"
            style={{
              maxWidth: '50%',
              maxHeight: '130px',
              margin: ' auto',
              padding: '6px',
            }}
            alt=""
          />
          <img
            src="https://s2.2mdn.net/proxy/HPCfHJbK08QtjbjI6CxuVuEcZ_tJqh8uaL2eHldYPADijh8On27ySYzsLodid_0Is6MMyScXC6KvCxpeKpGFUeHIhwHaYSuzhgsEdGm2qL54MMDZistNJv2xZ4LhwSnWrHivenNbHCfO=w910-h112-n"
            style={{
              maxWidth: '50%',
              maxHeight: '130px',
              margin: ' auto',
              padding: '6px',
            }}
            alt=""
          />
          <img
            src="https://s0.2mdn.net/simgad/13643478230671096814?sqp=-oaymwEOCKwCEPoBIAFIZFABWAE&rs=AOga4qmJpdn4M7kLS98kIVh_mkNkTpKm7w"
            style={{
              maxWidth: '50%',
              maxHeight: '130px',
              margin: ' auto',
              padding: '6px',
            }}
            alt=""
          />
        </div>
      ),
    },
    {
      title: 'x1',
      dataIndex: 'address',
      key: 'address',
      width: 80,
      render: () => (
        <div>
          <Checkbox onChange={onChange}></Checkbox>
        </div>
      ),
    },
    {
      title: 'x2',
      dataIndex: 'address',
      key: 'address',
      width: 80,
      render: () => (
        <div>
          <Checkbox onChange={onChange}></Checkbox>
        </div>
      ),
    },
    {
      title: 'x3',
      dataIndex: 'address',
      key: 'address',
      ellipsis: true,
      width: 80,
      render: () => (
        <div>
          <Checkbox onChange={onChange}></Checkbox>
        </div>
      ),
    },
  ]
  return (
    <div>
      <Table
        pagination={false}
        scroll={{ x: 1200 }}
        dataSource={dataSource}
        bordered
        columns={columns}
      />
    </div>
  )
}
export default MyCard
