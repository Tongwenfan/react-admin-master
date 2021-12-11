import lang from "@/i18n";
import constants from "@/constants";
const { USER_INFO } = constants;

export const toDate = (value) => {
  if (value) {
    const dateRegExp = /^\/Date\((.*?)\)\/$/;
    const dateString = dateRegExp.exec(value);
    const date = dateString[1];
    let d = new Date(parseInt(date));
    d = this.offsetTime(
      d,
      date.substring(date.length - 5).replace(new RegExp("0", "g"), "")
    );
    if (!isNaN(d)) {
      return d;
    }
  }
};

/**
 * @description 防抖函数
 * @param {Function} cb 回调方法
 * @param {Number} delay 延时
 * @param {Boolean} immediate 是否立即执行
 */
export const debounce = (cb, delay = 200, immediate = false) => {
  let timer = null,
    isCancel = false;
  function debouncer(...arg) {
    if (isCancel) {
      cb(...arg);
      return;
    }
    clearTimeout(timer);
    if (immediate) {
      cb(...arg);
    }
    timer = setTimeout(() => {
      cb(...arg);
    }, delay);
  }

  debouncer.cancel = () => {
    isCancel = true;
  };

  return debouncer;
};

/**
 * @description 查询多语言
 * @param {String} lang
 * @returns {Function}
 */
export const t = (lang) => {
  return (langType) => {
    const langArr = langType.split(".");
    function findText(langArr, lang) {
      while (langArr.length) {
        const langItem = langArr.shift();
        const langText = lang[langItem];
        if (langText) {
          if (typeof langText === "string") {
            return langText;
          } else {
            return findText(langArr, langText);
          }
        } else {
          return langItem;
        }
      }
    }
    return findText(langArr, lang);
  };
};

/**
 * @description 多语言封装
 * @param {String} text
 * @returns {String} 返回查询到的多语言值
 */
export function $t(text) {
  const langType = JSON.parse(
    localStorage.getItem(process.env.CURRENT_LANGUAGE)
  ) || { value: "en-us", text: "English" };
  const curLang = lang[langType.value];
  return t(curLang)(text);
}

/**
 * @description 获取地址栏参数
 * @param {String} name   -- 传入需要查询的参数名
 * @returns {String} 返回查询到的value
 */
export const getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
};

// 获取url参数
export function getQueryObj() {
  const obj = {};
  location.search
    .slice(1)
    .replace(/([^&]+)=([^&]+)/g, (str, $1, $2) => (obj[$1] = $2))
  return obj;
}

// 创建请求参数
export function createQuery(data) {
  if (typeof data !== "object") {
    console.error("data must be a object");
    return;
  }
  let str = "";
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const val = data[key];
      str += `${key}=${val}&`;
    }
  }
  str = str.slice(0, str.length - 1);
  return str;
}

// 判断是否登录
export function judgeHaveLogin() {
  const token = JSON.parse(localStorage.getItem(USER_INFO))?.JwtToken || "";
  if (!token) {
    location.href = process.env.LOG_IN;
  }
}

/**
 * 填充表格空白行
 * @param value 只能严格相等null or undefined才可以  0 跟 false 有其含义
 */
export function fillTableBlank(value) {
  return value === "" ?  "--" : (value?? "--");
}

/**
 * 千分符 小数也处理
 * @param value Number
 *  @returns {String} 返回字符串
 */
 export const  MicrometerOperatorFormat =(val) => {
  if (!val) { return 0 }
  else {
    return (val + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
  }
}

/**
 * 整数千分符   2000.1111 = 2，000.1111
 * @param value Number
 *  @returns {String} 返回字符串
 */
export const MicrometerOperatorFormatInteger = (val) => {
  if (!val) {
    return 0;
  } else {
      if(val < 1) return (val + "")
      let valStr = (val + "").split('.')
      if(valStr.length === 1) return  (valStr[0]).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
      if(valStr.length > 1) return  (valStr[0]).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,") + `.${valStr[1]}`
  }
};


export const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

/**
 * 通过val 获取对象列表里面的name值
 * @param targetList
 * @param val
 */
export const getSelectNameByVal = (targetList, val, key = "Code", valueKey = "Name") => {
  if (val===undefined) {
    return;
  }
  return (targetList.find((item) => item[key] == val) || {})[valueKey];
};
