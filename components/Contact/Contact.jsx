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
                  <div className="content">
                    <h1 className="heading">Contact Us</h1>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid expedita placeat modi nisi, iusto eum laboriosam
                      ducimus autem cupiditate labore.
                    </p>
                  </div>
                </div>
                <div className="form">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Email or Phone Number" />
                  <input
                    type="text"
                    placeholder="Enter your Query here"
                    className="message"
                  />
                  <button className="btn-submit">Get a quote</button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="contact-details row">
          <div className=" col phone">6464</div>
          <div className="col email">dnkjsd</div>
          <div className="col address">fdsd</div>
        </div>

        <div className="map">map</div>
      </div>
    </div>
  );
};

export default Contact;
