import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import ContactArea from "@/components/contact/contact-area";
import MapArea from "@/components/contact/map-area";
import Newsletter from "@/components/newsletter/newsletter";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import Wrapper from "@/layouts/wrapper";
import footerLogo from "@/assets/img/logo/light-logo.png";
const ContactMain = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Contact Us" subtitle="Contact" />

        <ContactArea />

        <MapArea />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>

      <FooterOne footerLogo={footerLogo} />
    </Wrapper>
  );
};
export default ContactMain;
