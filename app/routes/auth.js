import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/', (req, res) => {
    res.send('login');
});

router.post('/', 
    passport.authenticate('local'), 
    (req, res) => {
        res.redirect(`/users/${req.user.username}`);
    });

export default router;
