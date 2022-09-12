import PostBody from './post-body';
import PostContainer from './post-container';

function Post(props) {
  return (
    <PostContainer open={{path: `/posts/${props.id}`, state: {...props}}}>
      <PostBody {...props} />
    </PostContainer>
  );
}

export default Post;