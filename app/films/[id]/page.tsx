'use client'

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react'
import Loading from './loading';

const FilmDetail = dynamic(() => import("@/app/components/FilmDetail"), {
    ssr: false,
    loading: () => <Loading />
});

interface Params {
    id: string;
}

const FilmDetailPage: React.FC<{ params: Params }> = ({ params }) => {

    const { id } = params;

    return (
        <>
            <Suspense fallback={<Loading />}>
                <FilmDetail id={id}/>    
            </Suspense>
        </>
    )
}

export default FilmDetailPage