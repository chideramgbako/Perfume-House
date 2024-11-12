import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "../context";
import { TbCurrencyNaira } from "react-icons/tb";
import { VscClose } from "react-icons/vsc";
import successicon from "../assets/SuccessIcon.png";

const ConfirmOrderModal = ({ showModal, setShowModal }) => {
  const { totalPrice, cart, startNewOrder } = useContext(CartContext);
  return (
    <div>
      <Modal centered show={showModal}>
        <Modal.Body>
          <div className="p-2">
            <div className="d-flex justify-content-between">
              <img src={successicon} alt="" />
              <span className="fs-4">
                <button className="border-0 bg-transparent">
                  <VscClose />
                </button>
              </span>
            </div>
            <h1 className="fw-6">Order Confirmed</h1>
            <p>We hope you enjoy your order</p>
            <div>
              {cart.map((perfume) => {
                return (
                  <div key={perfume.id}>
                    <div className="d-flex justify-content-between my-3">
                      <div className="d-flex gap-3">
                        <img
                          className="w-25 rounded-2"
                          src={perfume.image}
                          alt={perfume.title}
                        />
                        <div>
                          <p>{perfume.title}</p>
                          <div className="d-flex gap-1">
                            <p>
                              <span style={{ color: "#5D5D5D" }}>
                                {perfume.quantity}x
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#5D5D5D" }}>
                                <TbCurrencyNaira />
                                {perfume.price}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p>
                          <TbCurrencyNaira />
                          {perfume.quantity * perfume.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-between">
              <p>Order Total</p>
              <div className="d-flex">
                <span>
                  <TbCurrencyNaira />
                  {totalPrice}
                </span>
              </div>
            </div>
            <button
              onClick={startNewOrder}
              style={{ height: "64px" }}
              className="w-100 main-color-bg border-0 rounded-2 text-white fs-6"
            >
              Start a new order
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmOrderModal;
