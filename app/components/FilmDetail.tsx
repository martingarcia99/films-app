import { Film } from '@/app/interfaces/FilmInterface';
import { URL_API } from '@/config';
import Image from 'next/image';
import React from 'react'
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface FilmDetailProps{
    id: string
}

const FilmDetail: React.FC<FilmDetailProps> = ({ id }) => {

    const { data: film, error } = useSWR<Film>(`${URL_API}/api/films/${id}`, fetcher, { suspense: true });

    const date = new Date(film!.release_date);

    if (error) return <div>Error al cargar los datos</div>;
    if (!film) return <div>Cargando...</div>;
    
    return (
        <div className={`w-screen md:h-[800px] h-auto bg-cover bg-center relative flex justify-center items-center`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${film.backdrop_path}')`}}>
            <div className="absolute inset-0 backdrop-blur-md pt-20 bg-black bg-opacity-50"></div>
            <div className="relative gap-10 flex md:flex-row flex-col items-center md:p-0 px-5 py-10">
                <div className="w-[300px] rounded-lg overflow-hidden">
                    <Image alt={film.title} src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}/>
                </div>
                <div className='text-white gap-5 flex flex-col md:max-w-5xl w-5/6'>
                    <h1 className="text-3xl font-bold">{film.title}<span className="font-normal">{` (${date.getFullYear()})`}</span></h1>
                    <h3>{date.toLocaleDateString()} - Duracion: {Math.round(film.runtime/60)}h {film.runtime - Math.round(film.runtime/60)*60}m</h3>
                    <ul className="list-disc pl-5">
                        {film.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <h2 className="text-zinc-400">{film.tagline}</h2>
                    <div className='flex flex-col gap-2'>
                        <p className="text-xl font-semibold">Vista General</p>
                        <h2>{film.overview}</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FilmDetail