import React, { useState } from "react";
import "./BottomNav.css";
import { useNavigate } from 'react-router-dom';

const bottomNav = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/home.svg",
    name: "Shop",
    quantity: "",
    route: "/products"
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/category.svg",
    name: "Categories",
    quantity: "",
    route: "/categories"
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/8dde3b65380a2432ffc94bd652634054117b0159/icons/ecomm/cart.svg",
    name: "Cart",
    quantity: "0",
    route: "/cart"
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/1dcd8395b4bc7f50aaa79d0c36678fef583d1143/icons/ecomm/wishlist.svg",
    name: "Wishlist",
    quantity: "0",
    route: "/wishlist"
  },
];

function BottomNav() {
  const [selected, setSelected] = useState("Shop");
  let navigate = useNavigate();

  return (
    <>
      <nav className="ecommerceNav">
        <ul className="ecommerce__list">
          {bottomNav.map((item) => {
            return (
              <li onClick={() => {
                setSelected(item.name)
                navigate(`${item.route}`)
              }} key={item.id}>
                <div className="iconWithNum">
                  <img
                    className="ecomm__icon iconWithNum"
                    src={item.img}
                    alt="Icon with num"
                  />
                  <span
                    style={{
                      display: item.quantity ? null : "none",
                    }}
                  >
                    {item.quantity}
                  </span>
                </div>
                <p
                  style={{
                    color: selected === item.name ? "rgb(20, 110, 180)" : null,
                    fontWeight: selected === item.name ? "1000" : null
                  }}
                >
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default BottomNav;
