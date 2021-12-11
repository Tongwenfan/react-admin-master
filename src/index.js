
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './app'
// import './i18n'
import './assets/css/index.less'
  // eslint-disable-next-line no-console
  // 此代码开启可以删除插件传来的message
// if (process.env.local && process.env.local === "dev") {
//   let logOfConsole = []
//   let timeOut = null
//   let _log = console.log;
//   console.log = function () {
//     logOfConsole.push({method: 'log', arguments: arguments});
//     return _log.apply(console, arguments);
//   };

//   window.addEventListener("message", function (event) {
//     const { origin, data } = event;
//     const { source, payload } = data;
//     if (origin === "http://localhost:10000") {
//       if (
//         (source === "react-devtools-content-script" ||
//           source === "react-devtools-bridge") &&
//         payload !== undefined
//       ) {
//           clearTimeout(timeOut)
//           timeOut = setTimeout(()=>{
//               console.clear()
//               logOfConsole.map(item => _log.apply(console, item.arguments));
//               logOfConsole = []
//           }, 1200)
//       }
//     }
//   });
// }


ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)


