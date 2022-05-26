import React from "react";
import "./style.css";
const ContactEmail = () => {
  return (
    <>
      <div className="contact-wrap">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="mail-text-wrap">
              <p className="text-center">
                Feel free to reach out if you wanna collaborate with me, or simply
                have a chat
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-12">
           

          <div className="row justify-content-between">
              <div className="col-md-6 col-12">
                <button className="contact-mail">
                <i class="fa fa-envelope"></i>
                  <a href="mailto:levoanhhung@gmail.com">
                    levoanhhung@gmail.com
                  </a>
                </button>
              </div>
              <div className=" col-md-6 col-12">
                <button className="contact-mail text-center">
                <i class="fa fa-mobile-alt"></i>
                  <a href="tel:+84776463985">
                    +84776463985
                  </a>
                </button>
              </div>
            </div>
        </div>
      </div>
      </div>


    </>
  );
};

export default ContactEmail;
