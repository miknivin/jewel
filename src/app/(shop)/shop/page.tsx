import { Metadata } from "next";
import ShopMain from "@/pages/shop/shop";

export const metadata: Metadata = {
  title: "Jewels - Shop Page",
};

const ShopPage = () => {
  return <ShopMain />;
};

export default ShopPage;
