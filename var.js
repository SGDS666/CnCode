const 全局变量 = new Map();
const innerConst = {}
const 全局常量 = new Proxy(innerConst,{
    set(target,key,value){
        if(target[key]){
            throw new Error(`不能重复定义全局常量 ${key}`)
        }else{
            target[key] = value
        }
    },
    get(target,key){
        return target[key]
    }
    
})
const 变量 = (变量名,值) => {
    if(值){
        全局变量.set(变量名,值);
    }else{
        return 全局变量.get(变量名);
    }
}
const 常量 = (常量名="",值) => {
    if(值){
        全局常量[常量名] = 值;
    }else{
        return 全局常量[常量名]
    }
}
module.exports = {
    变量,
    常量
}
