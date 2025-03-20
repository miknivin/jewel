import { Metadata } from "next";
import TourMain from "@/pages/tour/tour";

export const metadata: Metadata = {
  title: "Jewel - Tour Page",
};

const TourPage = () => {
  return <TourMain />;
};

export default TourPage;
