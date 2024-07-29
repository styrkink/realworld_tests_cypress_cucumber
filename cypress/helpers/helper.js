const { faker } = require("@faker-js/faker");

export const user = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
};