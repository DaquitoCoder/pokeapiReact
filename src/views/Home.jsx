import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Pokemon from '../components/Pokemon';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

function Home() {
  // Loading state of the Pokemons and the pagination
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setpokemonPerPage] = useState(12);

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

  const paginate = (number) => setCurrentPage(number);

  // Search Bar
  const [search, setSearch] = useState('');

  let inputHandler = (e) => {
    let lowercase = e.target.value.toLowerCase();
    setSearch(lowercase);
  };

  const filteredPokemon = pokemon.filter((el) => {
    if (search === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(search);
    }
  });

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <>
      <SearchBar onChange={inputHandler} />
      <div className='carousel container'>
        <Pokemon posts={currentPokemon} loading={loading} />
        <Pagination
          postsPerPage={pokemonPerPage}
          totalPosts={pokemon.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default Home;
