import Link from 'next/link';
import React from 'react'
import { Film } from '../interfaces/FilmInterface';
import Image from 'next/image';

interface FilmCardProps {
    film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <Link className='cursor-pointer' href={`/films/${film.id}`}>
        <img 
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
            alt={film.title} 
            className='md:w-[300px] md:h-[400px] w-[150px] h-[200px]'
            width={300} 
            height={400}
        />
    </Link>
  )
}

export default FilmCard;