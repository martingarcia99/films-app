'use client'

import dynamic from 'next/dynamic';
import React from 'react'
import Loading from './loading';

const FilmsList = dynamic(() => import("@/app/components/FilmsList"), {
    ssr: false,
    loading: () => <Loading />,
});


const FilmsPage = () => {
    return (
        <FilmsList url='films/now-playing' title='En cartelera'/>
    )
}

export default FilmsPage;