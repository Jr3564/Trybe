import React from 'react';

export class Pokedex extends React.Component {
  generatorPokemom(){
    const pokemons = this.props.children;
    return pokemons.map(pokemom => {
      return <div key={pokemom.id.toString()} id={pokemom.name} class='pokeContainer'>
        <p>{pokemom.name}</p>
        <p>{pokemom.type}</p>
        <p>{pokemom.averageWeight.value}{pokemom.averageWeight.measurementUnit}</p>
        <img src={pokemom.image}/>
      </div>
    }
    )
  }
  render() {
    return (
      <div class="container"> 
        {this.generatorPokemom()}
      </div>
    )
  }
};

