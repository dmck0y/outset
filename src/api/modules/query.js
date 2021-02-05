import merge from 'lodash.merge';

const testData = {'msg': 'hello'}

export const controllers = {
    createOne (model, body) {
        return model.create(body);
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
        .then(doc => res.send(201).json(doc))
        .catch(err => next(err));
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
        res.send(`the param ${JSON.stringify(_)}`)
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
