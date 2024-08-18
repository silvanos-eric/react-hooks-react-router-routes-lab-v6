import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie);
  }, [id]);

  const { title, time, genres = [] } = movie;

  const genreElList = genres.map((genre) => <span key={genre}>{genre}</span>);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>{time}</p>
        {genreElList}
      </main>
    </>
  );
}

export default Movie;
