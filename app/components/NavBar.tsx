'use client'

import Link from 'next/link'
import React from 'react'

const NavBar = () => {

    return (
        <div className='flex justify-between text-black p-5 shadow-lg'>
            <Link href='/' className='text-xl flex flex-row gap-2 justify-center'><img alt='film-icon' width={30} height={20} src="/movie-clapper-open.png"/>Inicio</Link>
            <div className='flex gap-5'>
                <Link href='/films' className='text-xl'>Peliculas</Link>
                <Link href='/about' className='text-xl'>Acerca de</Link>
            </div>
        </div>
    )
}

export default NavBar