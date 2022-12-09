import Link from 'next/link';

import Layout from '../components/Layout'

import Settings from '../Common/Settings';

function Index() {
  return (
    <Layout title="sorter-demo.ts">
      <div id="Root">
        <Link className='RootImg' href={`${Settings.ROOT_PATH}/description`}>
          <img src={`${Settings.IMG_ROOT_PATH}/description.png`} alt="description" />
        </Link>
        <Link className='RootImg' href={`${Settings.ROOT_PATH}/demo`}>
          <img src={`${Settings.IMG_ROOT_PATH}/demo.png`} alt="demo" />
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
