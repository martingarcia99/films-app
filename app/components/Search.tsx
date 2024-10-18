import { URL_API } from '@/config';
import React, { useState } from 'react'
import { Film } from '../interfaces/FilmInterface';
import Link from 'next/link';

interface SearchProps{
    close?: () => void;
}

const Search: React.FC<SearchProps> = ({ close }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState<Film[]>([]);
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    const handleSearchChange = async ( e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        try{
            const res = await fetch(`${URL_API}/api/search?search=${query}`);

            const films: Film[] = await res.json();

            setFilteredResults(films);

        }catch(error){
            console.error('Error al buscar películas:', error);
        }
    };

    return (
        <div className='relative w-full md:w-auto'>
            <input
                type='text'
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Buscar...'
                className='border p-2 rounded md:w-[400px] w-full'
                onFocus={expand}
            />
            {searchQuery && expanded && (
                <div className='absolute top-full left-0 right-0 bg-white border rounded shadow-lg max-h-60 overflow-y-auto'>
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result, index) => (
                            <Link href={`/films/${result.id}`} onClick={() => { setSearchQuery(''); setExpanded(false); if(close){close()};}} key={index} className='p-2 hover:bg-gray-200 cursor-pointer w-full block'>
                                {result.title}
                            </Link>
                        ))
                    ) : (
                        <div className='p-2 text-gray-500'>No se encontraron resultados</div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Search