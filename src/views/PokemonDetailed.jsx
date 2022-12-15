import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

function PokemonDetailed() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  const fetchData = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(result.data);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const statHp = pokemon.stats?.[0].base_stat;
  const statAttack = pokemon.stats?.[1].base_stat;
  const statDefense = pokemon.stats?.[2].base_stat;
  const statSpAttack = pokemon.stats?.[3].base_stat;
  const statSpDefense = pokemon.stats?.[4].base_stat;
  const statSpeed = pokemon.stats?.[5].base_stat;
  
  if (loading) {
    return (
      <div className='d-flex align-items-center'>
        <strong>Loading...</strong>
        <div
          className='spinner-border ms-auto'
          role='status'
          aria-hidden='true'
        ></div>
      </div>
    );
  }


  return (
    <>
      <div className='container-pokemon'>
        <div className='card pokemon'>
          <img
            className='card-img-top'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <div className='card-body'>
            <h4 className='card-title'>{name.toUpperCase()}</h4>
            <div className='skills'>
              <h5>Skills</h5>
              <div className='skills-bar'>
                <p>Health points</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-success'
                    role='progressbar'
                    style={{ width: `${statHp}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statHp}%
                  </div>
                </div>
              </div>
              <div className='skills-bar'>
                <p>Attack</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-danger'
                    role='progressbar'
                    style={{ width: `${statAttack}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statAttack}%
                  </div>
                </div>
              </div>
              <div className='skills-bar'>
                <p>Defense</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-info'
                    role='progressbar'
                    style={{ width: `${statDefense}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statDefense}%
                  </div>
                </div>
              </div>
              <div className='skills-bar'>
                <p>Special attack</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-warning'
                    role='progressbar'
                    style={{ width: `${statSpAttack}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statSpAttack}%
                  </div>
                </div>
              </div>
              <div className='skills-bar'>
                <p>Special defense</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-success'
                    role='progressbar'
                    style={{ width: `${statSpDefense}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statSpDefense}%
                  </div>
                </div>
              </div>
              <div className='skills-bar'>
                <p>Speed</p>
                <div className='progress'>
                  <div
                    className='progress-bar bg-success'
                    role='progressbar'
                    style={{ width: `${statSpeed}%` }}
                    aria-valuenow='25'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  >
                    {statSpeed}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetailed;
