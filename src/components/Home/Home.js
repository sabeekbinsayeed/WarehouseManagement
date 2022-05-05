import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Products from '../Products/Products';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Info></Info>
            <Stats></Stats>

        </div>
    );
};

export default Home;