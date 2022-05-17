const router = require('express').Router();
const { createSession, verifySessionCookie } = require('./AuthSession');
const {
  models: { User },
} = require('../db');

module.exports = router;

// // GET /api/user/
// router.get('/', async (req, res, next) => {
//   try {
//     const [user, hasCreatedUser] = await User.findOrCreate({
//       where: { user_id: req.user },
//     });
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

router.put('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user);
    const { email, role, wallet } = req.body;
    res.send(await user.update({ email, role, wallet }));
  } catch (err) {
    next(err);
  }
});