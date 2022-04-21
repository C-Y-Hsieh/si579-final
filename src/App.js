import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import {Grid, Cell, Callout, Colors} from 'react-foundation';
import PlayerPokemon from "./components/PlayerPokemon";
import PlayerCards from "./components/PlayerCards";
import {useState} from "react";
import NPCCard from "./components/NPCCard";
import Fight from "./components/Fight";
import Animation from "./components/Animation";

function App() {
  const [playerPokemon, setPlayerPokemon] = useState(['??']);
  const [npcPokemon, setNpcPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);


  return (
    <div className="App">

      <h1>Chia-Ying Hsieh Final Project</h1>

        <Callout>
            <p>Game Rules:</p>
            <p>Your goal is to beat your rival.</p>
            <p>You can select 1 Pokemon from 5 random Pokemons. However, only one Pokemon will be revealed at a time.</p>
            <p>You can select the current Pokemon or move forward to the next one.</p>
            <p>Select, and fight! Let's see if you win.</p>
            <ul>
                <li>Your ATTACK is higher than your rival's DEFENSE -> Your attack is successful</li>
                <li>Your DEFENSE is higher than/equal to your rival's ATTACK -> Your defense is successful</li>
                <li>You win only when both your attack and defense are successful.</li>
            </ul>
        </Callout>
        <Callout color={Colors.PRIMARY}>
            How to decide to select or move forward? Just Guess 😏 Does the Pokemon look stronger than the rival?
        </Callout>




        <PlayerPokemon setPlayerPokemon={setPlayerPokemon} setNpcPokemon={setNpcPokemon} setSelectedPokemon={setSelectedPokemon}/>
      <Grid>
        <Cell large={9} medium={9}>
            <PlayerCards playerPokemon={playerPokemon} setSelectedPokemon={setSelectedPokemon} />
        </Cell>

        <Cell large={1} medium={1}>

        </Cell>

        <Cell large={2} medium={2}>
            <NPCCard npcPokemon={npcPokemon}/>
        </Cell>
      </Grid>
        <Fight playerPokemon={playerPokemon} npcPokemon={npcPokemon} selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default App;
