const { faker } = require("@faker-js/faker");

export const user = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
};

export const article = {
  title: faker.lorem.sentence(),
  summary: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  tag: faker.lorem.word(),
}