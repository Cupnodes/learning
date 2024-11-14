const fs = require('fs')
const path = require('path')

const readFiles = (filename) => {
    const filePath = path.resolve(__dirname, 'content', filename)
    const finalString = fs.readFileSync(filePath, 'utf-8')
    return finalString
}

module.exports = readFiles