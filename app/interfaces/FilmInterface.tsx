interface Genre{
    id: number;
    name: string;
}

export interface Film {
    id: string;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    tagline: string;
    vote_average: number;
    runtime: number;
    genres: Genre[];
    release_date: string;
}