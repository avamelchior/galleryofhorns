import React from 'react';

const HornedBeast = ({title, imageUrl, description}) => {
    return (
        <>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} />
            <p>{description}</p>
        </>
    );
};

export default HornedBeast;