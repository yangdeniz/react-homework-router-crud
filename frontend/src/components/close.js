import { Link } from 'react-router-dom';

function Close({path, state}) {
  return (
    <Link to={path} state={state} className='close'></Link>
  );
}

export default Close;