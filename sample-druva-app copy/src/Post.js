import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  handleDeleteRecord = () => {
    this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id});
  }

  handleEditRecord = () => {
    this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id});
  }

  render() {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
      <button style={{marginLeft: "20px"}} onClick={this.handleEditRecord}>Edit</button>
      <button onClick={this.handleDeleteRecord}>Delete</button>
    </div>
  );
 }
}
export default connect()(Post);