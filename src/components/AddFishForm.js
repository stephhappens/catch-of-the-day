import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        // Stop form from submitting
        event.preventDefault();
        // Create our fish object with the data being entered in the form
        const fish = {
            nameRef: this.nameRef.value.value,
            priceRef: parseFloat(this.priceRef.value.value),
            statusRef: Boolean(this.statusRef.value.value),
            descRef: this.descRef.value.value,
            imageRef: this.imageRef.value.value,
        }
        console.log(fish);
    };
    render() {
        return (
        <form className="fish-edit" onSubmit={this.createFish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="name"/>
            <input name="price" ref={this.priceRef} type="text" placeholder="price"/>
            <select name="status" ref={this.statusRef}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea name="desc" ref={this.descRef} placeholder="desc"/>
            <input name="image" ref={this.imageRef} type="text" placeholder="image"/>
            <button type="submit">+ Add Fish</button>
        </form>
        );
    }
}

export default AddFishForm;
