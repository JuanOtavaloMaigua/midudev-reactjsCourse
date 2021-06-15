import logo from './logo.svg'; //eslint-disable-line
import React, {useState} from 'react'
import './App.css';
import ListOfGifs from './Components/ListOfGifs'

import { Link, Route } from "wouter"

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        {/* <Link to="/">
          <img className="App-logo" src='logo.svg' alt="GiffyLogo"/>
        </Link> */}

        <Link to='/gif/Colombia'>Gifs de Colombia</Link>
        <Link to='/gif/panda'>Gifs de panda</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>

        <Route component={ListOfGifs}
          path="/gif/:keyword"/>  
          
      </section>
    </div>
  );
}
