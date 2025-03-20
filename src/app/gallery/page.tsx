import { Metadata } from "next";
import GalleryMain from "@/pages/galley/gallery";

export const metadata: Metadata = {
  title: "Jewel - Gallery Page",
};

const GalleryPage = () => {
  return <GalleryMain />;
};

export default GalleryPage;
