import { Metadata } from "next";
import DestinationMain from "@/pages/destination/destination";

export const metadata: Metadata = {
  title: "Jewel - Destination Page",
};

const DestinationPage = () => {
  return <DestinationMain />;
};

export default DestinationPage;
