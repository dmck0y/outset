import express from 'express';
import config from './config';
import setupMiddleware from './middleware';
// import session from 'express-session';

// import RedisStore from ('connect-redis')session;

import auth from './routes/auth';
import user from './routes/user';

const app = express();

// app.use(session({
//     store: new RedisStore({host: process.env.REDIS_URL}),
//     secret: 'not a secret',
//     saveUninitialized: true,
//     resave: false
// }));

setupMiddleware(app);

// app.get('/', (req, res) => {
//     console.log(session)
//     res.send(`Hello World! session`);
// });

app.use('/', auth);
app.use('/user', user);

app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
});
