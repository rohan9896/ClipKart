import React from "react";
import "./CategoriesPage.css";
import faker from "faker";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heading from "../Heading/Heading";
// import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: faker.datatype.uuid(),
    category: "Men's fashion",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Women's fashion",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Bags and Bagpacks",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Gadgets",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Sports and Active Wear",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Home decor",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Boy's Footwear",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Girl's Footwear",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Kids",
    img: faker.random.image(),
  },
  {
    id: faker.datatype.uuid(),
    category: "Infants",
    img: faker.random.image(),
  },
];

function CategoriesPage() {
  // let navigate = useNavigate();
  return (
    <>
      <div>
        <Heading text="CATEGORIES" />
        <div className="Category__list">
          {categories.map((category) => {
            return (
              <div key={category.id} className="category-card">
                <div>
                  <LazyLoadImage
                    effect="black-and-white"
                    style={{ width: "15rem", height: "17rem" }}
                    src={category.img}
                    alt="catrgory-card"
                  />
                </div>
                <span>{category.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
