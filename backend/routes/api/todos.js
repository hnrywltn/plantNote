const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { ToDo } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



// const validateNote = [
//WORK IN PROGRESS!!!!!!!!!!!
//   check('email')
//     .exists({ checkFalsy: true })
//     .isEmail()
//     .withMessage('Please provide a valid email.'),
//   check('username')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 4 })
//     .withMessage('Please provide a username with at least 4 characters.'),
//   check('username')
//     .not()
//     .isEmail()
//     .withMessage('Username cannot be an email.'),
//   check('password')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 6 })
//     .withMessage('Password must be 6 characters or more.'),
//   handleValidationErrors,
// ];





// Get todos
router.get('/', asyncHandler(async (req, res) => {
  const todos = await ToDo.findAll({});
// console.log(todos);
  return res.json(todos);
}));




// Create todo
router.post(
  '/',
  // validatetodo,
  asyncHandler(async (req, res) => {
    const {userId, plantId, title, description, complete, dueDate} = req.body;
    const todo = await ToDo.create({userId, plantId, title, description, complete, dueDate});


    return res.json(todo);
  }),
);


// Edit todo
router.put(
  '/:id',
  // validatePlant,
  asyncHandler(async (req, res) => {
    const {id, userId, plantId, title, description, complete, dueDate} = req.body;
    const update = await ToDo.findByPk(id);
    const todo = await update.update({id, userId, plantId, title, description, complete, dueDate});

    return res.json(todo);
  })
);


// Delete todo
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const todo = await ToDo.findByPk(id);
    await todo.destroy();

    return res.json({ message: 'ToDo deleted' });
  })
);









module.exports = router;
