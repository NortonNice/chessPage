import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PlayerCard from './components/PlayerCard/PlayerCard';
import players from './players.json';
import Alekhine from '../src/components/Alekhine/Alekhine';

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players
  };

  // Map over this.state.players and render a PlayerCard component
  // For each friend object
  render() {
    return (
      <div>

      <Navbar />
      <PlayerCard
        image={players[0].image}
        name={players[0].name} 
        bio={players[0].bio}
        />
      </div>
    );
  }
}

export default App;
