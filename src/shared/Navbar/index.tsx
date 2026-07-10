import image from "../../assets/logo.png";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../Button/SearchBar";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full h-12 bg-white px-4">
      <div className="flex items-center gap-28">
        <div className="flex items-center">
          <img src={image} alt="Logo" className="h-10" />
          <p className="ml-2 font-bold">Mayank</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
            <MdMenuOpen />
          </button>
          <SearchBox />
        </div>
      </div>

      <div>hello</div>
    </header>
  );
};

export default Navbar;