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
        const storeName = this.myInput.value.value;

        // Change to page to /store/storename
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return (
        <React.Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input 
                type="text"
                ref={this.myInput}
                required 
                placeholder="puppies" 
                defaultValue={getFunName()}
                />
                <button type="submit">Visit Store></button>
            </form> 
        </React.Fragment>
        )      
    }
}

// Set it out to eat and share
export default StorePicker;