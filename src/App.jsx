import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import './App.css';
import Pokemon from './components/Pokemon';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {
  // Loading state of the Pokemons and the pagination
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${currentPokemon}&limit=1154`
      );
      setPokemon(result.data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (number) => setCurrentPage(number);

  return (
    <div className='App'>
      <Navbar />
      <div className='container-fluid mb-3'>
        <SearchBar />
        <div className='carousel container'>
          <Pokemon posts={currentPokemon} loading={loading} />
          <Pagination
            postsPerPage={pokemonPerPage}
            totalPosts={pokemon.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
