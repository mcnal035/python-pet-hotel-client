import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionChannel } from 'redux-saga/effects';

class OwnerList extends Component  {

  deleteOwner = () => {
    this.props.dispatch({ type: 'DELETE_OWNER', payload: this.props.item.id})
  }

  countPets = (item) => {
    let count = 0;
    for(let i=0; i<this.props.reduxStore.pets.length; i++){
      if(this.props.reduxStore.pets[i].owner_name === item.name){
        count++
      }
    }
    return count;
  }

  render() {
  return (
    <>
    <tr>
      <td>{this.props.item.name}</td>
      <td>{this.countPets(this.props.item)}</td>
      <td><button id="deleteButton" onClick={this.deleteOwner}>Delete</button></td>
    </tr>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(OwnerList);