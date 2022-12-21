import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

import '../components/header.scss';

import './description.scss';
import './demo.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
