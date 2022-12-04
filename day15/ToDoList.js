// 定义班级成员数据
//name  成员名称
//sex  成员性别   0（男） 1（女）
// checked  成员状态
var list = [{
    id: 1,
    name: "巴钦",
    sex: 0,
    checked: false
}, {
    id: 2,
    name: "程怀博",
    sex: 0,
    checked: false
}, {
    id: 3,
    name: "代伊涵",
    sex: 0,
    checked: false
}, {
    id: 4,
    name: "邓林柯",
    sex: 0,
    checked: false
}, {
    id: 5,
    name: "付高聪",
    sex: 0,
    checked: false
}, {
    id: 6,
    name: "高鹏亚",
    sex: 0,
    checked: false
}, {
    id: 7,
    name: "韩雨泽",
    sex: 0,
    checked: false
}, {
    id: 8,
    name: "郝嫚嫚",
    sex: 1,
    checked: false
}, {
    id: 9,
    name: "候建桥",
    sex: 1,
    checked: false
}, {
    id: 10,
    name: "江萌洋",
    sex: 1,
    checked: false
}, {
    id: 11,
    name: "李宏恩",
    sex: 0,
    checked: false
}, {
    id: 11,
    name: "刘艺",
    sex: 1,
    checked: false
}, {
    id: 12,
    name: "李妍",
    sex: 1,
    checked: false
}, {
    id: 13,
    name: "宋海宇",
    sex: 0,
    checked: false
}, {
    id: 14,
    name: "宋增杰",
    sex: 0,
    checked: false
}, {
    id: 15,
    name: "孙铭",
    sex: 0,
    checked: false
}, {
    id: 16,
    name: "孙旭瑶",
    sex: 1,
    checked: false
}, {
    id: 17,
    name: "王龙翔",
    sex: 0,
    checked: false
}, {
    id: 18,
    name: "王伟莀",
    sex: 0,
    checked: false
}, {
    id: 19,
    name: "吴倩",
    sex: 0,
    checked: false
}, {
    id: 20,
    name: "薛翔元",
    sex: 0,
    checked: false
}, {
    id: 21,
    name: "徐婉颖",
    sex: 1,
    checked: false
}, {
    id: 22,
    name: "杨志豪",
    sex: 0,
    checked: false
}, {
    id: 23,
    name: "张奥博",
    sex: 0,
    checked: false
}, {
    id: 24,
    name: "章涵语",
    sex: 0,
    checked: false
}, {
    id: 25,
    name: "张建雨",
    sex: 0,
    checked: false
}, {
    id: 26,
    name: "张立",
    sex: 0,
    checked: false
}, {
    id: 27,
    name: "张世权",
    sex: 0,
    checked: false
}, {
    id: 28,
    name: "张宗耀",
    sex: 0,
    checked: false
}, {
    id: 29,
    name: "郑峰",
    sex: 0,
    checked: false
}, {
    id: 30,
    name: "周璇",
    sex: 0,
    checked: false
}, ]

let timedate = document.querySelector('.Time') //获取时间节点
var ul = document.querySelector('.ul') //获取ul节点
var button = document.querySelectorAll('button')//获取底部按钮
var adio = document.querySelector('.adio')//获取播放器节点
var con=document.querySelector('.con')//获取天选之人节点
timedate.innerHTML = '时间:' + ' ' + dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss')
setInterval(() => {
    //定时一秒执行一次获取当前时间并进行赋值
    timedate.innerHTML = '时间:' + ' ' + dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss')
}, 1000)
//遍历渲染页面
for (let i = 0; i < list.length; i++) {
    var li = document.createElement('li')
    li.innerHTML = `<span>${list[i].name}</span>`
    ul.appendChild(li)
}
var num; //随机数
var time;
// 给每一个按钮绑定点击事件
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function (e) {
        if (e.target.innerHTML != '停止') {
            e.target.innerHTML = '停止'
            // 播放音频
            // adio.play()
            //重新加载src指定的资源
            adio.load()
            
            time = setInterval(() => {
                num = Math.ceil(Math.random() * 31)
                console.log(num);
            }, 1000)

        } else {
            //暂停音频
            adio.pause()
            clearTimeout(time)//清除定时器
            // 循环判断id相等就赋值
            for(let i=0;i<list.length;i++){
                if(list[i].id==num){
                    con.innerHTML=list[i].name
                }
            }
            if (i == 0) {
                e.target.innerHTML = '单人点名'
            }
            if (i == 1) {
                e.target.innerHTML = '双人点名'
            }
            if (i == 2) {
                e.target.innerHTML = '男生点名'
            }
            if (i == 3) {
                e.target.innerHTML = '女生点名'
            }
        }

    }
}