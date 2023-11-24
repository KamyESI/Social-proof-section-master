import img from "./images/icon-star.svg";

function Stars(param) {
  return (
    <div className="card bg-violet-100 flex flex-col md:flex-row justify-center items-center mx-8 md:mx-0 p-4 lg:px-8 rounded-md md:justify-between md:w-3/4">
      <div className="stars-container flex gap-2 md:gap-1 mb-2 md:mb-0 ">
        <img className="md:w-3 md:h-3" src={img} alt="" />

        <img className="md:w-3 md:h-3" src={img} alt="" />

        <img className="md:w-3 md:h-3" src={img} alt="" />

        <img className="md:w-3 md:h-3" src={img} alt="" />

        <img className="md:w-3 md:h-3" src={img} alt="" />
      </div>
      <h6 className="text-fuchsia-900 font-bold md:text-xs">{param.title}</h6>
    </div>
  );
}

export default Stars;
