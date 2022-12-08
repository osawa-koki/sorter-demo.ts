import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div id="NotFound">
      <h1>404 Not Found</h1>
      <p>指定したページが見つかりません。</p>
      <Link to="/">トップへ</Link>
    </div>
  );
}

export default NotFound;
