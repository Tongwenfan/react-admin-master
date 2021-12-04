import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import Page from "@/components/Layout/Page";
import SectionTitle from "@/components/SectionTitle";
import "./index.less";
import moment from 'moment'
import { tabsView } from "./business/index";
import { Button, Tabs, Row, Col, Modal, message, Input, Form } from "antd";
import Loading from "@/components/Loading";
import { useSelector } from 'react-redux'
import {  RightOutlined,DownOutlined,WarningFilled   }  from '@ant-design/icons';
import {
  OKSvg,
  DelsSvg,
  SaveSvg,
} from "../../expense/paymentDetail/business/iconSvg";
import api from '@/api/itemPacking'
import { getQueryString } from "@/utils";
const { TextArea } = Input;
const { TabPane } = Tabs;
const PackingDetail = (props) => {
  useEffect(() => {
    getDetail()
    return () => {};
  }, []);
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({
    ItemBaseInfoDetail:{},
    ItemPackingSpecificationDetails:[
     
    ],
    ItemOperationLogDetails:[]
  });
  const [logList,setLogList] = useState([])
  const [checkLog,setCheck] = useState(false) // true = 展开 false = 不展开
  const [form] = Form.useForm();
  function callback(key) {
    console.log(key);
  }

  const getDetail = async () => {
   let TransactionNumber = getQueryString("TransactionNumber");
    const {Code,Data} = await api.detail(TransactionNumber!== undefined ? TransactionNumber : data.ItemBaseInfoDetail.TransactionNumber )
    if(!Code){
      const { ItemOperationLogDetails } = Data
    let _log =   ItemOperationLogDetails.length > 0 ? [ItemOperationLogDetails[0]]  : []
      setCheck(false)
      setData({...Data})
      setLogList(_log)
    }
   
  };
  const openLog = () => {
    const { ItemOperationLogDetails } = data
    let _checkLog = !checkLog
    let  _log =  _checkLog ? ItemOperationLogDetails :  (  ItemOperationLogDetails.length > 0 ? [ItemOperationLogDetails[0]]  : [] )
    setLogList(_log)
    setCheck(_checkLog)
  }
  const handleOk = async () => {
    const searchData = await form.validateFields();
    const {Code} = await api.reject({
        TransactionNumber: data.ItemBaseInfoDetail.TransactionNumber,
        Notice: searchData.Notice
    })
    Code === 0 && message.success('Successful operation~')
    getDetail()
     // 请求详情
  };
  const FormatItem = (item) => item ? item :'--'
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const rejected = () => setVisible(true);
  const approve = async () => {
    const {ItemBaseInfoDetail} = data
    const {Code} = await api.approve(ItemBaseInfoDetail.TransactionNumber)
    Code === 0 && message.success('Successful operation~')
    // 请求详情
    getDetail()
  };
  const stateList = {
    1:'Draft',
    2:'Pending',
    3:'Activated',
    4:'Deactivated',
  }
  const enumerateData = useSelector(state => state.enumerate.list)
  const Item_Packing_Type = enumerateData.find(o => o.Category === 'Item_Packing_Type')?.ItemList || []
  const Item_OperationLog_Type = enumerateData.find(o => o.Category === 'Item_OperationLog_Type')?.ItemList || []
  const getTypeName =  (list,_code) => {
    let _name = ""
    list.map(item => {  
      if(item.Code === _code){
        _name = item.Name
      }
     })
     return _name
  }
  const { 
    ItemBaseInfoDetail,
  ItemPackingSpecificationDetails,
  ItemOperationLogDetails
 } = data
  return (
    <Page
    id={
     `Detail`
    }
  >
      <div className="PackingDetail">
        <Row gutter={12} className="header">
          <Col md={12} lg={12} xl={12} xxl={12}>
            <SectionTitle title="Basic information" />
            <div className={` header-card  ${stateList[ItemBaseInfoDetail.Status]}-bg`}>
              <div className="table-status-wrap flex-sc">
                <span className={`status ${stateList[ItemBaseInfoDetail.Status]}-packing`}></span>
                <span>{stateList[ItemBaseInfoDetail.Status]}</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={12} className="content">
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Newegg Item# :</p>
            <p  className="value">{FormatItem(ItemBaseInfoDetail?.NeweggItemNumber)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Seller Part# :</p>
            <p  className="value">{FormatItem(ItemBaseInfoDetail?.ClientItemNumber)}</p>
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12}>
            <p className="label">Client :</p>
            <p className="value href">{FormatItem(ItemBaseInfoDetail?.ClientName)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">HS Code :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.Hscode)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">First Legal Unit :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.FirstLegalUnitName)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Second Legal Unit :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.SecondLegalUnitName)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Inner Packing Qty :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.InnerQuantity)}</p>
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12}>
            <p className="label">Item Chinese Name :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.ItemChineseName)}</p>
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12}>
            <p className="label">Item English Name :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.ItemEnglishName)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Weight (KG) :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.Weight)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Dimension (mm) :</p>
            <p className="value ">{FormatItem(`${(ItemBaseInfoDetail?.Length)} * ${ItemBaseInfoDetail?.Width} * ${ItemBaseInfoDetail?.Height}`)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Currency :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.Currency)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Unit Price :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.UnitPrice)}</p>
          </Col>

          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Product Origin : :</p>
           <p className="value ">{FormatItem(ItemBaseInfoDetail?.ProductOrigin)}</p>
          </Col>
          <Col md={12} lg={12} xl={12} xxl={12}>
            <p className="label">Domestic Source :</p>
            <p className="value ">{FormatItem(ItemBaseInfoDetail?.DomesticSource)}</p>
          </Col>
          <Col md={6} lg={6} xl={6} xxl={6}>
            <p className="label">Hazard :</p>
  
            <p className="value "><WarningFilled  style={{ color: '#F5222D', display: ItemBaseInfoDetail.HazardFlag === 1 ? 'inline':'none' }} /> {ItemBaseInfoDetail?.HazardFlag === 1 ? '危险品' : (ItemBaseInfoDetail?.HazardFlag ===2 ? '非危险品' : '')}</p>
          </Col>
        </Row>
        {/* 图片 */}
        <p className="label">Item Image :</p>
        <Row gutter={12} className="content">
          {
            ItemBaseInfoDetail?.ItemImageUrl1 &&   <Col span={6} className="imgContent">
            <img
              src={ ItemBaseInfoDetail?.ItemImageUrl1}
              alt=""
            />
          </Col>
          }
          {
            ItemBaseInfoDetail?.ItemImageUrl2 &&   <Col span={6} className="imgContent">
            <img
              src={ ItemBaseInfoDetail?.ItemImageUrl2}
              alt=""
            />
          </Col>
          }
        </Row>
        <div className="footer">
          <SectionTitle title="Delivery Packing Specification List" />
        
          <Tabs defaultActiveKey="1" onChange={callback} className="tabs">
            {
              ItemPackingSpecificationDetails.map((item,index) =>   <TabPane tab={`Tab ${index+1}`} key={item.TransactionNumber}>
             
              {tabsView(item,getTypeName(Item_Packing_Type,item.PackingTypeCode))}
            </TabPane> )
            }
       
          </Tabs>
              {/* log */}
              <SectionTitle title="Log" />
          <Row>
            <Col span={24}  style={{ textAlign:'right',marginTop:'1px',marginBottom:'12px' }} className="log-header">
               <a onClick={openLog}>Expand log {checkLog ? <DownOutlined  /> : <RightOutlined />}</a>
            </Col>
            <Col span={24} className="log-list">
             
              {
                logList.map((item,key) => <div className={` header-card`} style={{ padding:'8px 0' }} key={item.TransactionNumber}>
                <div className="table-status-wrap flex-sc">
                  <span className={`status blue`} style={{ background: '#0072EC' }}></span>
              <span>{getTypeName(Item_OperationLog_Type,item.OperationCode)}   <span style={{  fontWeight:'700' }}>{item?.Memo}</span> {item?.Operator}  {moment(item?.OperationTime).format('YYYY-MM-DD hh:mm:ss')} </span>
                </div>
              </div>)
              }
            </Col>
          </Row>
          {
              [2].includes(data.ItemBaseInfoDetail.Status) && <Row>
           
              <Col span={12} offset={12} style={{ textAlign: "right" }}>
                <Button
                  style={{ marginLeft: 20 }}
                  icon={<DelsSvg className="anticon" />}
                  onClick={() => rejected()}
                >
                  REJECTED
                </Button>
  
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: 20 }}
                  icon={<OKSvg className="anticon" />}
                  onClick={() => approve()}
                >
                  APPROVE
                </Button>
              </Col>
            </Row>
            }
              
        
        </div>

        <Modal
          title={"Rejected"}
          width={800}
          wrapClassName="serice-modal"
          visible={visible}
          destroyOnClose={true}
          onCancel={() => handleCancel()}
          footer={[
            <Button
              key="submit"
              type="primary"
              icon={<OKSvg className="anticon" />}
              onClick={() => handleOk()}
            >
              CONFIRM
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical">
            <Row gutter={20}>
              <Col span={24}>
                <Form.Item
                  label="Reason for Rejection :"
                  name="Notice"
                  rules={[
                    { required: true, message: "please enter!" },
                    {
                      pattern: /[^\s]/,
                      message: "Do not enter Spaces!",
                    },
                  ]}
                >
                  <TextArea rows={2} placeholder="please enter..." />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </Page>
  );
};

export default withRouter(Loading(PackingDetail));
