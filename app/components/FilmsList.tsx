'use client'

import { URL_API } from '@/config';
import React, { useState } from 'react'
import FilmCard from '../components/Film';
import { FiArrowRight, FiArrowLeft  } from "react-icons/fi";
import { Film } from '../interfaces/FilmInterface';
import useSWR from 'swr';

interface FilmsPage{
    url: string,
    title?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FilmsPage: React.FC<FilmsPage> = ({ url, title }) => {

    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePreviousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const { data: films, error } = useSWR<Film[]>(`${URL_API}/api/${url}?page=${page}`, fetcher, { suspense: true });

    if (error) return <div>Error al cargar los datos</div>;

    
    return (
        <div className="md:px-64 px-10">  
            <h1 className='text-3xl py-10 font-bold'>{title}</h1>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-5 justify-center items-center'>
                {films && films.map((film: Film) => (
                    <div key={film.id} className="md:shadow-xl">
                        <FilmCard film={film} />
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-center items-center gap-10 p-10'>
                <button onClick={handlePreviousPage} className='flex flex-row gap-2 items-center'><FiArrowLeft />Anterior</button>
                <button onClick={handleNextPage} className='flex flex-row gap-2 items-center'>Siguiente<FiArrowRight/></button>
            </div>
        </div>
    )
}

export default FilmsPage;