const server = require('dyson')
const path = require('path')

server.bootstrap({
    configDir: path.join(__dirname),
    port: 3000,
})