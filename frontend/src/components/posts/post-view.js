import { Link, useNavigate, useParams } from 'react-router-dom';
import useLocationOrFetch from '../../shared/hooks/useLocationOrFetch';
import Buttons from '../buttons';
import NotFound from '../not-found';
import PostBody from './post-body';
import PostContainer from './post-container';

function PostView() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useLocationOrFetch(process.env.REACT_APP_API + id);

  const remove = () => {
    fetch(process.env.REACT_APP_API + id, { method: 'DELETE' })
      .then(() => navigate('/'))
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <PostContainer close={{path: '/'}}>
      <PostBody {...post} />
      <Buttons>
        <Link to={`/posts/${id}/edit`} state={{...post}} className='post-btn'>Изменить</Link>
        <button className='post-btn post-btn--danger' onClick={remove}>Удалить</button>
      </Buttons>
    </PostContainer>
  );
}

export default PostView;