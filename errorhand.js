
class 错误处理 {
    
    运行 = (函数=()=>{}) => {

        const 捕获 = (错误回调=(e=new Error)=>{}) => {
            try {
                函数()
            } catch (error) {
                // this[errorSymbol]= error
                错误回调(error)
                
            }
            
        }
        return {捕获}
    }
    
}




module.exports = {
    错误处理:new 错误处理()
}