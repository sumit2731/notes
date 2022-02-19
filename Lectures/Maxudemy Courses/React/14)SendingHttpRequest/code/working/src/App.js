import React,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);    
    try {
      let response = await fetch('https://swapi.dev/api/films');
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      let data = await response.json();
      const tranformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
  
      setMovies(tranformedMovies);
      
    } 
    
    catch(error){
      setError(error.message);
    }
    
    setIsLoading(false); 
  },[]);

  useEffect(() => {
      fetchMoviesHandler();
    },[fetchMoviesHandler]
  );
  
  
  
  let content = <p>Found No Movies</p>;
  
  if(error) {
    content = <p>{error}</p>
  }
  
  else if(isLoading) {
    content = <p>Loading...</p>;
  }

  else if(movies.length === 0) {
    content = <p>Found No Movies</p>;
  }
  
  else {
    content = <MoviesList movies={movies} />
  }
    

  // return (
  //   <React.Fragment>
  //     <section>
  //       <button onClick = {fetchMoviesHandler}>Fetch Movies</button>
  //     </section>
  //     <section>
  //       {!isLoading && movies.length >0 && <MoviesList movies={movies} />}
  //       {!isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
  //       {!isLoading && error && <p>{error}</p>}
  //       {isLoading && <p>Loading...</p>}
  //     </section>
  //   </React.Fragment>
  // );

  return (
    <React.Fragment>
      <section>
        <button onClick = {fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
