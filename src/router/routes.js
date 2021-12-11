import React, { lazy } from "react";
 import DashboardSvg from "@/assets/svg/layout/dashboard.svg";

export const constantRoutes = [
  {
    path: "/login",
    component: lazy(() => import("@/views/login")),
  },
  {
    path: "/404",
    component: lazy(() => import("@/views/404")),
  },

];

export const activeRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      code: "Menu_Dashboard",
      icon: <DashboardSvg />,
    },
    component: lazy(() => import("@/views/dashboard")),
  },
  {
    path: "/chart",
    name: "chart",
    meta: {
      code: "Menu_Dashboard",
      icon: <DashboardSvg />,
    },
    component: lazy(() => import("@/views/Chart")),
  }
]

/**
 * 由于后端只做了菜单列表，前端需要手动添加一个菜单下面的所有子路由
 * 故而定义一下规定：
 * meta下面的code为唯一菜单code，parentCode为此菜单下面的子路由
 * 默认会将一个菜单下面的全部子路由都加载到该菜单下面
 * 列表页面和详情页面属于同级别页面，不做嵌套，嵌套的只有菜单
//  */
// export const activeRoutes = [
//   {
//     path: "/packing-list",
//     name: "Packing",
//     meta: {
//       code: "Menu_ItemPacking",
//       icon: <PackingSvg />,
//     },
//     component: lazy(() => import("@/views/packing/index")),
//   },
//   {
//     path: "/packing-detail",
//     name: "Packing Detail",
//     meta: {
//       parentCode: "Menu_ItemPacking",
//       parentPath: "/packing-list",
//     },
//     component: lazy(() => import("@/views/packing/Detail/index")),
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     meta: {
//       code: "Menu_Dashboard",
//       icon: <DashboardSvg />,
//     },
//     component: lazy(() => import("@/views/dashboard")),
//   },
//   {
//     path: "/order-list",
//     name: "Order Management",
//     meta: {
//       code: "Menu_Booking_Commission",
//       icon: <CommissionSvg />,
//     },
//     component: lazy(() => import("@/views/orderManage")),
//   },

//   // bill Invoice
//   {
//     path: "/billingInvoice-manage",
//     name: "Client Management",
//     meta: {
//       code: "Menu_BillInvoice",
//       icon: <BillInvoiceSvg />,
//     },
//     component: lazy(() => import("@/views/billingInvoice")),
//     routes: [
//       {
//         path: "/billingInvoice-manage/billing-list",
//         name: "Bill List",
//         meta: {
//           code: "Menu_BillInvoice_Bill",
//         },
//         component: lazy(() => import("@/views/billingInvoice/billing")),
//       },
//       {
//         path: '/billingInvoice-manage/billing-detail',
//         name: 'Bill List',
//         title: "Bill List",
//         meta: {
//           parentCode: 'Menu_BillInvoice_Bill',
//           parentPath: '/billingInvoice-manage/billing-list'
//         },
//         component: lazy(() => import('@/views/billingInvoice/billingDetail'))
//       },
//       {
//         path: "/billingInvoice-manage/invoice-list",
//         name: "Invoice List",
//         meta: {
//           code: "Menu_BillInvoice_Invoice",
//         },
//         component: lazy(() => import("@/views/billingInvoice/invoice")),
//       },
//       {
//         path: "/billingInvoice-manage/add-invoice",
//         name: "Add Invoice",
//         title: "Invoice List",
//         meta: {
//           parentCode: "Menu_BillInvoice_Invoice",
//           parentPath: "/billingInvoice-manage/invoice-list",
//         },
//         component: lazy(() => import("@/views/billingInvoice/invoiceAdd")),
//       },
//       {
//         path: '/billingInvoice-manage/invoice-detail',
//         name: 'Invoice Detail',
//         title: "Invoice List",
//         meta: {
//           parentCode: 'Menu_BillInvoice_Invoice',
//           parentPath: "/billingInvoice-manage/invoice-list"
//         },
//         component: lazy(() => import('@/views/billingInvoice/invoiceBasicDetail'))
//       },
//     ]
//   },

//   // Master Data
//   {
//     path: "/master-data",
//     name: "Master Data",
//     meta: {
//       code: "Menu_MasterData",
//       icon: <MasterDataSvg />,
//     },
//     component: lazy(() => import("@/views/masterData")),
//     routes: [
//       {
//         path: "/master-data/service-provider",
//         name: "Service Provider List",
//         meta: {
//           isMenu: true,
//           code: "Menu_MasterData_ServiceProvider",
//         },
//         component: lazy(() => import("@/views/masterData/serviceProvider")),
//       },
//     ],
//   },

//   // client management
//   {
//     path: "/client-manage",
//     name: "Client Management",
//     meta: {
//       code: "Menu_Client",
//       icon: <ShipperManagementSvg />,
//     },
//     component: lazy(() => import("@/views/clientManage")),
//     routes: [
//       {
//         path: "/client-manage/client-list",
//         name: "Client List",
//         meta: {
//           code: "Menu_Client_ShipperList",
//         },
//         component: lazy(() => import("@/views/clientManage/clientlist")),
//       },
//       {
//         path: "/client-manage/client-detail",
//         name: "Client Detail",
//         title: "Client List",
//         meta: {
//           parentCode: "Menu_Client_ShipperList",
//           parentPath: "/client-manage/client-list",
//         },
//         component: lazy(() => import("@/views/clientManage/clientDetail")),
//       },
//       {
//         path: "/client-manage/audit-list",
//         name: "Audit List",
//         meta: {
//           code: "Menu_Shipper_Audit",
//         },
//         component: lazy(() => import("@/views/clientManage/shipperList")),
//       },
//       {
//         path: "/client-manage/audit-detail",
//         name: "Shipper Audit",
//         title: "Audit List",
//         meta: {
//           parentCode: "Menu_Shipper_Audit",
//           parentPath: "/client-manage/audit-list",
//         },
//         component: lazy(() => import("@/views/clientManage/auditDetail")),
//       },
//       {
//         path: "/client-manage/approve-detail",
//         name: "Client Audit",
//         title: "Client List",
//         meta: {
//           parentCode: "Menu_Client_ShipperList",
//           parentPath: "/client-manage/client-list",
//         },
//         component: lazy(() => import("@/views/clientManage/aproveDetail")),
//       },
//     ],
//   },

//   // Expense
//   {
//     path: "/expense",
//     name: "Expense",
//     meta: {
//       code: "Menu_Expense",
//       icon: <ExpenseSvg />,
//     },
//     component: lazy(() => import("@/views/expense")),
//     routes: [
//       {
//         path: "/expense/payment",
//         name: "paymentRequest List",
//         meta: {
//           code: "Menu_Expense_PaymentRequest",
//         },
//         component: lazy(() => import("@/views/expense/payment/index")),
//       },
      
//       {
//         path: "/expense/payment-edit",
//         name: "paymentRequest Edit",
//         title: "paymentRequest List",
//         meta: {
//           parentCode: "Menu_Expense_PaymentRequest",
//           parentPath: "/expense/payment",
//         },
//         component: lazy(() => import("@/views/expense/paymentDetail/index")),
//       },
     
//       {
//         path: "/expense/refund",
//         name: "Refund Request List",
//         meta: {
//           code: "Menu_Expense_RefundRequest",
//         },
//         component: lazy(() => import("@/views/expense/refund/index")),
//       },
//       {
//         path: "/expense/refund-detail",
//         name: "Refund Request Detail",
//         title: "Refund Request List",
//         meta: {
//           parentCode: "Menu_Expense_RefundRequest",
//           parentPath: "/expense/refund",
//         },
//         component: lazy(() => import("@/views/expense/refund/detail/index")),
//       },
//       {
//         path: "/expense/refund-detailReadOnly",
//         name: "Refund Request Detail",
//         title: "Refund Request List",
//         meta: {
//           parentCode: "Menu_Expense_RefundRequest",
//           parentPath: "/expense/refund",
//         },
//         component: lazy(() => import("@/views/expense/refund/detail/components/onlyReadDetail")),
//       },
//     ],
//   },
// ];
