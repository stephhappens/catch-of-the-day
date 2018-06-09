import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

  // load fish data
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // Take a copy of state
    const order = {...this.state.order};
    // Either add to the order, or update our order number 
    order[key] = order[key] + 1 || 1;
    // Call setState to update our state obejct
    this.setState({order});
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
            <Fish 
              key={key}
              index={key}
              details={this.state.fishes[key]} 
              addToOrder={this.addToOrder} 
            />)}
          </ul>
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
