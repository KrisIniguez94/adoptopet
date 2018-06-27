import React, { Component } from 'react';
import './Puppy.css';
import axios from 'axios';

class Puppy extends Component {

  onClick= (id) => {
    axios.delete(`/api/puppies/${id}`)
      .then((result) => {this.props.updatePets(result.data)})
  }
  render() {
    const {name, breed, weight, id} = this.props.puppy
    return (
      <div className="Puppy">
      <span
        className="Pet-Delete glyphicon glyphicon-remove-sign"
        onClick={() => this.onClick(id)} />
        <h3>{name}</h3>
        <p>
          {breed} | {weight} lbs.
          <span
            className="glyphicon glyphicon-pencil Pet-Edit"
            onClick = { () => this.props.editPet(id)} />
        </p>
      </div>
    );
  }
}

export default Puppy;
