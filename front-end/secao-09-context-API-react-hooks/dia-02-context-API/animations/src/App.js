// src/App.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmContext';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';



function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')
      .then((result) => result.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);


  function toggleFavorite(item) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

   const context = {
    films,
    favorites,
    toggleFavorite,
  };

  return (
    <FilmsContext.Provider value={ context }>
      
        <BrowserRouter>
        <Switch>
        <Route path="/favorites" component={ <Favorites /> } />
        <Route exact path="/" component={<Home />} />
        </Switch>
        </BrowserRouter>

      
        
        
     
    </FilmsContext.Provider>
  );
}

export default App;
