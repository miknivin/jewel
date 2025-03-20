import { Metadata } from "next";
import BlogMain from "@/pages/blog/blog";

export const metadata: Metadata = {
  title: "Jewels - Blog Page",
};

const BlogPage = () => {
  return <BlogMain />;
};

export default BlogPage;
