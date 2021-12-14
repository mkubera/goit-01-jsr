import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // DUMMY FETCH
    // TODO: replace with a real fetch to MovieDB API!!!
    // https://developers.themoviedb.org/3/movies/get-movie-details

    const fetchedMovie = {
      id: 1,
      title: "Dune",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus quidem magnam deleniti modi a alias blanditiis quae reprehenderit exercitationem, iure veniam sequi mollitia fuga, officiis officia, enim ad vel.",
    };

    setMovie(fetchedMovie);
  }, [id]);

  const toggleDetails = () => {
    console.log(showDetails);
    setShowDetails(!showDetails);
  };

  return (
    movie && (
      <div>
        <h1>{movie.title}</h1>
        <button onClick={toggleDetails}>Toggle details</button>
        <p>{showDetails && movie.details}</p>
      </div>
    )
  );
};

export default MoviePage;
