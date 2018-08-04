import db from '../db';

export default (modelName, model) => {
    return db.define(modelName, model);
}
