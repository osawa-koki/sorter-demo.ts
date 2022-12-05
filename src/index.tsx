import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import Settings from './Common/Settings';

// ルーティング
import Root from './Pages/Root';
import NotFound from './Pages/NotFound';
import Description from './Pages/Description';
import Demo from './Pages/Demo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${Settings.ROOT_PATH}/`} element={<Root />} />
        <Route path={`${Settings.ROOT_PATH}/description`} element={<Description />} />
        <Route path={`${Settings.ROOT_PATH}/demo`} element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
