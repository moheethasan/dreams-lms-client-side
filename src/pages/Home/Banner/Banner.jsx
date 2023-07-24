import bannerBg from "../../../assets/banner.png";
import bannerImage from "../../../assets/object.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundPosition: "top center",
      }}
      className="bg-cover bg-no-repeat pt-36 md:pt-52 xl:pt-60 pb-20 md:pb-28 lg:pb-32 xl:pb-40"
    >
      <div className="container mx-auto md:flex items-center lg:gap-16 xl:gap-28 px-4">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Book College Services and Facilities
          </h1>
          <p className="text-gray-500 lg:text-lg xl:text-xl my-5">
            Explore and reserve various college services and facilities with
            ease. Make the most out of your college experience!
          </p>
          <button className="btn-primary w-fit">Get Started</button>
        </div>
        <img
          src={bannerImage}
          alt="Banner"
          className="md:w-2/5 mt-10 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Banner;
