import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserLiked from './pages/UserLiked';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/Login" element={<Login/>}></Route>
      <Route exact path ="/Signup" element={<Signup/>}></Route>
      <Route exact path ="/" element={<Netflix/>}></Route>
      <Route exact path ="player" element={<Player/>}></Route>
      <Route exact path ="/movies" element={<Movies/>}></Route>
      <Route exact path ="/mylist" element={<UserLiked/>}></Route>
      <Route exact path ="/tv" element={<TVShows/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
