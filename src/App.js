import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import {BrowserRouter, Route, Routes}from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/footer/footer';
import Card from './Components/cards/card';
import Dashboard from './dashboard/dashboard';
import Card_details from './Components/cards/card_details/card_details';
import ImgSlider from './Components/imgSlider/imgSlider';
import Stars from './Components/stars/stars';
import Card_details_2 from './Components/cards/card_details_2/card_details_2';
import More_movies from './Components/cards/more_movies/more_movies';
import SPLouder from './Components/preLoud/SpinnerLouder';
import Shows from './Components/UPcomingShows/shows';

function App() {
  return (
    <div className="App">
      
      
      {/* <SPLouder/> */}
   <BrowserRouter>
    <Routes>
      {/* <Route path='/header'element={} /> */}
      <Route path="/card_details"element={<Card_details/>} />
      <Route path='/'element={<Dashboard/>} />
      <Route path='/card'element={<Card/>} />
      <Route path='/footer'element={<Footer/>} />
      <Route path='/ImgeSlider'element={<ImgSlider/>}/>
      <Route path='/stars'element={<Stars/>}/>
      <Route path='/Card_details2'element={<Card_details_2/>}/>
      <Route path='/More_movies'element={<More_movies/>}/>
      <Route path='/shows'element={<Shows/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );  
}

export default App;
