// Get your ingredients
import React from 'react';
import { getFunName } from '../helpers';

// Make your recipe
class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {        
        // Stop the form from submitting
        event.preventDefault();
        // get the text from the input
        console.log(this.myInput);
        // Change to page to /store/storename
    }
    render() {
        return (
        <React.Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text"
                ref="{this.myInput}"
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                />
                <button type="submit" onClick={this.buttonClick}>Visit Store></button>
            </form> 
        </React.Fragment>
        )      
    }
}

// Set it out to eat and share
export default StorePicker;