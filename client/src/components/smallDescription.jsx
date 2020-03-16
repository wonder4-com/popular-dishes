import React from 'react';

const SmallDescription = ({ item }) => (
    <div>
        <div id="dishName">{item.dish_name}</div>
        <div id="dishPrice">${item.price}.00</div>
        <div className="smallDescriptionBorder">
            <p>{item.description}</p>
            
        </div>
    </div>
)

export default SmallDescription;