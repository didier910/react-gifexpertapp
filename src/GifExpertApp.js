import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon Ball', 'Naruto', 'One Piece'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Demon Slayer']);
    //     setCategories( cats => [...cats, 'Demon Slayer']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>
            

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category}/>
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;