import 'foundation-sites/dist/css/foundation.min.css';
import './Card.css';
import { Grid, Cell, Progress } from 'react-foundation';
import {useState} from "react";
import { Link, Colors, Button } from 'react-foundation';
import {useEffect} from "react";

const PlayerCards = (props) => {
    const cards = [];
    const [progress, setProgress] = useState(20);
    const [selected, setSelected] = useState('');

    function next(){
        console.log("next Pokemon");
        if (progress < 100){
            setProgress((prev) => prev + 20);
        }

    }

    function selectPokemon(){
        console.log("selected:", props.playerPokemon[(progress - 20)/20]);
        const selected = props.playerPokemon[(progress - 20)/20];

        setSelected('conceal-button');

        props.setSelectedPokemon(() => {
            return [
                {
                    id: selected.id,
                    key: selected.name,
                    name: selected.name,
                    attack: selected.attack,
                    defense: selected.defense,
                },
            ]})


    }



    {props.playerPokemon.map((item, index) => {
        const { name, attack, defense, id } = item;
        if(index * 20 + 20 <= progress){
            if(index === 4){
                cards.push(

                    <Cell key={index}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={`${name}`}
                        />
                        <p>Pokemon: {name}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                        <Button color={Colors.SUCCESS} onClick={selectPokemon} className={selected}>Select</Button>
                    </Cell>
                )
            }
            else if ((index * 20 + 20 === progress)){
                cards.push(
                    <Cell key={index}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={`${name}`}
                        />
                        <p>Pokemon: {name}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                        <Button color={Colors.SUCCESS} onClick={selectPokemon} className={selected}>Select</Button>
                        <Link onClick={next} className={selected}>Next</Link>
                    </Cell>
                )
            }
            else{
                cards.push(
                    <Cell className="unselected" key={index}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={`${name}`}
                        />
                        <p>Pokemon: {name}</p>
                        <p>Attack: {attack}</p>
                        <p>Defense: {defense}</p>
                    </Cell>
                )
            }
        }
        else{
            cards.push(
                <Cell className="unselected" key={index}>
                    <img
                        src={`https://images.plurk.com/4f1Rz6jR1GaouLjBcNs6x6.png `}
                        alt={`unknown icon`}
                    />
                    <p>Pokemon: ??</p>
                    <p>Attack: ??</p>
                    <p>Defense: ??</p>
                </Cell>
            )
        }

    })}

    useEffect(() => {
        setProgress(20);
        setSelected('');
    }, [props.playerPokemon])

    if (props.playerPokemon[0] !== '??'){
        return <div className="cards">
            <Progress tabIndex="0" value={progress}/>
            <Grid upOnSmall={1} upOnMedium={5} upOnLarge={5}>
                {cards}
            </Grid>
        </div>
    }



}

export default PlayerCards;