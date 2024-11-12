import { createContext } from "react";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import { toast } from "react-toastify";

export const CartContext = createContext();

const getItem = JSON.parse(localStorage.getItem("cart")) || [];
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getItem);
  //add cart

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //add to cart
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
    toast.success("Product Added")
  };
  // calc total price
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  const removeItemFromCart = (item) => {
    const remainingItems = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(remainingItems);
    toast.success("Product Removed")
  };

  const handleIncrease = (item) => {
    const updateCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updateCart);
  };
  const handleDecrease = (item) => {
    const updateCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updateCart);
  };

  const [showModal, setShowModal] = useState(false);
  const confirmOrder = () => {
    setShowModal(true);
  };

  const startNewOrder= () => {
    setCart([]);
    setShowModal(false);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalPrice,
        removeItemFromCart,
        handleIncrease,
        handleDecrease,
        showModal,
        setShowModal,
        confirmOrder,
        startNewOrder, //add this to start a new order (modal)
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
