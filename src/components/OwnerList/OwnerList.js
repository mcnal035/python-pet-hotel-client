import React, {Component} from 'react';
import { connect } from 'react-redux';

class OwnerList extends Component  {

  deleteOwner = () => {
    
  }

  render() {
  return (
    <>
    <div className="App">
    </div>
    <tr>
      <td>{this.props.item.name}</td>
      {/* <td>{this.props.item.??}</td> */}
      <td>
        <button id="deleteButton" onClick="deleteOwner"></button>
      </td>
    </tr>
    </>
  );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
})

export default connect(mapStateToProps)(OwnerList);