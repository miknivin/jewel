const HeroBannerTwo = () => {
  return (
    <div className="it-slider-2-area it-slider-2-ovarlay it-slider-2-height p-relative">
      <div
        className="it-slider-2-bg"
        style={{
          backgroundImage: `url('/assets/img/home-2/slider/slider-bg.jpg')`,
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="it-slider-2-content-wrap z-index-5">
              <div className="it-slider-2-text">
                <h3
                  className="it-slider-title mb-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Get The Best Holiday Packages.
                </h3>
                <p data-aos="fade-up" data-aos-duration="1200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  tempor incididunt ut
                  <br /> labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
              <div
                className="it-slider-2-form p-relative"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <form action="#">
                  <div className="it-slider-2-input">
                    <input type="text" placeholder="Where are you going" />
                  </div>
                  <button className="it-btn-primary" type="submit">
                    Search
                  </button>
                </form>
                <div className="it-slider-2-input-icon">
                  <i className="flaticon-origami"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerTwo;
