import "./App.css";

function App() {
  return (
    <>
      <div className="main-container h-screen md:max-w-6xl mx-auto md:flex md:flex-col md:justify-center ">
        <div className="part-1 md:flex md:mx-0 md:h-auto ">
          <div className="text-section md:w-1/2 mb-16 md:mb-10">
            <h1 className="px-20 mt-16 md:mt-0 mb-5 text-center text-4xl  font-bold text-fuchsia-900 md:text-left md:px-16">
              10,000+ of our users love our products.
            </h1>
            <p className="px-6 text-center text-2xl md:text-sm md:text-left md:pl-16 text-slate-500">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="rate-section flex flex-col gap-5 mb-10 md:w-1/2 md:mr-10">
            <div className="card bg-violet-100 flex flex-col md:flex-row justify-center items-center mx-8 md:mx-0 p-4 lg:px-8 rounded-md md:justify-between md:w-3/4 md:self-start">
              <div className="stars-container flex gap-2 md:gap-1 mb-2 md:mb-0">
                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />
              </div>
              <h6 className="text-fuchsia-900 font-bold md:text-xs">
                Rated 5 Stars in Reviews
              </h6>
            </div>
            <div className="card bg-violet-100 flex flex-col md:flex-row justify-center items-center mx-8 md:mx-0 p-4 lg:px-8 rounded-md md:justify-between md:self-center md:w-3/4">
              <div className="stars-container flex gap-2 md:gap-1 mb-2 md:mb-0">
                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />
              </div>
              <h6 className="text-fuchsia-900 font-bold md:text-xs">
                Rated 5 Stars in Report Guru
              </h6>
            </div>
            <div className="card bg-violet-100 flex flex-col md:flex-row justify-center items-center mx-8 md:mx-0 p-4 lg:px-8 rounded-md md:justify-between md:self-end md:w-3/4">
              <div className="stars-container flex gap-2 md:gap-1 mb-2 md:mb-0">
                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />

                <img
                  className="md:w-3 md:h-3"
                  src="images/icon-star.svg"
                  alt=""
                />
              </div>
              <h6 className="text-fuchsia-900 font-bold md:text-xs">
                Rated 5 Stars in BestTech
              </h6>
            </div>
          </div>
        </div>

        <div className="profiles-section flex flex-col md:flex-row gap-5 mb-10 md:mb-0 text-xl md:text-xs md:h-60  md:mx-8">
          <div className="profile bg-fuchsia-900 text-white font-bold rounded-md mx-8 p-8 md:p-4 md:mx-0 md:ml-8 md:h-3/4">
            <div className="photo-container flex items-center mb-10 md:mb-4">
              <img
                className="rounded-full mr-8 md:mr-4 w-14 md:w-10"
                src="images/image-colton.jpg"
                alt=""
              />
              <div className="name flex flex-col">
                <h6>Colton Smith</h6>
                <h6 className=" text-pink-400">Verified Buyer</h6>
              </div>
            </div>
            <div className="client-comment">
              <p className="text-md ">
                "We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time.Excellent!"
              </p>
            </div>
          </div>
          <div className="profile bg-fuchsia-900 text-white font-bold rounded-md mx-8  p-8 md:p-4 md:mx-0 md:h-3/4 md:self-center">
            <div className="photo-container flex items-center mb-10 md:mb-4">
              <img
                className="rounded-full mr-8 md:mr-4 w-14 md:w-10"
                src="images/image-irene.jpg"
                alt=""
              />
              <div className="name flex flex-col">
                <h6>Irene Roberts</h6>
                <h6 className=" text-pink-400">Verified Buyer</h6>
              </div>
            </div>
            <div className="client-comment">
              <p className="text-md">
                "Customer service is always excellent and very quick turn
                around. Completely delighted with the simplicity of the purchase
                and the speed of delivery"
              </p>
            </div>
          </div>
          <div className="profile bg-fuchsia-900 text-white font-bold rounded-md mx-8 p-8 md:p-4 md:mx-0 md:mr-2 md:h-3/4 md:self-end">
            <div className="photo-container flex items-center mb-10 md:mb-4">
              <img
                className="rounded-full mr-8 md:mr-4 w-14 md:w-10"
                src="images/image-anne.jpg"
                alt=""
              />
              <div className="name flex flex-col">
                <h6>Anne Wallace</h6>
                <h6 className=" text-pink-400">Verified Buyer</h6>
              </div>
            </div>
            <div className="client-comment">
              <p className="text-md">
                "Put an order with this company and can only prise them for the
                very high standard. Will definitely use them again and recommend
                them to everyone!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
