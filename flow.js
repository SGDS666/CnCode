



const 若 = (条件 = false, 动作 = () => { }) => {
    const 条件列表 = []
    let 其值 = null
    if (条件) {
        条件列表.push(条件)
        其值 = 动作()

    }
    const 反之 = (动作 = () => { }) => {
        const res = 条件列表.indexOf(true)
        if (res === -1) {
            其值 = 动作()
        }
        return {其值}


    }
    const 或若 = (条件 = false, 动作 = () => { }) => {
        if (条件) {
            条件列表.push(条件)
            其值 = 动作()
        }
        return { 或若, 反之,其值 }
    }
    return { 反之, 或若,其值 }

}

const 对号入座 = (检测数据,默认值=null) => {
    let 其值 = 默认值
    const 为 = (匹配数据) => {

        const 则 = (动作) => {
            if (检测数据 === 匹配数据) {
                其值 = 动作()
            }
            return { 为, 其值 }
        }
        return { 则 }
    }
    
    return { 为 }
}

module.exports = {
    若,
    对号入座,
}
