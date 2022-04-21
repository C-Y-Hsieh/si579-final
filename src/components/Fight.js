import {Grid, Cell} from 'react-foundation';
import './Fight.css';
import {useRef, useState} from "react";
import {useEffect} from "react";
import Animation from "./Animation";
import WinLose from "./WinLose";

const Fight = (props) => {
    const fightRef = useRef();
    const fightImageRef = useRef();
    const [scrolled, setScrolled] = useState(false);
    let fight;


    function scroll() {
        fightRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            setScrolled(true);
        }, 1000);
    }

    /*
    useEffect(() => {

        //give some time to render so that the screen can scroll to the correct position without cutting the information
        setTimeout(() => {
            scroll();
        }, 200);

    }, [props.selectedPokemon])

     */

    useEffect(() => {
            scroll();
    }, [props.selectedPokemon])


    if (props.selectedPokemon.length){


        fight = <Grid className="fight">
            <Cell large={3} medium={4}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.selectedPokemon[0].id}.png`}
                    alt={`${props.selectedPokemon[0].name}`}
                    className="pokemon-image"
                />
                <p>Pokemon: {props.selectedPokemon[0].name}</p>
                <p>Attack: {props.selectedPokemon[0].attack}</p>
                <p>Defense: {props.selectedPokemon[0].defense}</p>
            </Cell>

            <Cell large={3} medium={4} className="vs">
                <Animation selectedPokemon={props.selectedPokemon} fightImageRef={fightImageRef} scrolled={scrolled}/>
            </Cell>

            <Cell large={3} medium={4}>
                <img
                    ref={fightImageRef}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.npcPokemon[0].id}.png`}
                    alt={`${props.npcPokemon[0].name}`}
                    className="pokemon-image"
                />
                <p>Pokemon: {props.npcPokemon[0].name}</p>
                <p>Attack: {props.npcPokemon[0].attack}</p>
                <p>Defense: {props.npcPokemon[0].defense}</p>
            </Cell>

            <Cell large={3}>
                <WinLose npcPokemon={props.npcPokemon} selectedPokemon={props.selectedPokemon} fightImageRef={fightImageRef} />
            </Cell>
        </Grid>
    }

    return <div ref={fightRef}>
        {fight}

    </div>

}

export  default Fight;