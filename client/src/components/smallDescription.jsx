import React from 'react';

const SmallDescription = ({item}) => (
    <div> 
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
        <h3>{item.description}</h3>
    </div>
)

export default SmallDescription;