'use client'

import { URL_API } from '@/config'
import React, { useEffect, useState } from 'react'
import FilmCard from './Film';

interface Film{
    id: string,
    titulo: string,
    descripcion: string,
    imagen: string;
}

const FilmsList = () => {
    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        const fetchFilms = async () => {
            const res = await fetch(`${URL_API}/api/films`);
            const data: Film[] = await res.json();
            setFilms(data);
        };

        fetchFilms();
    }, []);

    return (
         <div className="p-5 flex gap-5">
            {films && films.map((film: Film) => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </div>
    )
}

export default FilmsList