const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Note } = require('../../db/models');

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





// Get notes
router.get('/', asyncHandler(async (req, res) => {
  const notes = await Note.findAll({});
// console.log(notes);
  return res.json(notes);
}));




// Create Note
router.post(
  '/',
  // validateNote,
  asyncHandler(async (req, res) => {
    const {userId, plantId, body, waterFreq} = req.body;
    const note = await Note.create({userId, plantId, body, waterFreq});


    return res.json(note);
  }),
);


// Edit plant
router.put(
  '/:id',
  // validatePlant,
  asyncHandler(async (req, res) => {
    const {id, userId, plantId, body, waterFreq} = req.body;
    const update = await Note.findByPk(id);
    const note = await update.update({id, userId, plantId, body, waterFreq});

    return res.json(note);
  })
);


// Delete plant
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    await note.destroy();

    return res.json({ message: 'Note deleted' });
  })
);









module.exports = router;
