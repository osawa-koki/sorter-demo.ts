import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="NotFound">
      <h1>404 Not Found</h1>
      <p>指定したページが見つかりません。</p>
      <Link to="/">トップへ</Link>
    </div>
  );
}

export default NotFound;
