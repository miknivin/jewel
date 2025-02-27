import Link from 'next/link';
import Image from 'next/image';
import { CloudSvg } from '../svg';

import aboutImg from '@/assets/img/home-3/about/thumb/about-3-1.png';
import shapeImg from '@/assets/img/home-3/about/shape/rocket.png';

const HeroBannerFive = () => {
  return (
    <div className="it-hero-area it-hero-3 it-hero-3-space it-about-style-3 grey-bg fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="it-hero-content-wrap p-relative">
              <div className="it-hero-title-box mb-30">
                <span
                  className="it-section-subtitle"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Create Lifetime Memories
                </span>
                <h3
                  className="it-slider-title text-black mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Explore Beyond with <br />
                  <span className=''>Skyfall Jewel</span> 
                </h3>
                <p data-aos="fade-up" data-aos-duration="1200">
                Embark on unforgettable journeys with Skyfall Jewel, your gateway to adventure. Explore beyond boundaries and discover the world’s hidden treasures!
                </p>
              </div>
              <div
                className="it-hero-button-area d-flex align-items-center"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <div className="it-hero-action mr-20">
                  <Link href="/about" className="it-btn-primary">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="it-about-thumb-wrap it-hero-3-thumb-pl d-flex justify-content-center">
              <div className="it-about-main-thumb z-index p-relative">
                <Image
                  src={aboutImg}
                  alt="About Img"
                  width={442}
                  height={584}
                  style={{ height: 'auto' }}
                />
                <span className="it-about-thumb-shape"></span>
                <div className="it-about-thumb-rocket d-none d-sm-block">
                  <Image
                    src={shapeImg}
                    alt="Shape Img"
                    width={341}
                    height={123}
                  />
                </div>
                <div className="it-about-thumb-cloud-1 d-none d-sm-block">
                  <span>
                    <CloudSvg />
                  </span>
                </div>
                <div className="it-about-thumb-cloud-2 d-none d-sm-block">
                  <span>
                    <CloudSvg />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerFive;
