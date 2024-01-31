/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import Testimonials from "./Testmonials";
import ShopNow from "./ShopNow";
import Footer from "./Footer";

export default function ShopWindow({ carouselImages }) {
  return (
    <div>
      <Navbar></Navbar>
      <ImageCarousel carouselImages={carouselImages}></ImageCarousel>
      <Testimonials></Testimonials>
      <ShopNow></ShopNow>
      <Footer></Footer>
    </div>
  );
}
