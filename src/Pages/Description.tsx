import React from 'react';
import ReactDOM from 'react-dom';

import { marked } from 'marked';

import { HttpClient } from '../Common/HttpClient';

class Description extends React.Component {

  constructor(props: any) {
    super(props);
    HttpClient.Get("./description.md").then((response) => {
      const description = marked.parse(response);
      console.log(description);
    });
  }

  render() {
    return (
      <div id="Description">
        説明
      </div>
    );
  }
}

export default Description;
