const path = require('path')

// dev
module.exports = {
    entry: path.join(process.cwd(), 'app/app.js'),
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    }
}
