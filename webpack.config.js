const merge = require('webpack-merge');

const ENV = process.argv.find((arg) => arg.includes('production')) ? 'production' : 'development';

const development = merge([
    {
        devtool: 'cheap-module-source-map',
        devServer: {
            port: 5002,
            host: '0.0.0.0',
        },
    },
]);

const production = merge([]);

module.exports = (mode) => merge(mode, ENV === 'production' ? production : development);
