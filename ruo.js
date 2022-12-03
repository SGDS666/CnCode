



const 若 = (条件=false,动作=()=>{}) => {
    const 条件列表 = []
    if(条件){
        条件列表.push(条件)
        动作()
        
    }
    const 反之 = (动作=()=>{}) => {
        const res = 条件列表.indexOf(true)
        if( res === -1){
            动作()
        }
        
        
    }
    const 或若 = (条件=false,动作=()=>{})=>{
        if(条件){
            条件列表.push(条件)
            动作()
        }
        return {或若,反之}
    }
    return {反之,或若}
    
}

module.exports = {
    若
}
