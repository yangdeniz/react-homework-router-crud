import formatDateTime from '../../shared/format-date-time';

function RawPostBody(props) {
  return (
    <>
      <div className='post-time'>{props.created}</div>
      <div className='post-content'>{props.content}</div>
      <div className='post-actions'>
        <button>Нравится</button>
        <button>Комментировать</button>
      </div>
    </>
  );
}

const PostBody = formatDateTime(RawPostBody);

export default PostBody;