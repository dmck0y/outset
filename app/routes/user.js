import { Router } from 'express';
import { findAll, createOne, findOne } from '../resources/user/user.controller';
import { User } from '../resources/user/user.model';
// findAll()

const router = Router();

router.post('/create', createOne(User));

router.get('/user', findOne(User))


export default router;
