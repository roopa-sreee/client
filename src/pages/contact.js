import React from "react";
import Layout from "../components/layout/Layout";
import { MdOutlineAlternateEmail, MdPhone, MdHeadphones } from "react-icons/md";

const contact = () => {
  return (
    <Layout title={"contact us - ShivaKarthikeyanStores"}>
      <div className="contact-us-container">
        <img
          src="https://res.cloudinary.com/dfxl8sk2x/image/upload/v1692761086/tele_caller_image_gexclw.jpg"
          alt="contact us"
          className="contact-us-image col-12 col-md-6"
        />
        <div className="contact-us-details-container col-12 col-md-6">
          <h1 className="contact-us-heading">CONTACT US</h1>
          <ul>
            <li className="contact-us-list-item">
              For any query related to products and orders feel free to call us
              anytime
              <br />
              We are available 24x7
            </li>
            <li className="contact-us-list-item">
              <MdOutlineAlternateEmail /> : www.help@shivakarthikeyanstores.com
            </li>
            <li className="contact-us-list-item">
              <MdPhone /> : 12345678
            </li>
            <li className="contact-us-list-item">
              <MdHeadphones /> : 1800-123-1234 &rbrack;toll-free &lbrack;
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
