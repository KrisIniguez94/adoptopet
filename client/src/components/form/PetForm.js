import React, {Component} from 'react';
import './PetForm.css';
import axios from 'axios';

class PetForm extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.currentPet)
    const {name, breed, weight, id} = this.props.currentPet
    if (this.props.editing) {
      axios.patch(`/api/puppies/${id}`, {name, breed, weight})
        .then((result) => {
          this.props.updatePets(result.data)
        })
    } else {
      axios.post('/api/puppies', {name, breed, weight})
        .then((result) => {
          this.props.updatePets(result.data)
        })
    }
  }

  onChange = (e) => {this.props.updatePet(e.target.name, e.target.value)}

  render() {
    const {name, breed, weight, id} = this.props.currentPet
    return (
      <form className="Pet" onSubmit = {this.onSubmit} >
      <h3>{this.props.editing ? "Update Pet" : "Add a pet"}</h3>
      <p className="form-group">
        <label htmlFor="name">Name</label>
        <input
            type = "text"
            name = "name"
            required
            className="form-control"
            onChange={this.onChange}
            value={name}
        />
      </p>
      <p className="form-group">
        <label htmlFor="breed">Breed</label>
        <input
            type = "text"
            name = "breed"
            required
            className="form-control"
            onChange={this.onChange}
            value={breed}
        />
      </p>
      <p className="form-group">
        <label htmlFor="weight">Weight</label>
        <input
            type = "text"
            name = "weight"
            required
            className="form-control"
            onChange={this.onChange}
            value={weight}
        />
      </p>
      <p className="form-group">
        {
          this.props.editing &&
          <a className= "btn btn-default"
            style={{mrginRight:".5em"}}
            onClick={this.props.stopEdit}
          >Cancel</a>
        }
        <input
          type="submit"
          value={this.props.editing ? "Update Pet" : "Add Pet"}
          className="btn btn-primary"
        />
      </p>
      </form>
    )
  }
}

export default PetForm;
