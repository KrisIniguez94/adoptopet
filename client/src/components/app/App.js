import React, { Component } from 'react';
import './App.css';
import Puppy from '../puppy/Puppy';
import Header from '../header/Header';
import PetForm from '../form/PetForm';

class App extends Component {
  state = {
    loading: true,
    puppies:[],
    editing:false,
    currentPet:{
      id:null,
      name:"",
      breed:"",
      weight:""
    }
  }

  updatePets = (puppies) => {
    this.setState({
      puppies:puppies,
      editing: false,
      currentPet: {
        id:null,
        name:"",
        breed:"",
        weight:""
      }
    })
  }

  updatePet =(attribute, value) => {
    this.setState(
      {currentPet: {...this.state.currentPet, [attribute]:value}}
    )
  }

  editPet = (id) => {
    const pet = this.state.puppies.find((newPet) => newPet.id === id)
    this.setState({ currentPet: pet, editing: true})
  }

  stopEdit = () => {
    this.setState({
      editing: false,
      currentPet: {
        id: null,
        name:"",
        breed:"",
        weight:""
      }
    })
  }

  componentWillMount = async () => {
    const response = await fetch('/api/puppies')
    const json = await response.json()
    if (json.puppies) this.setState({loading: false, puppies:json.puppies})
  }

  render() {
    const puppies = this.state.puppies.map((puppy) => {
      return (
      <Puppy
        key={puppy.id}
        puppy={puppy}
        updatePets={this.updatePets}
        editPet={this.editPet}
      />
    );
    });
    return (
      <div className="App">
        <Header />
        <PetForm updatePets={this.updatePets}
          updatePet={this.updatePet}
          currentPet={this.state.currentPet}
          editing={this.state.editing}
          stopEdit={this.stopEdit}
        />
        {
          !this.state.loading && puppies
        }
      </div>
    );
  }
}

export default App;
