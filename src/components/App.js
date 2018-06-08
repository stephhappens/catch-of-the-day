import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {}, 
    order: {}
  };

  addFish = (fish) => {
    // Take a copy of the exisiting state
    const fishes = { ...this.state.fishes };
    // Add our new fish to our fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
        </div>
        <Order />
        <Inventory 
        addFish={this.addFish}
        loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
