import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovieList);
  }, []);

  const movies = movieList.map((movie) => (
    <MovieCard key={movie.id} title={movie.title} id={movie.id} />
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies}
      </main>
    </>
  );
}

export default Home;
