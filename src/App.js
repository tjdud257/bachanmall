import './App.css';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import SidePage from './pages/SidePage';
import MainPage from './pages/MainPage';
import SoupPage from './pages/SoupPage';
import SalsdPage from './pages/SalsdPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className='wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='/side-1' element={<SidePage />} />
          <Route path='/main-1' element={<MainPage />} />
          <Route path='/soup-1' element={<SoupPage />} />
          <Route path='/salad' element={<SalsdPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
