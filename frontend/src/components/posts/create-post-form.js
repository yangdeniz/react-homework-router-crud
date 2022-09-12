import { useNavigate } from 'react-router-dom';
import PostContainer from './post-container';
import PostInput from './post-input';
import useStorage from '../../shared/hooks/useStorage';
import { useEffect, useState } from 'react';

function CreatePostForm() {
  const navigate = useNavigate();
  const [content, setContent] = useStorage(localStorage, 'newPost');
  const [isPublished, setIsPublished] = useState(false);

  const onSave = () => {
    setContent('');
    setIsPublished(true);
  }

  useEffect(() => {
    if (isPublished) {
      navigate('/')
    }
  }, [isPublished, navigate]);

  return (
    <PostContainer close={{path: '/'}}>
      <PostInput initialValue={content} action='Опубликовать' onChange={setContent} onSave={onSave} />
    </PostContainer>
  );
}

export default CreatePostForm;