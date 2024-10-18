import React from 'react'
import { GENRES } from '../constants/genres.js'
import { useRouter } from 'next/navigation';

interface GenreFilterProps{
    close?: () => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ close }) => {
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = event.target.value;
        if (genreId) {
            router.push(`/genre/${genreId}`);
            if (close) {
                close();
            }
        }
    };
    
    return (
        <>
            <select id="genre-select" className='border p-2 rounded w-full md:w-auto' onChange={handleChange}>
                <option value="">Género</option>
                {GENRES.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
                ))}
            </select>
        </>
    )
}

export default GenreFilter