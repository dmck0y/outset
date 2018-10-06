import { readdirSync, lstatSync } from 'fs';
import { join, basename } from 'path';
import Sequelize from 'sequelize';
import { sequelize } from '../../sequelize';

const baseName = basename(__filename);
const db = {};

const isDirectory = source =>
    lstatSync(source).isDirectory();

const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)


getDirectories(__dirname)
    .forEach(path =>
        readdirSync(path)
            .filter(file => {
                return (
                    file.indexOf('.') !== 0) && 
                    (file !== baseName) && 
                    (file.slice(-9) === '.model.js'
                );
            })
            .forEach(file => {
                console.log('join', join(__dirname, basename(path), file))
                const model = sequelize['import'](join(__dirname, basename(path), file));
                db[model.name] = model;
            })
    );

Object.keys(db).forEach(modelName => {
    if(db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
