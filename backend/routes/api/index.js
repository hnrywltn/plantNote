//all routes in this file will be prefixed with (/api)



const router = require('express').Router();
//import and use othe api routes
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const plantsRouter = require('./plants.js');
const notesRouter = require('./notes.js');
const todosRouter = require('./todos.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/plants', plantsRouter);

router.use('/notes', notesRouter);

router.use('/todos', todosRouter);




// import auths and user model
// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

//TESTED with sending a post request with csrf from front end
// //test
// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

//TESTING////////////////////////////////////////////////////////
// //test user auth route
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// //test restore user middleware
// // GET /api/restore-user
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// //test require auth middleware
// // GET /api/require-auth
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
//TESTINGfin////////////////////////////////////////////////////////





module.exports = router;
