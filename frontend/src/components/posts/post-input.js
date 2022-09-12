import { useState } from 'react';
import Buttons from '../buttons';

function PostInput(props) {
  const [content, setContent] = useState(props.initialValue || '');
  const [isChanged, setIsChanged] = useState(false);
  
  const onSave = () => {
    fetch(process.env.REACT_APP_API, {
      method: 'POST',
      body: JSON.stringify({id: props.id || 0, content: content})
    })
    .then(() => props.onSave(content));
  }

  const onChange = (e) => {
    const newValue = e.target.value;
    setIsChanged(newValue !== props.initialValue);
    setContent(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  }

  return (
    <>
      <div className='post-input'>
        <textarea value={content} onChange={onChange} />
      </div>
      <Buttons>
        <button disabled={!content || !isChanged} className='post-btn' onClick={onSave}>{props.action}</button>
      </Buttons>
    </>
  );
}

export default PostInput;