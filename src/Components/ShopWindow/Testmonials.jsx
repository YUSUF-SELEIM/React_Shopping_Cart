import Tilt from "react-parallax-tilt";

const Testimonials = () => {
  return (
    <div className="w-full px-4 flex flex-col space-y-5 md:flex-row justify-between items-center mt-16">
      <Tilt>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="./src/assets/medal.png" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">High Quality</h2>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="./src/assets/delivery.png" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fast Shipping</h2>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="./src/assets/refund.png" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Easy Refund</h2>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Testimonials;
