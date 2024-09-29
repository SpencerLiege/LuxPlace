'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from '@/assets/images/logo-white.png'
import {FaGoogle} from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"
import { FaRegBell } from 'react-icons/fa6'
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const navList = [
        { label: 'Home', link: '/'},
        { label: 'Properties', link: '/properties'},
        { label: 'Add Properties', link: '/properties/add'}
    ]
    const pathName = usePathname()
    const [ isMobileView, setIsMoblieView ] = useState(false)
    const [isLoggedin, setIsLoggedin ] = useState(false)

    return ( 
        // navbar
        <nav className=" bg-blue-700 border-b border-blue-500">
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
                <div className="text-white h-20 relative flex justify-between items-center">
                    {/* Hamburger menu */}
                    <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                        <button
                        type='button'
                        id='mobile-dropdown-button'
                        className='relative inline-flex items-center justify-center p-1 rounded-sm text-white hover:bg-white hover:text-black transition duration-500 ease-in-out focus:outline-none'
                        aria-controls='mobile-menu'
                        aria-expanded='false'
                        onClick={() => setIsMoblieView((prev) => !prev)}
                        >
                            <IoIosMenu className="h-8 w-8" />
                        </button>
                    </div>
                    {/* Logo and nav list */}
                    <section className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <Link href='/' className="flex items-center">
                            <Image className="h-8 w-8" src={Logo} />
                            <span className="ml-1 md:block hidden text-2xl font-semibold">LuxPlace</span>
                        </Link>
                        <div className="flex items-center ml-8">
                            {
                                navList.map((x)=> (
                                    <Link className={`${ pathName=== x.link ? 'bg-black' : ''} hidden md:block 2 py-1 px-3 rounded-md`} href={x.link} key={x}>{x.label}</Link>
                                ))
                            }
                        </div>
                    </section>
                    {/* Login, register,and notification */}
                    <section className="">
                        <div className="flex justify-between">
                            <div className="hidden md:block ">
                                <div className="flex items-center py-1 px-3 mr-4 bg-white text-black rounded-md hover:bg-black hover:text-white transition ease-in-out duration-300">
                                    <FaGoogle className="mr-1" />
                                    <Link href='/'>Login or Register</Link>   
                                </div>
                            </div>
                            {isLoggedin && (
                            <div className="flex items-center ">
                                <Link className="relative" href='/'><FaRegBell className="w-6 h-6 mr-4 hover:text-gray-300 z-10" /> <span className="bg-black rounded-full px-1 text-sm absolute -top-3 right-2">3</span></Link>
                                <Link href='/'><CgProfile className="w-6 h-6 hover:text-gray-300" /> </Link>
                            </div>
                            )}
                            
                        </div>

                    </section>
                </div>

                 {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {isMobileView && (
                    <div id='mobile-menu'>
                    <div className='space-y-1 px-2 pb-3 pt-2 md:hidden'>
                        {
                            !isLoggedin ? (
                                navList.filter((a) => (a.link !== '/properties/add')).map((item)=> (
                                    <Link key={item} href={item.link} className={`${pathName === item.link ? 'bg-[#405c98]' : '' } text-white block rounded-md px-3 py-2 text-base font-medium`}>
                                       {item.label}
                                    </Link>
                                ))
 ) :
                            (
                                navList.map((x)=> (
                                    <Link key={x} href={x.link} className={`${pathName === x.link ? 'bg-[#405c98]' : '' } text-white block rounded-md px-3 py-2 text-base font-medium`}>
                                       {x.label}
                                    </Link>
                                ))
                            )
                        }
                        {!isLoggedin && (
                        <button className='flex items-center text-black bg-white hover:bg-black transition duration-300 ease-in-out hover:text-white rounded-md px-3 py-2 my-4'>
                            <FaGoogle className="mr-1" />
                            <span>Login or Register</span>
                        </button>
                        )}

                    </div>
                    </div>
                )}
            </div>
        </nav>
     );
}
 
export default Navbar;