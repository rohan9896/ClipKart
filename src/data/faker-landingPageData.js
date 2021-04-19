var faker = require("faker");

faker.seed(123);

function generateLandingPageData() {
  let biggestDeals = [];
  let trendingBrands = [];
  for (let i = 0; i < 12; i++) {
    biggestDeals = [
      ...biggestDeals,
      {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.image(),
      },
    ];
    trendingBrands = [
      ...trendingBrands,
      {
        id: faker.datatype.uuid(),
        brand: faker.company.companyName(),
        img: faker.image.image(),
        discountPercent: faker.random.arrayElement([
          10,
          20,
          30,
          40,
          50,
          60,
          70,
          80,
          90,
        ]),
      },
    ];
  }
  return { biggestDeals, trendingBrands };
}

export const landingPageData = generateLandingPageData();
