'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Search from './Search'
import GenreFilter from './GenreFilter'
import { IoIosClose, IoIosMenu } from "react-icons/io";
import Image from 'next/image';

const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='flex items-center justify-between text-black p-5 shadow-lg fixed w-screen bg-white z-50'>
            <Link href='/' className='text-xl flex flex-row gap-2 justify-center items-center'><Image alt='film-icon' width={30} height={20} src="/movie-clapper-open.png"/>Inicio</Link>
            <div className='md:flex hidden items-center gap-56'>
                <Search />
                <div className='flex gap-5 justify-center items-center'>
                    <GenreFilter />
                    <div className='hidden md:flex gap-5'>
                        <Link href='/films/now-playing' className='text-xl rounded-md text-white bg-black p-3 hover:bg-slate-500'>En cartelera</Link>
                        <Link href='/films' className='text-xl rounded-md text-white bg-black p-3 hover:bg-slate-500'>Populares</Link>
                        <Link href='/films/up-coming' className='text-xl rounded-md text-white bg-black p-3 hover:bg-slate-500'>Próximamente</Link>
                        <Link href='/films/top-rated' className='text-xl rounded-md text-white bg-black p-3 hover:bg-slate-500'>Mejor puntuadas</Link>
                    </div>
                </div>
            </div>

            <button onClick={toggleMenu} className='block md:hidden text-xl p-3'>
                <IoIosMenu />
            </button>

            <div className={`fixed right-0 top-0 w-screen h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {isMenuOpen && (
                    <>
                        <button onClick={toggleMenu} className='absolute top-8 right-8 text-3xl'><IoIosClose /></button>
                        <nav className='flex flex-col p-10 gap-10 pt-20 justify-start items-end h-full'>
                            <Search close={closeMenu}/>
                            <Link href='/films/now-playing' className='text-4xl mb-2' onClick={closeMenu}>En cartelera</Link>
                            <Link href='/films' className='text-4xl mb-2' onClick={closeMenu}>Populares</Link>
                            <Link href='/films/up-coming' className='text-4xl mb-2' onClick={closeMenu}>Próximamente</Link>
                            <Link href='/films/top-rated' className='text-4xl mb-2' onClick={closeMenu}>Mejor puntuadas</Link>
                            <GenreFilter close={closeMenu}/>
                        </nav>
                    </>
                )}
            </div>
        </div>
    )
}

export default NavBar