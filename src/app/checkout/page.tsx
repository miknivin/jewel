import { Metadata } from "next";
import CheckoutMain from "@/pages/checkout/checkout";

export const metadata: Metadata = {
  title: "Jewel - Checkout Page",
};

const CheckoutPage = () => {
  return <CheckoutMain />;
};

export default CheckoutPage;
