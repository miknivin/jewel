import Image from "next/image";
import Link from "next/link";

import shapeImg1 from "@/assets/img/home-1/about/shape/cloud.png";
import shapeImg2 from "@/assets/img/home-1/about/shape/rocket.png";
import aboutImg1 from "@/assets/img/home-1/about/img/img-1.webp";
import aboutImg2 from "@/assets/img/home-1/about/img/img-2.webp";
import aboutImg3 from "@/assets/img/home-1/about/img/img-3.webp";

const AboutOne = () => {
  return (
    <div
      className="it-about-area it-about-bg pt-120 pb-175 p-relative grey-bg"
      style={{ backgroundImage: `url(/assets/img/home-1/about/about-bg.png)` }}
    >
      <div className="it-about-shape-box">
        <div className="it-about-shape-1">
          <Image
            src={shapeImg1}
            alt="Shape Img"
            width={169}
            height={79}
            style={{ height: "auto" }}
          />
        </div>
        <div className="it-about-shape-2 d-none d-xxl-block">
          <Image src={shapeImg2} alt="Shape Img" width={341} height={123} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 oder-md-1"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="it-about-thumb-wrap">
              <div className="it-about-main-thumb p-relative text-center">
                <Image
                  src={aboutImg1}
                  alt="About Img"
                  width={419}
                  height={350}
                  style={{ height: "auto" }}
                />
                <div className="it-about-sub-thumb-1 d-none d-lg-block">
                  <Image
                    src={aboutImg2}
                    alt="About Img"
                    width={264}
                    height={265}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="it-about-sub-thumb-2 d-none d-lg-block">
                  <Image
                    src={aboutImg3}
                    alt="About Img"
                    width={244}
                    height={244}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 oder-md-0"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="it-about-content">
              <div className="it-about-title-box mb-20">
                <span className="it-section-subtitle">
                  Adventure Awaits, Experience Calls
                </span>
                <h3 className="it-section-title mb-20">
                  Experience the extraordinary with Skyfall Jewel
                </h3>
                <p className="text-black">
                  Founded in 2020 as Skyfall Holidays, we've evolved into
                  Skyfall Jewel Tours & Travels to better reflect our expanded
                  services and commitment to creating gem-like experiences that
                  shine in your memory forever. As part of the respected Skyfall
                  parent company, we combine years of expertise with innovative
                  approaches to travel and events.
                </p>
              </div>
              {/* <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-worker"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    Safety First Always
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit involuptate <br />{' '}
                    velit esse cillum dolore
                  </p>
                </div>
              </div>
              <div className="it-about-service-item mb-40 d-flex align-items-center">
                <div className="it-about-service-icon mr-20">
                  <span>
                    <i className="flaticon-tour-guide"></i>
                  </span>
                </div>
                <div className="it-about-service-text">
                  <h3 className="it-about-service-title">
                    Nllamco laboris nisi
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit involuptate <br />{' '}
                    velit esse cillum dolore
                  </p>
                </div>
              </div> */}
              <Link href="/about" className="it-btn-primary">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutOne;
