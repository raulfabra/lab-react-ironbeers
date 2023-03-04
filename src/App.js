
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import ErrorPage from './pages/ErrorPage';
import SingleBeer from './pages/SingleBeer';


function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(results => {
        setBeers(results.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beers = {beers}/>} />
        <Route path="/beers/:id" element={<SingleBeer beers = {beers} />} />
        <Route path="/new-beer" element = {<NewBeer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
