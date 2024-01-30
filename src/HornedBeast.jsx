import React, { useState } from 'react';

const HornedBeast = ({ title, imageUrl, description }) => {
  const [favorites, setFavorites] = useState(0);

  const handleFavoriteClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} style={{ width: '286px', height: '200px' }}/>
      <p>{description}</p>
      <button onClick={handleFavoriteClick}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
        {favorites} Favorites
      </button>
    </div>
  );
};

export default HornedBeast;
