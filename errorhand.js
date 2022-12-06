
class 错误处理 {
    
    运行 = (函数=()=>{}) => {
        let 其值 = null
        const 捕获 = (错误回调=(e=new Error)=>{}) => {
            try {
                其值 = 函数()
            } catch (error) {
                // this[errorSymbol]= error
                其值 = 错误回调(error)
                
            }
            return {结束动作,其值}
            
        }
        const 结束动作 = (动作=()=>{}) => {
            其值 = 动作?.()
        }
        return {捕获,其值}
    }
    
}




module.exports = {
    错误处理:new 错误处理()
}