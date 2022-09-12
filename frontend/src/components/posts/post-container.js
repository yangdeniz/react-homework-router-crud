import Close from '../close';
import Open from '../open';

function PostContainer(props) {
  return (
    <div className='post-container'>
      {props.title && <h5>{props.title}</h5>}
      {props.close && <Close {...props.close} />}
      {props.open && <Open {...props.open} />}
      {props.children}
    </div>
  );
}

export default PostContainer;