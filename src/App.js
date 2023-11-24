import "./App.css";
import Stars from "./Stars";

import img1 from "./images/image-colton.jpg";
import img2 from "./images/image-irene.jpg";
import img3 from "./images/image-anne.jpg";

const title1 = "Rated 5 Stars in Reviews";
const title2 = "Rated 5 Stars in Report Guru";
const title3 = "Rated 5 Stars in BestTech";

const profilesTable = [
  {
    img: img1,
    name: "Colton Smith",
  },
  {
    img: img2,
    name: "Irene Roberts",
  },
  {
    img: img3,
    name: "Anne Wallace",
  },
];

function ProfileCard({ img, name, children }) {
  return (
    <div className="profile bg-fuchsia-900 text-white font-bold rounded-md mx-8 p-8 md:p-4 md:mx-0 md:ml-8 md:h-3/4">
      <div className="photo-container flex items-center mb-10 md:mb-4">
        <img
          className="rounded-full mr-8 md:mr-4 w-14 md:w-10"
          src={img}
          alt=""
        />
        <div className="name flex flex-col">
          <h6>{name}</h6>
          <h6 className=" text-pink-400">Verified Buyer</h6>
        </div>
      </div>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <div className=" main-container h-screen md:max-w-6xl mx-auto md:flex md:flex-col md:justify-center ">
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
            <Stars title={title1} />
            <Stars title={title2} />
            <Stars title={title3} />
          </div>
        </div>
        <div className="profiles-section flex flex-col md:flex-row gap-5 mb-10 md:mb-0 text-xl md:text-xs md:h-60  md:mx-8">
          <ProfileCard img={profilesTable[0].img} name={profilesTable[0].name}>
            <p className="text-md ">
              "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time.Excellent!"
            </p>
          </ProfileCard>
          <ProfileCard img={profilesTable[1].img} name={profilesTable[1].name}>
            <p className="text-md">
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery"
            </p>
          </ProfileCard>
          <ProfileCard img={profilesTable[2].img} name={profilesTable[2].name}>
            <p className="text-md">
              "Put an order with this company and can only prise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </ProfileCard>
        </div>
      </div>
    </>
  );
}

export default App;
