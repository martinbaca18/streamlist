import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
    const [streamList, setStreamList] = useState([]);

    const handleAddItem = (item) => {
        setStreamList([...streamList, item]);
        console.log(streamList);
    };

    return (
        <div className="App">
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main>
                <h1>StreamList</h1>
                <input type="text" onBlur={(e) => handleAddItem(e.target.value)} placeholder="Add to stream list" />
            </main>
        </div>
    );
};

export default App;
