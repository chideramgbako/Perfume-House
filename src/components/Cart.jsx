import React, { useState, useContext } from "react";
import { perfumes } from "../data";
import { CartContext } from "../Context";
import ConfirmOrderModal from "./ConfirmOrderModal";


const Cart = () => {
  const {
    cart,
    totalPrice,
    removeItemFromCart,
    handleIncrease,
    handleDecrease,
    showModal,
    setShowModal,
    confirmOrder,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="rounded-2 border border-1 border-secondary p-2">
        <h2 className="fs-4 mb-4">My Cart Preview</h2>
        <h3 className="fs-5 text-danger">Cart is Empty</h3>
      </div>
    );
  }
  return (
    <div
      className="rounded-2 border border-1 border-secondary p-2"
      style={{ width: "320px" }}
    >
      {showModal && <ConfirmOrderModal showModal={showModal} setShowModal={setShowModal}/>}
      <h2 className="fs-4 mb-4">My Cart Preview</h2>
      <div>
        {cart.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className="d-flex justify-content-between mb-4"
            >

              <img src={cartItem.image} alt="" style={{ width: "95px" }} />
              <div>
                <h2 className="fs-6">{cartItem.title} </h2>
                <button
                  className={
                    cartItem.quantity <= 1
                      ? "bg-secondary-subtle text-white border-0"
                      : "main-color-bg text-white border-0"
                  }
                  onClick={() => handleDecrease(cartItem)}
                  disabled={cartItem.quantity <= 1}
                >
                  -
                </button>{" "}
                <span>{cartItem.quantity} </span>{" "}
                <button
                  className="main-color-bg text-white border-0"
                  onClick={() => handleIncrease(cartItem)}
                >
                  {" "}
                  +
                </button>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <h3 className="fs-6">#{cartItem.price} </h3>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeItemFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Sub Total</p>
        <h3 className="fs-5">{totalPrice}</h3>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Delivery</p>
        <h3 className="fs-5">2,000</h3>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Total</p>
        <h3 className="fs-5">{totalPrice + 2000}</h3>
      </div>

      <button className="main-color-bg border-0 p-2 rounded-2 w-100 my-2 text-white"
      onClick={confirmOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
