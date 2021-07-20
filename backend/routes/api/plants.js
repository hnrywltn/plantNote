const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Plant } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



// const validatePlant = [
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





// Get plants
router.get('/', asyncHandler(async (req, res) => {
  const plants = await Plant.findAll({});
// console.log(plants);
  return res.json(plants);
}));




// Create plant
router.post(
  '/',
  // validatePlant,
  asyncHandler(async (req, res) => {
    const {name, binomialName, imgUrl, description, sunRequirements, userId} = req.body;
    const plant = await Plant.create({name, binomialName, imgUrl, description, sunRequirements, userId});

    // const json =  await plant.json();

console.log(plant.dataValues.id);
    return res.json(plant);
  }),
);













module.exports = router;
