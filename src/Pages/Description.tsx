import React from 'react';

import { marked } from 'marked';

import { HttpClient } from '../Common/HttpClient';

type Props = {
  description: string;
}

class Description extends React.Component {

  state: Props = {
    description: ''
  }

  constructor(props: any) {
    super(props);
    HttpClient.Get("./docs/description.md").then((response) => {
      const description = marked.parse(response);
      this.setState({ description: description });
    });
  }

  render() {
    return (
      <div id="Description">
        <div dangerouslySetInnerHTML={{__html: this.state.description}}></div>
      </div>
    );
  }
}

export default Description;
