import Link from 'next/link';
import Image from 'next/image';

import Settings from '../Common/Settings';

import description_img from '../Assets/description.png';
import demo_img from '../Assets/demo.png';
// import './Root.scss';

function Root() {
  return (
    <div id="Root">
      <Link className='RootImg' href={`${Settings.ROOT_PATH}/description`}>
        <Image src={description_img} alt="description" />
      </Link>
      <Link className='RootImg' href={`${Settings.ROOT_PATH}/demo`}>
        <Image src={demo_img} alt="demo" />
      </Link>
    </div>
  );
}

export default Root;
