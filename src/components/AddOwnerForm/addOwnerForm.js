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
    <table>
      <thead>
        <tr>
          <th></th>
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