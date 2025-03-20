import { Metadata } from "next";
import ShopMain from "@/pages/shop/shop";

export const metadata: Metadata = {
  title: "Jewel - Shop Page",
};

const ShopPage = () => {
  return <ShopMain />;
};

export default ShopPage;
