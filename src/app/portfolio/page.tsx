import { Metadata } from "next";
import PortfolioMain from "@/pages/portfolio/portfolio";

export const metadata: Metadata = {
  title: "Jewel - Portfolio Page",
};

const PortfolioPage = () => {
  return <PortfolioMain />;
};

export default PortfolioPage;
