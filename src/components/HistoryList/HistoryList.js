import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App/App';



class HistoryList extends Component  {

  handleDelete = (item) => {
    console.log(item)
    this.props.dispatch({ type: 'DELETE_PET', payload: item.id })
  }

  handleCheckIn = (item) => {
    console.log(item)
    this.props.dispatch({ type: 'UPDATE_CHECK_IN', payload: item.id })
  }

  render() {
  return (
    <>
      {/* History list will display the list of pets */}
      <tr>
      <td>{this.props.item.owner_name}</td>
      <td>{this.props.item.name}</td>
      <td>{this.props.item.breed}</td>
      <td>{this.props.item.color}</td>
      <td>{this.props.item.checked_in}</td>
      <td> <button onClick={(event) => this.handleDelete(this.props.item)}>Delete</button></td>
      <td><button onClick={(event) => this.handleCheckIn(this.props.item)}>Check In</button></td>
      </tr>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(HistoryList);