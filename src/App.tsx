import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Navbar from './core/components/Navbar/Navbar';
import Home from './core/pages/Home/Home';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
    <Routes >
     
      <Route path='/' Component={Home} />
     
      </Routes>
    </BrowserRouter>

  );
}

export default App;
