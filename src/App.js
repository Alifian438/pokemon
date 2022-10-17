import './App.css';
import Topbar from './components/Topbar/Topbar';
import Bottombar from './components/Bottombar/Bottombar';
import PokeList from './components/PokeList/PokeList';

function App() {
  return (
    <>
    <Topbar/>
    <PokeList/>
    <Bottombar/>
    </>
  );
}

export default App;
