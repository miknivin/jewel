import React from 'react';
import FaqOne from '../../faq/item/faq-one';

const TourDetailsFaq = ({ faqData }: { faqData: any[] }) => {
  return (
    <div className="it-faq-area p-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="it-faq-wrap">
              <div className="it-custom-accordion it-custom-accordion-style-3">
                <FaqOne faqs={faqData} preExpand={faqData[0]?.uuid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsFaq;
