import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Loading from './loading';

const FilmsList = dynamic(() => import("../../components/FilmsList"), {
    ssr: false,
    loading: () => <Loading />,
});


const FilmsPage = () => {
    return (
        <Suspense fallback>
            <FilmsList url='films' title='Peliculas Populares'/>
        </Suspense>
    )
}

export default FilmsPage;