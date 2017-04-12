import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component{
  componentsWillMount(){
    console.log('This would be a good time to call an action creator to fetch posts.');
  }

  render(){
    return (
      <div>List of Blog Posts</div>
    );
  }
}

export default PostsIndex;
