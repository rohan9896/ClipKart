import React from "react";
import "./Footer.css";

const footerDetails = [
  {
    id: 1,
    name: "Delivery",
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/truck.svg",
    line1: "Free Delivery",
    line2: "Delivery happens within 3-5 days",
  },
  {
    id: 2,
    name: "Payment",
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/payment.svg",
    line1: "Payment Options",
    line2: "Cash on Delivery",
  },
  {
    id: 3,
    name: "Support",
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/a1e961baa4dda6a20bb50123b9aa102aea3091ef/icons/ecomm/customer_support.svg",
    line1: "Customer Support",
    line2: "rohang9896@gmail.com",
  },
];

function Footer() {
  return (
    <>
      <footer>
        <div className="Footer__container">
          <div className="Footer__storeFeatures">
            {footerDetails.map((detailObj) => {
              return (
                <div
                  className="Footer__storeFeatures__singleFeature"
                  key={detailObj.id}
                >
                  <img src={detailObj.img} alt={detailObj.name} />
                  <span className="line1">{detailObj.line1}</span>
                  <span className="line2">{detailObj.line2}</span>
                </div>
              );
            })}
          </div>
          <div className="Footer__footerLinks">
            <p>Privacy Policy</p>
            <p>Refunds & Returns</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
