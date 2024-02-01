/* eslint-disable no-undef */
import Tilt from "react-parallax-tilt";
import "./testimonial.css";
const Testimonials = () => {
  return (
    <div className="w-full px-4 flex flex-col space-y-5 md:flex-row justify-between items-center mt-16">
      <Tilt>
        <div className="w-96 h-[70vh] flex flex-col items-center justify-around rounded shadow-lg">
          <img className="medal" />
          <div className="flex justify-center">
            <div className="font-bold text-xl mb-2">High Quality</div>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="w-96 h-[70vh] flex flex-col items-center justify-around rounded shadow-lg">
          <img className="delivery" />
          <div className="flex justify-center">
            <div className="font-bold text-xl mb-2">Fast Shipping</div>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="w-96 h-[70vh] flex flex-col items-center justify-around rounded shadow-lg">
          <img className="refund" />
          <div className="flex justify-center">
            <div className="font-bold text-xl mb-2">Easy Refund</div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Testimonials;
