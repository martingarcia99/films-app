import FilmsList from "./components/FilmsList";

export default function Home() {
  return (
    <>
        <div className="flex items-center text-white bg-[url('/film-background.jpg')] w-screen h-[300px] bg-cover bg-center">
            <div className="ml-20 flex flex-col gap-5">
                <h1 className="text-3xl">FILMS APP</h1>
                <p className="text-xl">Encuentra las mejores peliculas</p>
            </div>
        </div>
        <FilmsList />
    </>
  );
}