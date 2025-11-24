import React from 'react'
import { assets } from '../assets/assets'
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="w-full bg-black text-gray-400 text-[14px] px-6 md:px-16 lg:px-24 xl:px-32 py-12">

    {/* Top Bar */}
    <div className="flex flex-wrap justify-between items-center w-full border-b border-gray-600 pb-6 gap-4">
        <div className="flex items-center gap-2">
            <img src={assets.eyeIcon} alt="" className="h-6" />
            <h3 className="text-white text-lg tracking-[2px] font-semibold">Eye Checkup</h3>
        </div>

        <div className="flex items-center gap-3">
            <p>Follow us:</p>
            <ul className="flex items-center gap-3 text-white text-lg cursor-pointer">
                <li><GrFacebookOption /></li>
                <li><FaLinkedinIn /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
            </ul>
        </div>
    </div>

    {/* Footer Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 capitalize">

        {/* Column 1 */}
        <div>
            <p className="text-white font-semibold text-lg">Quick links</p>
            <ul className="mt-3 space-y-2">
                <li><a href="/" className="hover:text-indigo-500">About us</a></li>
                <li><a href="/" className="hover:text-indigo-500">We’re hiring</a></li>
                <li><a href="/" className="hover:text-indigo-500">Contact us</a></li>
                <li><a href="/" className="hover:text-indigo-500">FAQs</a></li>
            </ul>
        </div>

        {/* Column 2 */}
        <div>
            <p className="text-white font-semibold text-lg">Products</p>
            <ul className="mt-3 space-y-2">
                <li><a href="/" className="hover:text-indigo-500">My account</a></li>
                <li><a href="/" className="hover:text-indigo-500">Eye glasses</a></li>
                <li><a href="/" className="hover:text-indigo-500">Sun glasses</a></li>
                <li><a href="/" className="hover:text-indigo-500">Clearance sale</a></li>
            </ul>
        </div>

        {/* Column 3 */}
        <div>
            <p className="text-white font-semibold text-lg">Customer care</p>
            <ul className="mt-3 space-y-2">
                <li><a href="/" className="hover:text-indigo-500">Shipping</a></li>
                <li><a href="/" className="hover:text-indigo-500">Privacy policy</a></li>
                <li><a href="/" className="hover:text-indigo-500">Terms & conditions</a></li>
            </ul>
        </div>

        {/* Column 4 (Spans more space on large screens) */}
        <div className="md:col-span-2 space-y-6">

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
                <div>
                    <p className="text-gray-400 text-sm">Total Free Customer Care</p>
                    <p className="text-white text-lg font-medium">+1 (230) 369-155-23</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Free Live Support</p>
                    <p className="text-white text-lg font-medium">info@example.com</p>
                </div>
            </div>

            {/* Subscribe */}
            <h3 className="text-white font-semibold text-lg">
                Keep Yourself Updated
            </h3>

            <form className="flex items-center bg-[#223E3A] border border-gray-600 rounded-md overflow-hidden h-11 max-w-md">
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-white placeholder-gray-300 px-4 outline-none"
                />
                <button 
                    type="submit"
                    className="bg-[#1F544C] px-4 h-full text-sm text-[#AFC1BE] hover:bg-[#226258] transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </div>

    {/* Bottom */}
    <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-600">
        © 2025 Eye Checkup — All Rights Reserved.
    </div>
</footer>

    )
}

export default Footer