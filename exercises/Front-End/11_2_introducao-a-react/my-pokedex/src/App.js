import './App.css';
import { Pokedex } from './pokedex'
import pokemons from './data';

function App() {
  return (
    <Pokedex>
      {pokemons}
    </Pokedex>
  );
}

export default App;
