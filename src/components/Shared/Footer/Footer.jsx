import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className={`bg-white py-20`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 text-gray-400 z-20 relative">
        <div>
          <Logo></Logo>
          <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-700">
            Book Services and Facilities
          </h2>
          <p className="text-gray-500 mb-4">
            Unleash your potential, make unforgettable memories, and access a
            wide range of college services and facilities. Join us at
            CollegeBooker, where your college experience becomes extraordinary.
          </p>
        </div>
        <div className="flex justify-between md:justify-around">
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-700">
              Helpful Links
            </h3>
            <p className="text-gray-500 mb-4">
              <Link to="#">Explore Colleges</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">Admission Process</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">Facilities Booking</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">Contact Us</Link>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-700">
              Quick Links
            </h3>
            <p className="text-gray-500 mb-4">
              <Link to="#">Search Colleges</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">College Events</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">Research Works</Link>
            </p>
            <p className="text-gray-500 mb-4">
              <Link to="#">Sports Facilities</Link>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 text-gray-700">Share</h3>
          <div className="flex items-center gap-3">
            <Link to="#">
              <p className="p-2 rounded-md bg-white hover:bg-red-500 text-red-500 border border-red-500 hover:text-white">
                <FiFacebook className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-white hover:bg-red-500 text-red-500 border border-red-500 hover:text-white">
                <FiTwitter className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-white hover:bg-red-500 text-red-500 border border-red-500 hover:text-white">
                <FiInstagram className="text-lg" />
              </p>
            </Link>
            <Link to="#">
              <p className="p-2 rounded-md bg-white hover:bg-red-500 text-red-500 border border-red-500 hover:text-white">
                <FiMail className="text-lg" />
              </p>
            </Link>
          </div>
          <p className="text-gray-500 my-4">
            Stay up to date with the latest news, gaming tips, and exclusive
            offers by subscribing to our newsletter.
          </p>
          <form className="flex">
            <input
              className="border border-red-400 rounded-l-xl w-full md:w-3/4 p-4 bg-white"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="transition duration-200 px-3 md:px-5 py-3 md:py-4 text-white bg-red-400 hover:bg-red-500 rounded-r-xl"
            >
              <FaPaperPlane className="text-xl" />
            </button>
          </form>
        </div>
      </div>
      <p className="text-center pt-16 text-gray-800">
        <small>© 2023 Dreams LMS. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
