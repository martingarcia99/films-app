import { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";

const FilmsCarrusel = dynamic(() => import("./components/FilmsCarrusel"), {
    ssr: false,
    loading: () => <Loading />,
});

export default function Home() {

    return (
        <>
            <div className="flex items-center text-white bg-[url('/film-background.jpg')] w-screen h-[300px] bg-cover bg-center">
                <div className="md:ml-20 ml-10 flex flex-col gap-5">
                    <h1 className="text-3xl">FILMS APP</h1>
                    <p className="text-xl">Encuentra las mejores peliculas</p>
                </div>
            </div>
            <Suspense fallback>
                <FilmsCarrusel title='En cartelera' url='films/now-playing'/>
            </Suspense>
            <Suspense fallback>
                <FilmsCarrusel title='Populares' url='films'/>
            </Suspense>
            <Suspense fallback>
                <FilmsCarrusel title='Próximamente' url='films/up-coming'/>
            </Suspense>
            <Suspense fallback>
                <FilmsCarrusel title='Mejor puntuadas' url='films/top-rated'/>
            </Suspense>
        </>
    );
}