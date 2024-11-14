const capitalizeName = require("./capitalizeName")
const removeAllNumbers = require("./removeAllNumbers")

const sayHi = (name) => {
    return `Hi ${removeAllNumbers(capitalizeName(name))}!`
}

module.exports = sayHi
