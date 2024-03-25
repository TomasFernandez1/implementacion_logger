import { faker } from '@faker-js/faker'

export const generateProducts = (index) => {
  return {
    index,
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: parseInt(faker.string.numeric()),
    description: faker.commerce.productDescription()
  }
}
