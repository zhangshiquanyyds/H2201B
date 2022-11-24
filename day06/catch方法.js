const fs=require('fs')
function getcacth1(){
    return new Promise((resolve, reject) => {
        fs.readFile('./作业/1.md',(err,data)=>{
            // if(err) reject(err)
            reject('我是作业1.报错')
        })
    })
}
function getcacth2(){
    return new Promise((resolve, reject) => {
        fs.readFile('./作业/2.md',(err,data)=>{
            reject('我是作业1.报错')
        })
    })
}
function getcacth3(){
    return new Promise((resolve, reject) => {
        fs.readFile('./作业/3.md',(err,data)=>{
            reject('我是作业1.报错')
        })
    })
}
getcacth1().then()
