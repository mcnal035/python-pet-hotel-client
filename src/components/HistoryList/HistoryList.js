import React, {Component} from 'react';
import '../App/App';


class HistoryList extends Component  {

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
      </tr>
    </>
  );
  }
}

export default HistoryList;