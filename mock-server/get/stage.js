const g = require('dyson-generators')

module.exports = {
    path: '/stage/:id',
    template: {
        id: g.id,
        name: g.name
    }
}