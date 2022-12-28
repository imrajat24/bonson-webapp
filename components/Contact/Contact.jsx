import React from "react";

const Contact = () => {
  return (
    <div className="contact__wrap">
      <div className="contact__container">
        <div className="enclosed">
          <div className="contact row">
            <div className="contact-form">
              <div className="contact-form-wrap">
                <div className="content-wrap">
                  <div className="hero__heading">
                    <h1 className="heading">Contact Us</h1>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid expedita placeat modi nisi, iusto eum laboriosam
                      ducimus autem cupiditate labore.
                    </p>
                  </div>
                </div>
                <div className="form">
                  <form
                    action="https://formsubmit.co/88637bbf0300aa869530e2742ff13c23"
                    method="POST"
                    name="_next"
                    className="form"
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Email or Phone Number"
                      name="email"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter your Query here"
                      className="message"
                      name="message"
                      required
                    />

                    <button className="btn-submit" type="submit">
                      Get a quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-details row">
          <div className=" col phone">
            <div className="top">Phone Number</div>
            <div className="botton">+9534354544</div>
          </div>
          <div className="col email">
            <div className="top">Email</div>
            <div className="botton">info@dynamiccables.co.in</div>
          </div>
          <div className="col address">
            <div className="top">Address</div>
            <div className="botton">
              Dynamic Cables Limited F-260, Road Number 13 V.K.I Area, Jaipur,
              Rajasthan India
            </div>
          </div>
        </div>

        <div className="map">map</div>
      </div>
    </div>
  );
};

export default Contact;
