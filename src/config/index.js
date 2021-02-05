import devConfig from './dev';
import prodConfig from './prod';

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const baseConfig = {
    port: process.env.NODE_PORT,
    secrets: {},
    db: {}
};

let envConfig = {};

switch (env) {
    case 'dev':
    case 'development':
        envConfig = devConfig
        break;
    case 'prod':
    case 'production':
        envConfig = prodConfig
        break;
    default:
        envConfig = devConfig
}

export default { ...baseConfig, ...envConfig };
