import { GENRES } from '@/app/constants/genres';
import dynamic from 'next/dynamic';
import React from 'react'
import Loading from './loading';

const FilmsList = dynamic(() => import("../../components/FilmsList"), {
    ssr: false,
    loading: () => <Loading />,
});

interface Params {
    genre: string;
}

const GenreFilterPage: React.FC<{ params: Params }> = ({ params }) => {
    const { genre } = params;

    const nameGenre = GENRES.find((genreItem) => genreItem.id == Number(genre));

    return (
        <div>
            <FilmsList url={`/genre/${genre}`} title={nameGenre?.name}/>
        </div>
    );
}

export default GenreFilterPage;