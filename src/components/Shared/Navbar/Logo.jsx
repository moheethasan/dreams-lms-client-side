import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const Logo = () => {
  return (
    <Link to="/">
      <img className="w-28 lg:w-36" src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
