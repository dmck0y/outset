import { User } from './user.model';

export const findAll = () => User.findAll().then(user => console.log('users:', user));


export const controllers = {
    createOne(model, body) {
        return model.create(body);
    },

    findOne(model, body) {
        return model.find(body);
    }
};
export const findOne = model => (req, res, next) => {
    console.log(req.params)
    return controllers.findOne(model, {where: {title: req.params.title}}, body)
        .then(doc => { console.log('one', doc) res.status(200).json(doc) })
        .catch(err => next(err))
    User.find({where: {title: title}}).then(user => console.log('one', user));
}

export const createOne = (model) => (req, res, next) => {
    return controllers.createOne(model, req.body)
        .then(doc => res.status(201).json(doc))
        .catch(err => next(err))
}