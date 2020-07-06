import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  });
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(query) => setQuery(query)} />

      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
