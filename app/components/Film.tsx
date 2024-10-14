import React from 'react'
import Image from 'next/image'

interface Film{
    id: string,
    imagen: string,
    titulo: string
}

interface FilmCardProps {
    film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  return (
    <div className='rounded-lg shadow-xl'>
        <div>
            <Image src={film.imagen} alt={film.titulo} width={200} height={250}/>
        </div>
    </div>
  )
}

export default FilmCard;