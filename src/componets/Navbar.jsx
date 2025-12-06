import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import {
  ClockCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useContext(AppContext);


  return (
    <header className="w-full text-sm text-white">

      {/* Announcement Bar */}
      <div className="bg-black py-2 px-4 flex flex-wrap justify-between items-center">

        {/* Left Info */}
        <ul className="hidden md:flex items-center gap-4">
          <li className="flex items-center gap-1">
            <MailOutlined /> <span>info@example.com</span>
          </li>
          <li className="flex items-center gap-1">
            <PhoneOutlined /> <span>380 Albert St, Melbourne</span>
          </li>
          <li className="flex items-center gap-1">
            <PhoneOutlined /> <span>+1 (230)-369-155-23</span>
          </li>
        </ul>

        {/* Right Socials */}
        <div className="hidden md:flex items-center gap-3">
          <ClockCircleOutlined />
          <p>Sun-Thu 08:00AM - 05:00PM</p>
          <div className="flex items-center gap-3 text-lg">
            <GrFacebookOption />
            {/* <FontAwesomeIcon icon={byPrefixAndName.fab['facebook-f']} /> */}
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>


      {/* Main Navbar */}
      <div className="flex bg-white shadow-md">

        {/* Logo */}
        <NavLink to='/' >
          <div className="flex items-center bg-primary px-5 h-[70px] shrink-0">
            <img src={assets.eyeIcon} alt="" className="h-7 cursor-pointer" />
            <h3 className="ml-2 tracking-[2px] uppercase font-semibold text-white text-lg">Eye Checkup</h3>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="flex-1 flex items-center justify-between px-4 md:px-10">

          {/* Links */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-800">
            <NavLink to='/' className='cursor-pointer'>Home</NavLink>
            <NavLink to='/pages' className='cursor-pointer'>Pages</NavLink>
            <NavLink to='/services' className='cursor-pointer'>Services</NavLink>
            <NavLink to='/shop' className='cursor-pointer'>Shop</NavLink>
            <NavLink to='/contact' className='cursor-pointer'>Contact</NavLink>
          </ul>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-6 text-gray-800">
            <SearchOutlined />
            <NavLink to='/cart'>
            <ShoppingOutlined className='cursor-pointer'/>
            </NavLink>
            <UserOutlined />
          </div>

          {/* CTA Button (Desktop Only) */}
          <button onClick={() => navigate("/appoinment")} className="hidden lg:block bg-primary text-white rounded-full px-6 py-2 hover:bg-primary-dull transition">
            Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path d="M3 7h24M3 15h24M3 23h24" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>


      {/* Mobile Menu Dropdown */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-white text-gray-900 shadow-lg ${isMenuOpen ? 'max-h-60 p-5' : 'max-h-0 p-0'
          }`}
      >
        <ul className="flex flex-col gap-4 text-base">
          <NavLink to='/' className='cursor-pointer'>Home</NavLink>
          <NavLink to='/pages' className='cursor-pointer'>Pages</NavLink>
          <NavLink to='/services' className='cursor-pointer'>Services</NavLink>
          <NavLink to='/shop' className='cursor-pointer'>Shop</NavLink>
          <NavLink to='/contact' className='cursor-pointer'>Contact</NavLink>
        </ul>

        <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg active:scale-95 transition">
          Appointment
        </button>
      </div>

    </header>
  );
};

export default Navbar;
