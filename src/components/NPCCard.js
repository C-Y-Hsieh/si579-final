import './Card.css'
import { Cell } from "react-foundation";


const NPCCard = (props) => {


    if (props.npcPokemon.length){
        console.log('npcPokemon:', props.npcPokemon[0])
        return <div >
            <Cell className="NPC-card cards">
                <p className="rival">Your Rival</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.npcPokemon[0].id}.png`} alt={`${props.npcPokemon[0].name}`} />
                <p>Pokemon: {props.npcPokemon[0].name}</p>
                <p>Attack: ??</p>
                <p>Defense: ??</p>
            </Cell>

        </div>
    }


}

export default NPCCard;