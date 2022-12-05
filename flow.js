



const 若 = (条件 = false, 动作 = () => { }) => {
    const 条件列表 = []
    if (条件) {
        条件列表.push(条件)
        动作()

    }
    const 反之 = (动作 = () => { }) => {
        const res = 条件列表.indexOf(true)
        if (res === -1) {
            动作()
        }


    }
    const 或若 = (条件 = false, 动作 = () => { }) => {
        if (条件) {
            条件列表.push(条件)
            动作()
        }
        return { 或若, 反之 }
    }
    return { 反之, 或若 }

}

const 对号入座 = (检测数据,默认值=null) => {
    let 匹配值 = 默认值
    const 为 = (匹配数据) => {

        const 则 = (动作) => {
            if (检测数据 === 匹配数据) {
                匹配值 = 动作()
            }
            return { 为, 匹配值 }
        }
        return { 则 }
    }
    
    return { 为 }
}
const cnSwitch = (value,defalut=null) => {
    let Return = defalut
    const is = (checkvalue) => {
        
        const then = (action=()=>{}) => {
            if (value === checkvalue) {
                Return = action()
            }
            
            return { is, Return }
        }
        return { then }
    }
    
    return { is }
}

module.exports = {
    若,
    对号入座,
    cnSwitch
}
