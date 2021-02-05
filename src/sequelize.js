import config from './config';
import Sequelize from 'sequelize';

const {name, user, password, host} = config.db;

export const sequelize = new Sequelize(name, user, password, {
    host: host,
    dialect: 'postgres',
});
