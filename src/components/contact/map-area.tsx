const MapArea = () => {
  return (
    <div className="it-map-area pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-discover-maps mb-35">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.6995996729424!2d76.05198287505377!3d11.573379488628012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzI0LjIiTiA3NsKwMDMnMTYuNCJF!5e0!3m2!1sen!2sin!4v1741188731233!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapArea;
