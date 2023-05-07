import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav'
import { Container } from '@mui/material';
import Search from './pages/Search';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Trending from './pages/Trending';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">

        <Container>
          <Link to="/" >Trending</Link>
          <Link to="/series" >Series</Link>
          <Routes>
            <Route path='/' element={<Trending />} exact ></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/series' element={<Series />}></Route>
            <Route path='/search' element={<Search />}></Route>
          </Routes>
        </Container>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
