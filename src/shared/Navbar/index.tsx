import image from "../../assets/logo.png";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../Button/SearchBar";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import profile from "../../assets/profile.jpg"


const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 bg-white px-2">
      <div className="flex items-center gap-28">
        <div className="flex items-center">
          <img src={image} alt="Logo" className="h-10" />
          <p className="ml-2 font-bold">Mayank</p>
        </div>

        <div className="flex items-center gap-4">
          <IconButton className="w-8 h-8 bg-blue-100" sx={{ backgroundColor: "#DBEAFE", "&:hover": { backgroundColor: "#BFDBFE" }, }}>
            <MdMenuOpen />
          </IconButton>
          <SearchBox />
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center ">
        <IconButton className="w-8 h-8 bg-blue-100" sx={{ backgroundColor: "#DBEAFE", "&:hover": { backgroundColor: "#BFDBFE" }, }}><MdOutlineLightMode /></IconButton>
        <IconButton className="w-8 h-8 bg-blue-100" sx={{ backgroundColor: "#DBEAFE", "&:hover": { backgroundColor: "#BFDBFE" }, }}><FaRegBell /></IconButton>
        <IconButton className="w-8 h-8 bg-blue-100" sx={{ backgroundColor: "#DBEAFE", "&:hover": { backgroundColor: "#BFDBFE" }, }}><IoCartOutline /></IconButton>
        <IconButton className="w-8 h-8 bg-blue-100" sx={{ backgroundColor: "#DBEAFE", "&:hover": { backgroundColor: "#BFDBFE" }, }}><MdOutlineEmail /></IconButton>
        <div className="flex flex-row gap-2">
          <img src={profile} alt="profile-picture" className="h-12 w-12 rounded-full border-4 border-blue-200" />
          <div className="flex flex-col">
            <span className="text-xl">Mayank Garg</span>
            <p className="text-sm text-gray-400">@mayank-garg7</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;