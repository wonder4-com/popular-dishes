import React from 'react';
import MenuItem from './menuItem.jsx';

const FullMenu = ({restaurant, items}) => {
    return (
        <div className="fullMenu"> 
            <h3><strong>Menu for {restaurant}</strong> </h3>
            {items.map((data) => <MenuItem data={data} />)}
        </div>
    )
}


export default FullMenu;