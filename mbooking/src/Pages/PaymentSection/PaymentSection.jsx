import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../PaymentSection/PaymnetSectionCSSFILES.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const PaymentSection = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleToast = useToast();

  const navigate = useNavigate();
  const getDataPaymentValue = async () => {
    try {
      let res = await axios(`http://localhost:8080/carcart/${id}`);
      setData(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleConfirm = () => {
    handleToast({
      title: "Payment Successfull; .",
      description: "Thankyou from shopping with us.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/cart");
    }, 3000);

  };

  useEffect(() => {
    getDataPaymentValue();
  }, []);
  return (
    <div>
      <main className="container">
        <div className="main">
          {/* <!-- Shipping Address Section  --> */}
          <section className="shipping_address">
            <h2 className="ship_head">Shipping Address</h2>
            <div className="addresses">
              <form action="">
                <div className="address_primary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">John Doe</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">(305) 345-5678</p>
                  </div>
                  <div className="info">
                    <p className="bold">Address:</p>
                    <p className="light">312 Everette Alley, Miami, FL 33147</p>
                  </div>
                </div>
                <div className="address_secondary">
                  <div className="info">
                    <p className="bold">Name:</p>
                    <p className="light">John Doe</p>
                  </div>
                  <div className="info">
                    <p className="bold">Phone:</p>
                    <p className="light">(305) 345-5678</p>
                  </div>
                  <div className="info">
                    <p className="bold">Address:</p>
                    <p className="light">209 Marigold Lane, Miami, FL 33169</p>
                  </div>
                </div>
              </form>
            </div>
            <span className="new_address">+ add new address</span>
          </section>
          {/* <!-- Payment Method Section  --> */}
          <section className="payment_method">
            <h2 className="ship_head">Payment Method</h2>
            <div className="card_info">
              <div className="card_head">
                <h2 className="card_title">Debit or Credit Card</h2>
              </div>
              <div className="card_types">
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349230.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                  alt=""
                />
                <img
                  className="card_img"
                  src="https://img.icons8.com/fluency/512/mastercard.png"
                  alt=""
                />
              </div>
              <form action="">
                <input
                  type="text"
                  name="Name"
                  value=""
                  placeholder="Card Holder"
                  maxlength="60"
                />
                <input
                  type="text"
                  name="Number"
                  value=""
                  placeholder="Card Number"
                  maxlength="16"
                />
                <div>
                  <input
                    type="text"
                    name="Name"
                    value=""
                    placeholder="Expire"
                    maxlength="4"
                  />
                  <input
                    type="text"
                    name="Name"
                    value=""
                    placeholder="CVC"
                    maxlength="3"
                  />
                </div>
              </form>
              <span className="save_card">Save Card</span>
            </div>
            <div className="e_payment">
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5977/5977576.png"
                  alt=""
                />
              </div>
              <div className="pay">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                  alt=""
                />
              </div>
            </div>
            <button onClick={handleConfirm} className="confirm_btn">
              Confirm
            </button>
          </section>
          {/* <!-- Order Summary Section  --> */}
          <section className="order_summary">
            <h2 className="order_head">Order Summary</h2>
            <div className="order_price">
              <hr />
              <div className="price">
                <p>Order price:</p>
                <p>{data.fair}</p>
              </div>
              <div className="price">
                <p>Milage:</p>
                <p>{data.Milage}</p>
              </div>
              <div className="price">
                <p>Tax:</p>
                <p>₹300.25</p>
              </div>
              <br />
              <hr />
              <div className="total_price">
                <p className="dark">Total:</p>
                <p className="dark">{data.fair + data.Milage + 300.25}</p>
              </div>
            </div>
            <img
              className="qr_code"
              src="https://cdn-icons-png.flaticon.com/512/714/714390.png"
              alt=""
            />
            <p className="condition">
              Pay and Confirm Order by QR Code Using <b>Mobile Application</b>
            </p>
            <button className="review_btn">Review and Confirm</button>
          </section>
          <small className="project_by">
            <b>
              Develped by <span>Utkarsh Singhal</span>
            </b>
          </small>
        </div>
      </main>
    </div>
  );
};

export default PaymentSection;
