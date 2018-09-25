import Sequelize from 'sequelize';
import initializeModel from '../initializeModel.js';

export const User = initializeModel('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

User.sync({force: true});
