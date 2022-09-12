import { useNavigate, useParams } from 'react-router-dom';
import useLocationOrFetch from '../../shared/hooks/useLocationOrFetch';
import NotFound from '../not-found';
import PostContainer from './post-container';
import PostInput from './post-input';

function EditPostForm() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useLocationOrFetch(process.env.REACT_APP_API + id);

  const onSave = (value) => {
    navigate(`/posts/${id}`, {state: {...post, content: value}});
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <PostContainer title='Редактировать публикацию' close={{path: `/posts/${id}`, state: {...post}}}>
      <PostInput initialValue={post.content} id={id} action='Сохранить' onSave={onSave} />
    </PostContainer>
  );
}

export default EditPostForm;