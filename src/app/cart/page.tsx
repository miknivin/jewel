import { Metadata } from "next";
import CartMain from "@/pages/cart/cart";

export const metadata: Metadata = {
  title: "Jewels - Cart Page",
};

const CartPage = () => {
  return <CartMain />;
};

export default CartPage;
