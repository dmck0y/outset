import merge from 'lodash.merge';
import db from '../../db';

const testData = {'msg': 'hello'}

export const controllers = {
    createOne (model, body) {
        return Promise.resolve(testData)
    },

    updateOne (docToUpdate, update) {
        return Promise.resolve(testData)
    },

    deleteOne (docToDelete) {
        return Promise.resolve(testData)
    },

    getOne (docToGet) {
        return Promise.resolve(testData)
    },

    getAll (model) {
        return Promise.resolve(testData)
    },

    findByParam (model, id) {
        return Promise.resolve(testData)
    }
};

export const createOne = (model) => (req, res, next) => {
    return controllers.createOne(model, req.body) 
}

export const updateOne = (model) => (req, res, next) => {
    return controllers.updateOne(req.docFromId, update)
}

export const deleteOne = (model) => (req, res, next) => {
    return controllers.deleteOne(req.docToDelete)
}

export const getOne = (model) => (req, res, next) => {
    return controllers.getOne()
}

export const getAll = (model) => (req, res, next) => {
    return controllers.getAll(model)
}

export const findByParam = (model) => (req, res, next) => {
    const { id }= req.params;
    return controllers.findByParam(model).then( _ => {
        res.send(`the param ${id}`)
    })
}

export const generateControllers = (model, overrides = {}) => {
    const defaults = {
        findByParam: findByParam(model),
        getAll: getAll(model),
        getOne: getOne(model),
        deleteOne: deleteOne(model),
        updateOne: updateOne(model),
        createOne: createOne(model)
    };

    return {...defaults, ...overrides};
}
