import React from "react"
import NoDataSvg from '@/assets/svg/common/noData.svg'
import NoSearchSvg from '@/assets/svg/common/notSearch.svg'
import NoSelectSvg from '@/assets/svg/common/notSelected.svg'


/**
 * @description 空组件
 * @param { String } type 显示icon的类型 现有data、search、select三种类型， 默认显示data
 * @returns 
 */
function Empty({ type, text = 'No Data' }) {
  type = type || 'data'
  function Icon() {
    switch (type) {
      case 'data': return <NoDataSvg />
      case 'search': return <NoSearchSvg />
      case 'select': return <NoSelectSvg />
      default:
        break;
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='flex-col-cc' style={{ color: '#9F9E9D' }}>
        { Icon() }
        { text }
      </div>
    </div>
  )
}

export default Empty
