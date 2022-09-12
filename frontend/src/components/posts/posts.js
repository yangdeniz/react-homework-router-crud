import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import PostContainer from './post-container';
import Buttons from '../buttons';

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch(process.env.REACT_APP_API)
      .then(response => response.json())
      .then(json => setPosts(json));
  }

  useEffect(fetchPosts, []);

  return (
    <div className='posts'>
      <PostContainer>
        <Buttons>
          <Link to='/posts/new' className='post-btn'>Создать пост</Link>
        </Buttons>
      </PostContainer>
      {posts.map(post => <Post key={post.id} {...post} />)}
    </div>
  );
}

export default Posts;