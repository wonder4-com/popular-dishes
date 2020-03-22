import React from 'react';
import MenuItem from './menuItem.jsx';
import { FullMenuFormat } from '../components-style/FullMenu-style.jsx';

const FullMenu = ({restaurant, items}) => {
    return (
        <FullMenuFormat> 
            <h3><strong>Menu for {restaurant}</strong> </h3>
            {items.map((data) => <MenuItem data={data} />)}
        </FullMenuFormat>
    )
}


export default FullMenu;