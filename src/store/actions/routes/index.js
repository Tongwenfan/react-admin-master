
/**
 * @description 添加路由
 * @param {String} path 
 * @returns { Object }
 */
export function addRoute(path) {
  return { type: 'ADD_ROUTE', path }
}

/**
 * @description 替换路由
 * @param {String} path 
 * @returns { Object }
 */
export function replaceRoute(path) {
  return { type: 'REPLACE_ROUTE', path }
}