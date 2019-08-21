import React, {Component} from 'react';
import { connect } from 'react-redux';


class addPetForm extends Component  {

  componentDidMount (){
    // this.props.dispatch({ type: 'GET_PETS', payload: })
  }

  state = {
    newPet: {
      name: '',
      color: '',
      breed: '',
    }
  }

  handleChange = (propertyName, event) => {
    console.log('event happened')
    this.setState({
      newPet: {
        ...this.state.newPet,
        [propertyName]: event.target.value,
      }
    });
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
          
        <select>
          <option placeholder="Owner Name"></option>
        </select>

        <button type="submit">Submit</button>
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