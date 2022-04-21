import 'foundation-sites/dist/css/foundation.min.css';
import { Link, Sizes } from 'react-foundation';
import './PlayerPokemon.css'

const PlayerPokemon = (props) => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemonNumber = 5;


    function random (){
        const max = 850;
        const min = 1;
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    async function getPokemon(randomNumber, type){
        const randomPokemonUrl = pokemonUrl + randomNumber;
        console.log('random:', randomNumber);
        //console.log('randomPokemonUrl', randomPokemonUrl);

        const res = await fetch(randomPokemonUrl);
        const data = await res.json();
        console.log(data.forms);

        if (type === 'player'){
            props.setPlayerPokemon((prev) => {
                return [
                    ...prev,
                    {
                        id: randomNumber,
                        key: data.forms[0].name,
                        name: data.forms[0].name,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,
                    },
                ]})
        }
        else if (type === 'npc'){
            props.setNpcPokemon(() => {
                return [
                    {
                        id: randomNumber,
                        key: data.forms[0].name,
                        name: data.forms[0].name,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,
                    },
                ]})
        }


    }


    async function start(){
        props.setPlayerPokemon([]);
        props.setSelectedPokemon([]);
        //props.setNpcPokemon([]);

        for (let i=0; i < pokemonNumber; i++){
            await getPokemon(random(), 'player');
        }

        await  getPokemon(random(), 'npc');

    }

    return <div className="start-button">
        <Link size={Sizes.LARGE}  onClick={start} > Start </Link>
    </div>;
}

export default PlayerPokemon;