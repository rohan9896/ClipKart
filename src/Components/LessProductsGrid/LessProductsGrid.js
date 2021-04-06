import React from "react";
import Heading from "../Heading/Heading";
import "./LessProductsGrid.css";

const BiggestDealsArr = [
  {
    id: 1,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165690/2020/3/19/3a1dd5c4-711d-4671-bac9-67821d5beea41584598837780-Levis-Men-Tshirts-2281584598835911-1.jpg",
    brand: "Levis",
    secondLine: "Flat 90% OFF",
  },
  {
    id: 2,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165556/2020/3/19/8fcffbb2-0ba3-4f42-864c-b84b653b31581584617186057-Levis-Men-White-Printed-Round-Neck-T-shirt-3601584617184522-1.jpg",
    brand: "Adidas",
    secondLine: "Upto 30% OFF",
  },
  {
    id: 3,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12450412/2020/10/20/c6876673-8621-4a81-9ec3-8c313df485eb1603179503126-Levis-Men-Tshirts-3881603179501745-1.jpg",
    brand: "Roadster",
    secondLine: "Flat 20% OFF",
  },
  {
    id: 4,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13041134/2021/2/10/4aa6ee60-fc5c-44dd-a35e-a08e96eb6da31612957701292-HRX-by-Hrithik-Roshan-Men-Green-Dyed-Round-Neck-T-shirt-9731-1.jpg",
    brand: "HRX",
    secondLine: "Buy 1 get 2 FREE",
  },
  {
    id: 5,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11363816/2020/6/17/120be224-2d31-4c67-b4b6-8169d84754211592400504280-WROGN-Men-Tshirts-1221592400502463-1.jpg",
    brand: "WRONGN",
    secondLine: "Flat 95% OFF",
  },
  {
    id: 6,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg",
    brand: "Allen Solly",
    secondLine: "First Time On Sale",
  },
  {
    id: 1,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165690/2020/3/19/3a1dd5c4-711d-4671-bac9-67821d5beea41584598837780-Levis-Men-Tshirts-2281584598835911-1.jpg",
    brand: "Levis",
    secondLine: "Flat 90% OFF",
  },
  {
    id: 2,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165556/2020/3/19/8fcffbb2-0ba3-4f42-864c-b84b653b31581584617186057-Levis-Men-White-Printed-Round-Neck-T-shirt-3601584617184522-1.jpg",
    brand: "Adidas",
    secondLine: "Upto 30% OFF",
  },
  {
    id: 3,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12450412/2020/10/20/c6876673-8621-4a81-9ec3-8c313df485eb1603179503126-Levis-Men-Tshirts-3881603179501745-1.jpg",
    brand: "Roadster",
    secondLine: "Flat 20% OFF",
  },
  {
    id: 4,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13041134/2021/2/10/4aa6ee60-fc5c-44dd-a35e-a08e96eb6da31612957701292-HRX-by-Hrithik-Roshan-Men-Green-Dyed-Round-Neck-T-shirt-9731-1.jpg",
    brand: "HRX",
    secondLine: "Buy 1 get 2 FREE",
  },
  {
    id: 5,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11363816/2020/6/17/120be224-2d31-4c67-b4b6-8169d84754211592400504280-WROGN-Men-Tshirts-1221592400502463-1.jpg",
    brand: "WRONGN",
    secondLine: "Flat 95% OFF",
  },
  {
    id: 6,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg",
    brand: "Allen Solly",
    secondLine: "First Time On Sale",
  },
  {
    id: 1,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165690/2020/3/19/3a1dd5c4-711d-4671-bac9-67821d5beea41584598837780-Levis-Men-Tshirts-2281584598835911-1.jpg",
    brand: "Levis",
    secondLine: "Flat 90% OFF",
  },
  {
    id: 2,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11165556/2020/3/19/8fcffbb2-0ba3-4f42-864c-b84b653b31581584617186057-Levis-Men-White-Printed-Round-Neck-T-shirt-3601584617184522-1.jpg",
    brand: "Adidas",
    secondLine: "Upto 30% OFF",
  },
  {
    id: 3,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12450412/2020/10/20/c6876673-8621-4a81-9ec3-8c313df485eb1603179503126-Levis-Men-Tshirts-3881603179501745-1.jpg",
    brand: "Roadster",
    secondLine: "Flat 20% OFF",
  },
  {
    id: 4,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13041134/2021/2/10/4aa6ee60-fc5c-44dd-a35e-a08e96eb6da31612957701292-HRX-by-Hrithik-Roshan-Men-Green-Dyed-Round-Neck-T-shirt-9731-1.jpg",
    brand: "HRX",
    secondLine: "Buy 1 get 2 FREE",
  },
  {
    id: 5,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11363816/2020/6/17/120be224-2d31-4c67-b4b6-8169d84754211592400504280-WROGN-Men-Tshirts-1221592400502463-1.jpg",
    brand: "WRONGN",
    secondLine: "Flat 95% OFF",
  },
  {
    id: 6,
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg",
    brand: "Allen Solly",
    secondLine: "First Time On Sale",
  },
];

function LessProductsGrid() {
  return (
    <>
      <div className="ShowCaseSection__productsContainer">
        <Heading text="BIGGEST DEALS ON TOP BRANDS" />
        <div className="ShowCaseSection__productsList">
          {BiggestDealsArr.map((product) => {
            return (
              <div key={product.id} className="card2">
                <img alt="prod" src={product.img} />
                <span className="card2__brand">{product.brand}</span>
                <span>{product.secondLine}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LessProductsGrid;
