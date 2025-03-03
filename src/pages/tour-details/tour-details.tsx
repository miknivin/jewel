import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Newsletter from "@/components/newsletter/newsletter";
import TourDetailsArea from "@/components/tour/details/tour-details-area";
import FooterOne from "@/layouts/footers/footer-one";
import HeaderOne from "@/layouts/headers/header-one";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
import { ITourDT } from "@/types/tour-packages-d-t";
import footerLogo from "@/assets/img/logo/light-logo.png";
interface TourDetailsProps {
  tour: ITourDT;
}

const TourDetailsMain = ({ tour }: TourDetailsProps) => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <Breadcrumb title={tour?.title} subtitle="Tour" />

        <TourDetailsArea tour={tour} />

        <Newsletter itemClass="it-newsletter-area it-newsletter-height fix p-relative theme-bg" />
      </main>
      <FooterOne footerLogo={footerLogo} />
    </Wrapper>
  );
};
export default TourDetailsMain;
