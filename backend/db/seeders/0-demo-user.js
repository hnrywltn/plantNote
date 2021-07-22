'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo-lition',
        name: 'Demo User',
        bio: faker.lorem.sentence(),
        profileImg: 'https://assets.vogue.com/photos/5c8ff6c0ac563c2de0043d1d/3:4/w_1950,h_2600,c_limit/00-promo-image-boys-with-plants-book.jpg',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },



      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: faker.name.findName(),
        name: 'FakeUser',
        bio: faker.lorem.sentence(),
        profileImg: 'https://thispersondoesnotexist.com/',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

//add
  //name
  //bio
  //profileImg
