import React, {Component} from 'react';
import { connect } from 'react-redux';
import OwnerList from '../OwnerList/OwnerList';


class addOwnerForm extends Component  {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_OWNERS'})
  }
  state = {
    newOwner: {
      name: '',
    }
  }

  addNewOwner = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_OWNER', payload: this.state })
    this.props.dispatch({ type: 'FETCH_OWNERS' });
  }

  handleChange = (propertyName, event) => {
    console.log('event happened', this.state)
    this.setState({
      newOwner: {
        ...this.state.newOwner.name,
        [propertyName]: event.target.value,
      }
    });
  }

  render() {
  return (
    <>
    <div className="App">
      <header>
      <h1>Add Owner</h1>
      </header>
    </div>
    <div>
      <form>
        <input onChange={(event) => this.handleChange('name', event)} placeholder="Owner Name" 
        value={this.state.newOwner.name}></input>
        <button type="submit" onClick={this.addNewOwner}>Submit</button>
      </form>
    </div>
    <table>
      <thead>
        <tr>
          <th>Owner List</th>
        </tr>
      </thead>
      <tbody>
        {this.props.reduxStore.owners.map(item => {
          return(
            <OwnerList key={item.id} item={item} />
          
        )
        })}
        </tbody>
    </table>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(addOwnerForm);