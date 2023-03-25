import React from "react";

const Contact = () => {
  return (
    <div className="contact__wrap">
      <div className="contact ">
        <div className="contact-form-wrap">
          <div className="form__heading">
            <h2 className="heading">Contact Us</h2>
          </div>
          <form
            action="https://formsubmit.co/info@bonson.in"
            method="POST"
            name="_next"
            className="form"
          >
            <input type="text" placeholder="Full Name" name="name" required />
            <input type="text" placeholder="Name of Company" name="company" />
            <input type="email" placeholder="Email" name="email" required />

            <input
              type="tel"
              name="country_code"
              placeholder="Phone Number"
              title="Error Message"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
            <input
              type="text"
              placeholder="Enter your Query here"
              className="message"
              name="message/phone"
              required
            />

            <button className="btn btn-submit" type="submit">
              Connect with Us
            </button>
          </form>
        </div>
      </div>

      <section className="contact-details row">
        <div className="col phone">
          <p className="top">Phone Number</p>
          <p className="botton">+91 1493 294 181</p>
        </div>
        <div className="col email">
          <p className="top">Email</p>
          <p className="botton">info@bonson.in</p>
        </div>
        <div className="col address">
          <p className="top">Address</p>
          <p className="botton">
            Bonson Electrical Industries Pvt Ltd, E-41(C), RIICO Industrial
            Area, Khushkhera, Rajasthan-301707
          </p>
        </div>
      </section>

      <div className="map">
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={400}
            frameborder="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=E-41(C),%20RIICO%20Industrial%20Area,%20Khushkhera,%20District%20Alwar,%20Rajasthan-301707+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
