var faker = require("faker");

faker.seed(123);

function generateProductsData() {
  let productsData = [];
  for (let i = 0; i < 100; i++) {
    productsData = [
      ...productsData,
      {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        inStock: faker.datatype.boolean(),
        isNew: faker.datatype.boolean(),
        img: faker.image.image(),
        category: faker.random.arrayElement([
          "Men's fashion",
          "Women's fashion",
          "Accesories",
          "Bags and Bagpacks",
          "Gadgets",
          "Sports and Active Wear",
          "Home decor",
          "Boy's Footwear",
          "Girl's Footewear",
          "Kids",
          "Infants",
        ]),
        rating: faker.random.arrayElement([
          0.5,
          1,
          1.5,
          2,
          2.5,
          3,
          3.5,
          4,
          4.5,
        ]),
        popularity: faker.datatype.number(100)
      },
    ];
  }
  return productsData;
}

export const productsData = generateProductsData();
