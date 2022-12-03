const 同步等待 = (秒数=1000,开启日志=false) => {
    开启日志&&console.time("等待计时");
    开启日志&&console.log('开始等待');
    const startTime = new Date().getTime()

    
    while (true){
        const time = new Date().getTime()
        if(time>=startTime+(秒数)){
            开启日志&&console.timeEnd("等待计时");
            break
        }
    }
}
const 异步等待 = (回调函数=()=>{},秒数=1000) => {
    const timer = setTimeout(()=>{
        回调函数()
        clearTimeout(timer)
    }, 秒数);
    
}
const 循环定时器 = (回调函数=(n=0)=>{},秒数=1000) => {
    let n = 0
    const timer = setInterval(() => {
        n++
        回调函数(n)
    }, 秒数);
    const 清理函数 = ()=>clearInterval(timer)
    return {清理函数}
}



const 时间 = {
    同步等待,
    异步等待,
    循环定时器
}
const time = {
    sleep:同步等待,
    timeout:异步等待,
    interval:循环定时器
}
module.exports ={
    时间,
    time
}