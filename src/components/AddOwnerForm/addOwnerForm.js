import React, {Component} from 'react';
import { connect } from 'react-redux';

class addOwnerForm extends Component  {

  state = {
    newOwner: {
      name: '',
    }
  }

  addNewOwner = event => {
    event.preventDefault();
    let objectToSend = {
      ...this.state.newOwner
    }

    this.props.dispatch({ type: 'ADD_OWNER', payload: objectToSend })
    this.setState({
      newOwner: {
        ...this.state.newOwner,
        id: this.state.newOwner.id + 1,
      }
    });
    this.props.dispatch({ type: 'FETCH_OWNERS' });
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
          <button type="submit" onClick={this.addNewOwner}>Submit</button>
      </form>
    </div>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(addOwnerForm);