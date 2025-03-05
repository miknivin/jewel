import ContactForm from "../form/contact-form";
import { ClockSvgTwo, LocationSvgThree, PhoneSvgTwo } from "../svg";

const ContactArea = () => {
  return (
    <div className="it-contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact-form-box">
              <ContactForm />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="it-contact-right">
              <ul>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <ClockSvgTwo />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Hours:</span>
                      <a href="#">
                        Monday - Friday: 8 AM - 5:30 PM <br />
                        Saturday - Sunday: Closed
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <PhoneSvgTwo />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Call Us:</span>
                      <a href="tel:+918075787424">+918075787424</a>
                      {/* <a href="tel:+88568956238">+88 568 956 238</a> */}
                    </div>
                  </div>
                </li>
                <li>
                  <div className="it-contact-box">
                    <div className="it-contact-icon">
                      <span>
                        <LocationSvgThree />
                      </span>
                    </div>
                    <div className="it-contact-text">
                      <span>Location:</span>
                      <a target="_blank" href="#">
                        Skyfall Jewel, Vellamkolly, <br /> Chundel, Wayanad
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
