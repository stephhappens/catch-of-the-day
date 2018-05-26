// Get your ingredients
import React from 'react';

// Make your recipe
class StorePicker extends React.Component {
    render() {
        return (
        <React.Fragment>
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store></button>
            </form> 
        </React.Fragment>
        )      
    }
}

// Set it out to eat and share
export default StorePicker;