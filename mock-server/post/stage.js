const g = require('dyson-generators')

module.exports = {
    path: '/stage',
    template: {
        id: g.id,
        name: (params, query, data) => data.name || '',
        order: (params, query, data) => data.order || 0,
        created: new Date(),
    },
}