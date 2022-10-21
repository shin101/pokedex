import React from 'react';
import './App.css';


const imgBaseUrl = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/'

// Show individual pokemon card 

function Pokecard (props){
  return (
    <div className="Pokecard"><h4>{props.name}</h4>
      <div><img src={`${imgBaseUrl}${props.id}.png`}/></div>
        <div>Type: {props.type}</div>
        <div>Exp: {props.base_experience}</div>

    </div>
 );
}


export default Pokecard;