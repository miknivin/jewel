import Image from "next/image";
import { DislikeSvg, LikeSvg } from "@/components/svg";
import TourReviewForm from "@/components/form/tour-review-form";

import avatarImg1 from "@/assets/img/inner-page/discover/client-1-1.jpg";
import avatarImg2 from "@/assets/img/inner-page/discover/client-1-2.jpg";
import avatarImg3 from "@/assets/img/inner-page/discover/client-1-3.jpg";

const clientData = [
  {
    id: 1,
    avatar: avatarImg1,
    author: "Seno T Shaju ",
    publishedDate: "March 8, 2020",
    description: `Our trip to Wayanad with Jewel Team was an unforgettable experience! The package was well-planned, covering all the must-visit spots like Edakkal Caves, Soochipara Falls, and Banasura Sagar Dam. The resort they arranged was cozy and surrounded by nature, making it perfect for a relaxing getaway. The team was highly professional, ensuring a smooth and hassle-free trip. Highly recommend Jewel Team for a stress-free Wayanad tour!*`,
  },
  {
    id: 2,
    avatar: avatarImg2,
    author: "Swathy Krishna",
    publishedDate: "January 21, 2022",
    description: `Jewel Team provided an excellent tour package for our Wayanad trip. From pickup to drop-off, everything was perfectly organized. The resort was top-notch, with a beautiful view of the hills and amazing food. They customized the itinerary based on our preferences, and the guides were very friendly and knowledgeable. A wonderful experience that I’d definitely book again!`,
  },
  {
    id: 3,
    avatar: avatarImg3,
    author: "Arun Ramachandran",
    publishedDate: "November 25, 2023",
    description: `We booked our Wayanad tour through Jewel Team, and it was one of the best decisions we made! The tour included thrilling activities like trekking and boating, along with visits to breathtaking viewpoints. The resort stay was luxurious yet affordable, with excellent hospitality. The Jewel Team took care of every little detail, making our trip seamless and memorable. Highly recommend their services!`,
  },
];

const ReviewBox = () => {
  return (
    <>
      {/* <h3 className="it-discover-title mb-35">
        {clientData.length} thoughts on “Discovery Island Kayak Tour”
      </h3> */}
      <div className="it-discover-client-wrap">
        {clientData.map((client) => (
          <div key={client.id} className="it-discover-client-item">
            <div className="it-discover-client-top mb-15 d-flex">
              <div className="it-discover-client-thumb">
                <Image
                  src={client.avatar}
                  alt={client.author}
                  width={80}
                  height={80}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="it-discover-client-content">
                <div className="it-discover-client-info mb-15 d-flex justify-content-between">
                  <div className="it-discover-client-left d-flex align-items-center">
                    <h3 className="it-discover-client-title">
                      {client.author}
                    </h3>
                    <span className="it-discover-client-meta">
                      {client.publishedDate}
                    </span>
                  </div>
                  <div className="it-discover-client-right">
                    {/* <div className="it-discover-client-notification d-flex align-items-center">
                      <span>Was this review helpful?</span>
                      <div className="it-discover-client-support d-flex align-items-center">
                        <div className="it-discover-client-support-icon">
                          <span>
                            <LikeSvg />
                          </span>
                          <p>7</p>
                        </div>
                        <div className="it-discover-client-support-icon">
                          <span>
                            <DislikeSvg />
                          </span>
                          <p>3</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="it-discover-client-review d-flex align-items-center">
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">Quality</h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">
                      Location
                    </h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">
                      Amenities
                    </h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-discover-client-review-item">
                    <h3 className="it-discover-client-review-title">Price</h3>
                    <div className="it-discover-client-rating">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>{client.description}</p>
          </div>
        ))}
      </div>
      {/* <h3 className="it-discover-title mb-25">Add a Comment</h3>
      <span>Your email address will not be published.</span>
      <div className="it-discover-reviwe-box mb-30">
        <div className="row align-items-center">
          <div className="col-xl-8">
            <div className="it-discover-client-review d-flex align-items-center">
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Quality</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Location</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Amenities</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Services</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="it-discover-client-review-item">
                <h3 className="it-discover-client-review-title">Price</h3>
                <div className="it-discover-client-rating">
                  <ul>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="it-discover-rating-box text-center">
              <span>5.00</span>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
        <div className="it-discover-review-form mt-30">
          <TourReviewForm />
        </div>
      </div> */}
    </>
  );
};
export default ReviewBox;
