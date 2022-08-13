import React from 'react';

const Pokemon = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className='spinner-border text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    );
  }
  return (
    <div className='row m-3'>
      {posts.map((post) => (
        <div className='col-md-2' key={post.url.split('/')[6]}>
          <div className='card mb-3'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.url.split('/')[6]}.png`} className='card-img-top' alt={post.name} />
            <div className='card-body'>
              <h5 className='card-title'>{post.name.charAt(0).toUpperCase() + post.name.slice(1)}</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;