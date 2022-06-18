import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import Datas from '../Datas/Datas';
import ChartRep from '../chart/chart';

const Home = () => {
    return (
        <div>
            <nav
            style={{
                backgroundColor: '#f5f5f5',
                padding: '10px',
                borderRadius: '10px',
                marginBottom: '10px',
                marginTop: '10px'

            }}
            >
                <h2>Covid Report</h2>
            </nav>
            <Datas />
        </div>
    );
}

export default Home;
