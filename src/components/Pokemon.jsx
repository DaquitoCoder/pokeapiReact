import React from 'react';

const Pokemon = ({ posts, loading }) => {
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

  const group = (items, n) =>
    items.reduce((acc, x, i) => {
      const idx = Math.floor(i / n);
      acc[idx] = [...(acc[idx] || []), x];
      return acc;
    }, []);
  return (
    <>
      {group(posts, 4).map((children) => (
        <div className='row m-3' key={group(posts, 4).id}>
          {children.map((children) => (
            <div
              className='col-sm-12 col-md-6 col-lg-3'
              key={children.url.split('/')[6]}
            >
              <div className='card mb-3'>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    children.url.split('/')[6]
                  }.png`}
                  className='card-img-top'
                  alt={children.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    {children.name.charAt(0).toUpperCase() +
                      children.name.slice(1)}
                  </h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Revisa este pokemon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Pokemon;
