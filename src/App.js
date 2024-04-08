// Import necessary modules from react and components
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddRatings from "./components/AddRatings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Define the main App component
const App = () => {
  // Define state variables for movies, ratings, and search value
  const [movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Define a function to fetch movies based on search value
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b85bac0`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // If there are search results, update the movies state
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Use an effect to fetch movies whenever the search value changes
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // Define a function to add a movie to the ratings list
  const addRatingMovie = (movie) => {
    const newRatingsList = [...ratings, movie];
    setRatings(newRatingsList);
  };

  // Render the app
  return (
    <div className="container-fluid movie-reviews">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleRatingsClick={addRatingMovie}
          ratingComponent={AddRatings}
        />
      </div>
      <div className="container-fluid movie-reviews">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies I have Rated" />
        </div>
        <div className="row">
          <MovieList
            movies={ratings}
            handleRatingsClick={addRatingMovie}
            ratingComponent={AddRatings}
          />
        </div>
      </div>
    </div>
  );
};

// Export the App component
export default App;
