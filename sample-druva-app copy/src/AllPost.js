import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import PerfectScrollbar from "react-perfect-scrollbar";

class AllPost extends Component {
  render() {
    return (
    <div style={{height: '100px'}}>
      <h1>All Posts</h1>
      <PerfectScrollbar option={{ suppressScrollX: true }}>
      {this.props.empArray.map((post) => (
       <div key={post.id}> 
         {post.editing ? <EditComponent post={post} key={post.id} /> :
            <Post key={post.id} post={post} />}
       </div>  
      ) 
      )}
      </PerfectScrollbar>
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        empArray: state
    }
}
export default connect(mapStateToProps)(AllPost);