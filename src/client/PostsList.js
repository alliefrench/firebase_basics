import React, { Component } from 'react';
import firebase from 'firebase';

import NewPostForm from './NewPostForm';
import Post from './Post';
import { transform } from './utils/utils';

function PostsList({ posts }) {
  console.log('POSTS', posts);
  return (
    <div id="posts">
      <NewPostForm />
      <h3>Ash's posts:</h3>
      {posts.map(post => (
        <Post key={post.id} text={post.text} />
      ))}
    </div>
  );
}

export default class PostsListContainer extends Component {
  constructor() {
    super();
    this.state = '';
    this.postRef = firebase.database().ref('posts/'); //reference to firebase posts
  }

  componentDidMount() {
    //listener for updates
    this.postRef.on('value', snapshot => {
      const posts = transform(snapshot.val());
      this.setState({ posts });
    });
  }

  render() {
    console.log('STATEEE', this.state);
    return this.state.posts ? <PostsList {...this.state} /> : 'loading';
  }
}
