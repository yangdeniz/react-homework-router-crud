import { Link } from 'react-router-dom';

function Open({path, state}) {
  return (
    <Link to={path} state={state} className='open'></Link>
  );
}

export default Open;