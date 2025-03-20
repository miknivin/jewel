import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Logo from "@/assets/img/logo/logo.png";
import shapeImg1 from "@/assets/img/home-1/footer/left-tree.png";
import shapeImg2 from "@/assets/img/home-1/footer/right-tree.png";

interface FooterProps {
  footerClass?: string;
  footerLogo?: StaticImageData;
  btnClass?: string;
  copyRightClass?: string;
}

const FooterOne = ({
  footerClass,
  footerLogo,
  btnClass,
  copyRightClass,
}: FooterProps) => {
  return (
    <footer>
      <div
        className={
          footerClass
            ? footerClass
            : "it-footer-area p-relative pt-120 pb-135 black-bg fix"
        }
      >
        <div className="it-footer-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={306}
            height={323}
            style={{ height: "auto" }}
          />
        </div>
        <div className="it-footer-shape-2">
          <Image
            src={shapeImg2}
            alt="Shape Img"
            width={452}
            height={497}
            style={{ height: "auto" }}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="it-footer-widget footer-col-1 mb-60">
                <div className="it-footer-logo mb-35">
                  <Link href="/">
                    <Image
                      style={{ objectFit: "cover" }}
                      src={footerLogo ? footerLogo : Logo}
                      alt="Jewels"
                      width={129}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="it-footer-content">
                  <p>
                    Creating unforgettable journeys through stunning
                    destinations since 2020. Your next adventure awaits.
                  </p>
                  <div className="it-footer-social">
                    <a href="https://www.facebook.com/share/15t2C5v9t5/?mibextid=wwXIfr">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/skyfalljewel?igsh=ZHE3Ymk1dTAzOW1h">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="it-footer-widget footer-col-2 mb-60">
                <h3 className="it-footer-widget-title mb-55">Company:</h3>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>

                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="it-footer-widget footer-col-3 mb-60">
                <h3 className="it-footer-widget-title mb-55">Quick Links:</h3>
                <div className="it-footer-list">
                  <ul>
                    <li>
                      <a href="#">Privacy & policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & conditions</a>
                    </li>
                    {/* <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Hydropower Plants</a>
                    </li> */}
                    <li>
                      <a href="#">Customer support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="it-footer-widget p-relative footer-col-4 mb-60">
                <h3 className="it-footer-widget-title mb-55">
                  Subscribe Newsletter:
                </h3>
                <div className="it-footer-form">
                  <form action="#">
                    <div className="it-footer-input">
                      <input type="email" placeholder="Enter your email:" />
                    </div>
                    <button
                      type="submit"
                      className={btnClass ? btnClass : "it-btn-primary"}
                    >
                      Subscribe now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          copyRightClass ? copyRightClass : "it-copyright-area z-index"
        }
      >
        <div className="container">
          <div className="it-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-copyright-text text-center text-lg-start">
                  <p>
                    Copyright © 2024{" "}
                    <span>
                      <a href="#">Skyfall</a>
                    </span>{" "}
                    All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="it-copyright-privacy">
                  <a href="#">Privacy & Policy || Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterOne;
