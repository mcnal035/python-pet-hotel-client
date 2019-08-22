import React, {Component} from 'react';
import { connect } from 'react-redux';

class addPetForm extends Component  {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PETS' })
    this.props.dispatch({ type: 'FETCH_OWNERS'})
  }
  state = {
    newPet: {
      name: '',
      color: '',
      breed: '',
      owner_name: 'Molly',
    }
  }

  handleChange = (propertyName, event) => {
    console.log('change happened')
    this.setState({
      newPet: {
        ...this.state.newPet,
        [propertyName]: event.target.value,
      }
    });
    console.log(this.state);
  }

  addNewPet = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PET', payload: this.state.newPet })
    this.props.dispatch({ type: 'FETCH_PETS' });
  }

  render() {
  return (
    <>
    <div className="App">
      <header>
      <h1>Add Pet Form</h1>
      </header>
    </div>

    <div>
    <form>
        <input placeholder="Pet Name" value={this.state.newPet.name}
            onChange={(event) => this.handleChange('name', event)}></input>

        <input placeholder="Pet Color" value={this.state.newPet.color}
            onChange={(event) => this.handleChange('color', event)}></input>

        <input placeholder="Pet Breed" value={this.state.newPet.breed}
            onChange={(event) => this.handleChange('breed', event)}></input>
          
        <select onChange={(event) => this.handleChange('owner_name', event)}>
          {this.props.reduxStore.owners.map((owner, i) => {
            return (<option key={i} value={owner.name}>{owner.name}</option>);
          })}
        </select>

        <button type="submit" onClick={(event) => this.addNewPet(event)}>Submit</button>
    </form>
    </div>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(addPetForm);