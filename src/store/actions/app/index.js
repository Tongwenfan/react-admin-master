
/**
 * @description 切换菜单栏
 * @param { Object } data
 * @returns { Object }
 */
export function toggleCollapsed(data) {
  return { type: 'TOGGLE_COLLAPSED', data }
}

/**
 * @description 储存菜单
 * @param { Object } data
 * @returns { Object }
 */
export function setMenus(data) {
  return { type: 'SET_MENUS', data }
}

/**
 * @description 储存按钮权限
 * @param { Object } data
 * @returns { Object }
 */
export function setFunctions(data) {
  return { type: 'SET_FUNCTIONS', data }
}
