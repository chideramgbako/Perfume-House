import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../Context";

const SinglePerfume = ({
  id,
  image,
  title,
  price,
  itemsLeft,
  rating,
  oldPrice,
  inCart
}) => {

  const {addToCart} = useContext(CartContext)
  return (
    <div
      style={{ width: "256.62px" }}
      className="border border-1 border-secondary rounded-2 mx-auto"
    >
      <img src={image} alt={title} className="w-100" />
      <div className="p-3">
        <h2 className="fs-6 fw-bold mb-2"> {title} </h2>
        <div className="d-flex gap-2">
          <p className="text-dark fw-bold">
            <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> {rating}
          </p>
          <p> ({itemsLeft}) </p>
        </div>
        <div className="d-flex gap-2">
          <h2 className="fs-5 main-color"> # {price}</h2>
          <h2 className="fs-5 text-decoration-line-through"> #{oldPrice}</h2>
        </div>
        <button
          style={{ height: "40px", cursor: inCart ? "not-allowed" : "pointer"}}
          className={`w-100 rounded-2 main-color-bg text-white border-0  ${inCart ? "bg-secondary-subtle" : "main-color-bg"}`}
          onClick={()=> addToCart({image, title, price, id})}
          disabled={inCart}
        >
          {inCart ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default SinglePerfume;
