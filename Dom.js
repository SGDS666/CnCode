const 取 = (elementName="") => {
    return document.querySelector(elementName)
}
const 全取 = (elementName="") => {
    return document.querySelectorAll(elementName)
}
const 创建元素 = (elementType="")=>{
    return document.createElement(elementType)
}

const 页面 = {取,全取,创建元素}

module.exports = {
    页面
}