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
              placeholder="Phone Number"
              name="email"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.6601390779674!2d76.79318321504122!3d28.126385413558555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4b06fadbf66d%3A0x5d7dc31186e844bf!2sBonson%20Electrical%20Industries%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1679387504512!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
