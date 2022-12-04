import { Link } from 'react-router-dom';

import description_img from '../Assets/description.png';
import './Root.scss';

function Root() {
  return (
    <div id="Root">
      <Link className='RootImg' to="/description">
        <img src={description_img} alt="description" />
      </Link>
    </div>
  );
}

export default Root;
