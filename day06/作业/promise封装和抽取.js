const fs = require('fs')

function p(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
p('./1.md').then(res => {
    console.log(res.toString());
}).then(() => {
    p('./2.md').then(res => {
        console.log(res.toString());
    })
}).then(() => {
    p('./3.md').then(res => {
        console.log(res.toString());
    })
})