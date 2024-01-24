import React from 'react';
import HornedBeast from './HornedBeast';

const Gallery = () => {
    const beastData = [
        {
            title: 'Beast 1',
            imageUrl: 'url',
            description: 'Description for Beast 1'
        },
        {
            title: 'Beast 2',
            imageUrl: 'url',
            description: 'Description for Beast 2'
        },
    ];

    return (
        <>
            {beastData.map((beast, index) => (
                <HornedBeast
                    key={index}
                    title={beast.title}
                    imageUrl={beast.imageUrl}
                    description={beast.description}
                />
            ))}
        </>
    );
};

export default Gallery;