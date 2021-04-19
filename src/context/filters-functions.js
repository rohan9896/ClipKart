export const getSortedData = (productList, sortBy) => {
  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b.price - a.price);
  }
  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a.price - b.price);
  }
  return productList;
};

export const getFilteredData = (
  productList,
  excludeOutOfStock,
  newProductsOnly
) => {
  return productList
    .filter((product) => (excludeOutOfStock ? product.inStock : true))
    .filter((product) => (newProductsOnly ? product.isNew : true));
};
