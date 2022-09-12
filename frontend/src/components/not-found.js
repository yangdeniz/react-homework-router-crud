import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      Страница не найдена. Перейти на <Link to='/'>главную</Link>
    </div>
  );
}

export default NotFound;