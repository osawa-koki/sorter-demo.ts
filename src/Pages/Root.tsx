import { Link } from 'react-router-dom';

import Settings from '../Common/Settings';

import description_img from '../Assets/description.png';
import demo_img from '../Assets/demo.png';
import './Root.scss';

function Root() {
  return (
    <div id="Root">
      <Link className='RootImg' to={`${Settings.ROOT_PATH}/description`}>
        <img src={description_img} alt="description" />
      </Link>
      <Link className='RootImg' to={`${Settings.ROOT_PATH}/demo`}>
        <img src={demo_img} alt="demo" />
      </Link>
    </div>
  );
}

export default Root;
