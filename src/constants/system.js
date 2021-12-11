// client状态
export const ClientStatus = {
  1: 'New',
  2: 'Pending',
  3: 'Approved',
  4: 'Suspended'
}

// 订单状态
export const OrderStatus = {
  NEW: 0 , // 草稿
  SUBMITED : 1, //  已提交
  APPROVED : 2, //  审核通过
  PREPAYRECEIPT : 3, //  收到预付款
  DOCUMENTATION : 4, //  补充资料
  UNDERREVIEW: 5, //  资料待审核
  BOOKING : 6, //  订舱中
  BOOKED : 7, //  订舱成功
  CANCELLED: 8, //  已取消
  SETTLEMENT: 9, //  已结算
}

// 企业性质
export const BusinessTypes = [
  { name: 'Manufacturer', val: 1 },
  { name: 'Traders', val: 2 },
]

// 公司类型
export const CompanyTypes = [
  { name: 'Limited liability company', val: 1 },
  { name: 'One-person limited liability company', val: 2 },
]

// 付款模式
export const paymentMode = [
  { name: 'Prepayment', val: 1 },
  { name: 'Deposit', val: 2 },
]

// 客户等级
export const customerLevel = [
  { name: 'C (Common)', val: 'C' },
  { name: 'B (Intermediate)', val: 'B' },
  { name: 'A (Senior)', val: 'A' },
]

//根据val匹配name
export const getBusinessTypeName = (val) => {
   return (BusinessTypes.reduce((pre, cur)=>{
     return {
       ...pre,
       [cur.val]: cur.name
     }
   }, {}))[val]
}

//根据val匹配name
export const getCompanyTypeName = (val) => {
  return (CompanyTypes.reduce((pre, cur)=>{
    return {
      ...pre,
      [cur.val]: cur.name
    }
  }, {}))[val]
}
