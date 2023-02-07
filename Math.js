const 九章算数 = {
    π:Math.PI,
    绝对值:n=>Math.abs(n),
    随机整数:(最小值=0,最大值=10)=>Math.round(Math.random()*(最大值-最小值 )+ 最小值),
    随机小数:(最小值=0,最大值=1)=>Math.random()*(最大值-最小值 )+ 最小值,
    四舍五入:(数字=1.5)=>Math.round(数字),
    向下取整:(数字=1.9)=>Math.floor(数字),
    向上去整:(数字=1.2)=>Math.ceil(数字),
    调整小数点:(数字=1.2312,位数=2)=>Number(数字.toFixed(位数)),
    取最大值:(...n)=>Math.max(...n),
    取最小值:(...n)=>Math.min(...n)
}

module.exports = 九章算数