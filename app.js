const http = require('http')
const readFiles = require('./readFiles')
const sayHi = require('./sayHi')
const names = require('./names')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello world http node \n')
        response.write(readFiles('test.txt'))
        response.end()
        return; // Prevents further code execution
    } else if (request.url === '/about') {
        response.write(sayHi(names.name3))
        response.write('\nLearn more about our services')
        response.end()
        return; // Prevents further code execution
    } else if (request.url === '/test'){
        response.write('testing')
        response.end()
        return
    }

    // If the URL doesn't match any routes, return a 404 message
    response.write("<h1>Page Not Found</h1>")
    response.end()
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})
