import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDdhMDc4NzNjYmUyMWIyMzdkNjJlYTRiMWFkZTMwYSIsIm5iZiI6MTcyODkyMDYzNS40NDYyODMsInN1YiI6IjY3MGQzN2U3YjE1ZDk3YjFhOTNkMWI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuJs3YqEO9yIH8lj-JCRohq0b__I7vW5pex0EA7C-yU'
        }
    };

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`, options);
        const data = await res.json();
        return NextResponse.json(data.results);
    } catch (err) {
        console.error(err);
        return NextResponse.error();
    }
}