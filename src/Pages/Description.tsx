import React from 'react';
import Select from 'react-select';

import { marked } from 'marked';

import './Description.scss';

import { sort_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';
import { HttpClient } from '../Common/HttpClient';

type Props = {
  description: string;
  sorting_algorithm: SortAlgorithmType[];
  selected_sorting_algorithm: SortAlgorithmType;
}

const readme_added_sort_algorithms = [{
  value: -1,
  label: "README",
  label_ja: "",
  description: "",
  description_ja: "",
} as SortAlgorithmType, ...sort_algorithms]

class Description extends React.Component {

  state: Props = {
    description: '',
    sorting_algorithm: readme_added_sort_algorithms,
    selected_sorting_algorithm: readme_added_sort_algorithms[0],
  }

  constructor(props: any) {
    super(props);
    HttpClient.Get("./docs/description.md").then((response) => {
      const description = marked.parse(response);
      this.setState({ description: description });
    });
  }

  select_changed = (selected_option: any) => {
    const label = selected_option.label.replace(/ /g, '_');
    HttpClient.Get(`./docs/${label}.md`)
    .then((response) => {
      const description = marked.parse(response);
      this.setState({
        description: description,
        selected_sorting_algorithm: selected_option,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="Description">
        <div>
          <Select options={readme_added_sort_algorithms} placeholder="SELECT SORTING ALGORITHM" value={this.state.selected_sorting_algorithm} onChange={this.select_changed} />
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.description}} className="markdown"></div>
      </div>
    );
  }
}

export default Description;
