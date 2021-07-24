'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profileImg: {
      type: DataTypes.STRING
    },
  },
  //this adds extra protection with queries
    //model scope for currentUser that will exclude only the hashedPassword field. Finally, define another scope for including all the fields, which should only be used when checking the login credentials of a user.
      //These scopes need to be explicitly used when querying. For example, User.scope('currentUser').findByPk(id) will find a User by the specified id and return only the User fields that the currentUser model scope allows.
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });


  // will return an object with only the User instance information that is safe to save to a JWT.
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email, bio, profileImg } = this; // context will be the User instance
    return { id, username, email, bio, profileImg };
  };


  // accept a password string and return true if there is a match with the User instance's hashedPassword, otherwise it will return false.
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };


//  use the currentUser scope to return a User with that id.
User.getCurrentUserById = async function (id) {
  return await User.scope('currentUser').findByPk(id);
};


//  If the password is valid, then return the user by using the currentUser scope.
User.login = async function ({ credential, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });
  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id);
  }
};


// Create a User with the username, email, and hashedPassword
User.signup = async function ({ username, email, password, name, bio, profileImg }) {
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    username,
    email,
    hashedPassword,
    name,
    bio,
    profileImg,
  });
  return await User.scope('currentUser').findByPk(user.id);
};

User.associate = function(models) {
  User.hasMany(models.ToDo, {foreignKey: 'userId'});
  User.hasMany(models.Plant, {foreignKey: 'userId'});
  User.hasMany(models.Note, {foreignKey: 'userId'});
};
return User;
};
