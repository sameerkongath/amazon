import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://www.webfx.com/blog/wp-content/uploads/2019/10/banner-ad-example-online.png"
          alt=""
        />
        <div>
        <h3>Hello {user.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right"></div>
        <Subtotal />
    </div>
  );
}

export default Checkout;
