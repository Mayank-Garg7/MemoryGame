import image from '../../assets/logo.png'
import Button from '@mui/material/Button'
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <header className='flex flex-row w-full h-12 bg-white'>
      <div className="flex items-center flex-row">
        <img src={image} alt="" className='h-10'/>
        <p className='font-bold'>Mayank</p>
      </div>
    <Button variant="contained" className='h-8 w-24'>Contained</Button>
    <MdMenuOpen />
    <MdOutlineMenu />
    </header>
  )
}

export default Navbar
