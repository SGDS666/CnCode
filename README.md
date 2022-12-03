# 这是一个简单的用中文来编写js的包
## 安装
``` shell
    npm i cncode
    
    yarn add cncode
```

## 导入
```javascript
    const { 打印, 固定循环, 条件循环,数组工具} = require("cnCode")
```

## 打印模块

```javascript   
const {打印} = require("cnCode")


打印.日志("666") //输出:666
打印.报错("啥") //输出:啥
  
```


## 循环模块

```javascript  
const {固定循环} = require('cnCode')

固定循环({ 次数: 3, 动作: (n) => 打印.日志(`第${n}次`) })
/*
输出:
第1次
第2次
第3次
 */

const {cnfor} = require('cnCode') //同理 方便英文输入使用
cnfor({ count: 3, action: (n) => console.log(`第${n}次`) })

```





```javascript  

const {条件循环} = require('cnCode')
let n1 = "嘎"
条件循环(
    {
        条件函数: () => n1 != "嘎嘎嘎嘎嘎", //条件函数返回布尔值 当返回值为false时 停止动作
        动作函数: () => {

            n1 += "嘎"
            打印.日志(n1)

        },
        前置运行: true,//可选 默认不前置运行一次
        结束动作: (n) => { //可选 会默认传入运行次数
            打印.日志(`结束了一共运行了${n}遍`,)
        }

    })

/*
输出:
嘎嘎
嘎嘎嘎
嘎嘎嘎嘎
嘎嘎嘎嘎嘎
结束了一共运行了4遍
*/
const {cnWhile} = require('cnCode') //同理 方便英文输入使用
cnWhile({
    condition: () => n1 != "嘎嘎嘎嘎嘎",
    action:() => {

        n1 += "嘎"
        打印.日志(n1)

    },
    preRun:true,
    endcallback:(n) => {
        打印.日志(`结束了一共运行了${n}遍`,)
    }
})
```
## 数组操作
```javascript
const {数组工具,arrTool} = require('cnCode')
const arr1 = [1,2,3,4,5,6,"非常溜",7,8,90,0,2,3,4,5,"无敌","很强"]
const arr2 = 数组工具.切片(arr1,-5,-1)//arrTool.slice(arr1,-5,-1)
const arr3 = 数组工具.切片(arr1,0,-1)//arrTool.slice(arr1,0,-1)

打印.日志(arr2);
//输出: [ 3, 4, 5, '无敌', '很强' ]

打印.日志(arr3);
//输出:[1,2,3,4,5,6,"非常溜",7,8,90,0,2,3,4,5,"无敌","很强"]

const arr4 = 数组工具.去重(arr1) // arrTool.nrepeat(arr1)
打印.日志(arr4);
//输出:[1,2,3,4,5,6,"非常溜",7,8,90,0,"无敌","很强"]

数组工具.删除元素("非常溜",arr4) // arrTool.delete("非常溜",arr4)
打印.日志(arr4);
//输出:[1,2,3,4,5,6,7,8,90,0,"无敌","很强"]

```

## 计时器模块
```javascript
const {时间} = require('cnCode')
时间.同步等待(2000,true)
// 同步等待: (秒数?: number 毫秒, 开启日志?: boolean) => void
/*
开始等待
等待计时: 2.000s
 */
时间.异步等待(()=>{ //自动清除计时器标识
    // 异步等待: (回调函数?: () => void, 秒数?: number 毫秒) => void
    打印.日志(666)
},1000)

const 清理函数 = 时间.循环定时器((n)=>{ //返回清理当前循环计时器标识的函数 
    打印.日志(n)
},1000)
/**
循环定时器: (回调函数?: (n?: 次数) => void, 秒数?: number 毫秒) => {
    清理函数: () => void;
}
输出
1
2
3
4
5
6
7
.....
 */

const {time} = require('cnCode') //方便英文输入使用
time.sleep(2000)

time.timeout(()=>{
    console.log(666);
},1000)

const clear = time.interval((n)=>{
    console.log(n);
},1000)


```