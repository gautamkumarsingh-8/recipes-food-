import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from "../imgs/recipes.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='p-3 border-b  bg-background/95 backdrop-blur supports-[background-filter]:bg-background/70 '>
            <div className=' max-w-[1240px] mx-auto flex justify-between '>
                <div className='pt-1'>
                    <Link to="/">
                        <img src={recipes} className='w-[220px]' />
                    </Link>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to="logout" className='py-2'
                    ><IoIosLogOut className='text-4xl ml-11 md:ml-0' /></Link>
                </div>

                {
                    open ?
                        <IoMdClose onClick={() => setOpen(!open)} className='block mt-3 text-3xl md:hidden' />
                        :
                        <AiOutlineMenu onClick={() => setOpen(!open)} className='block mt-3 text-3xl md:hidden' />
                }



                <ul className=' hidden md:flex justify-center gap-8  pt-2 text-[]   font-medium '>
                    <li className='hover:text-red-400'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/about">About</Link>

                    </li>
                    <li className='hover:text-red-400' >
                        <Link to="/">contact</Link>
                    </li>


                </ul>
                {/* Responsive Navation */}
                <ul className={` duration-400 md:hidden gap-5  bg-[#ffffffd7] fixed 
                top-[60px] w-full text-center h-screen  ${open ? 'left-[0]' : 'left-[-100%]'} `}  >

                    <li className='hover:text-red-400 py-7'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:text-red-400 py-7' >
                        <Link to="/">contact</Link>
                    </li>


                </ul>
            </div>
        </nav>
    )
}

export default Header