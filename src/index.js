import express from 'express';
import config from './config';
import setupMiddleware from './middleware';
import models from './api/resources/models';

// knex migration
// passport auth
// bcrypt

import { restRouter } from './api';

const app = express();

setupMiddleware(app);

app.use('/v1', restRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
});
