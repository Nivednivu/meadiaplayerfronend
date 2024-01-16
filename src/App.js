import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import WatchHistory from './pages/WatchHistory';
import Header from './componets/Header';
import Footer from './componets/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={ <Landingpage/>
}/>
        <Route path='/home' element={ <Home/>
}/>
        <Route path='/watchHistory' element={ <WatchHistory/>
}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
