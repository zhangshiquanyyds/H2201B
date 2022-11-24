const fs = require('fs')

function getlist1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function getlist2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

function getlist3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
getlist1().then(res => {
    console.log(res.toString());
}).then(() => {
    getlist2().then(res => {
        console.log(res.toString());
    })
}).then(() => {
    getlist3().then(res => {
        console.log(res.toString());
    })
})




