const fs = require('fs')

function fn() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.md', (err, data) => {
            reject('我是1.md的报错')
        })
    })
}

function fn2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.md', (err, data) => {
            reject('我是2.md的报错')
        })
    })
}

function fn3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.md', (err, data) => {
            reject('我是3.md的报错')
        })
    })
}
fn().then(res => {
    console.log(res);
    return res
}).then((data) => {
    console.log(data);
    let result = fn2().then(res => {
        console.log(res.toString());
    })
    return result + data
}).then((data1) => {
    console.log(data1);
    fn3().then(res => {
        console.log(res.toString());
    })
})