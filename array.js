const 是否为数组 = (item) => {
    if (Object.prototype.toString.call(item) === '[object Array]') {
        return true
    }
    return false
}
const 删除元素 = (元素, 数组 = []) => {
    const index = 数组.indexOf(元素)
    if (index === -1) {
        console.error(`未在${数组}中查询到${元素}`);
        return
    }
    数组.splice(index, 1)
}

const 去重 = (数组 = []) => {

    return [...new Set(数组)]
}
const 切片 = (数组=[],开始索引=0,结束索引=0) => {
    const arr = []
    if(结束索引<0){
        结束索引 = 数组.length + 结束索引
    }
    if(开始索引<0){
        开始索引 = 数组.length + 开始索引
    }
    数组.forEach((item,index)=>{
        
        if((index>=开始索引) && index<=结束索引){
            arr.push(item)
        }

    })
    return arr
}

const 数组工具 = {
    是否为数组,
    删除元素,
    去重,
    切片,

}
module.exports = {
    数组工具
}