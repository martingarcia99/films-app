'use client'

import React from 'react'
import FilmCard from './Film';
import Link from 'next/link';
import useSWR from 'swr';
import { Film } from '../interfaces/FilmInterface';

interface FilmsCarrusel{
    title: string,
    url: string,
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FilmsCarrusel: React.FC<FilmsCarrusel> = ({ title, url }) => {
    const { data: films, error } = useSWR<Film[]>(`/api/${url}?page=1`, fetcher, { suspense: true });

    if (error) return <div>Error al cargar los datos</div>;

    return (
        <>
            <div className="flex flex-row text-center place-items-baseline gap-5 pt-16 md:pb-6 px-5">
                <h2 className="md:text-3xl text-xl font-semibold">{title}</h2>
                <Link href={url}>Ver mas</Link>
            </div>
            <div className='flex flex-row gap-5 overflow-x-scroll p-5 scrollbar-hide md:scrollbar-show'>
                {films && films.map((film: Film) => (
                    <div key={film.id} className="md:min-w-[300px] min-w-[130px]">
                        <FilmCard film={film} />
                    </div>
                ))}
            </div>
        </>
        
    )
}

export default FilmsCarrusel;