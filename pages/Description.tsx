import React from 'react';
import Select from 'react-select';

import { marked } from 'marked';

import Header from './header';
import Layout from '../components/Layout';

import { sorting_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';
import { HttpClient } from '../Common/HttpClient';

type Props = {
  description: string;
  sorting_algorithm: SortAlgorithmType[];
  selected_sorting_algorithm: SortAlgorithmType;
};

const readme_added_sort_algorithms = [{
  value: -1,
  label: "README",
  label_ja: "",
  description: "",
  description_ja: "",
} as SortAlgorithmType, ...sorting_algorithms];

const DescriptionData: Map<string, string> = new Map();

class Description extends React.Component {

  state: Props = {
    description: '',
    sorting_algorithm: readme_added_sort_algorithms,
    selected_sorting_algorithm: readme_added_sort_algorithms[0],
  };

  componentDidMount() {
    this.update_markdown(this.state.selected_sorting_algorithm);
  }

  select_changed = (selected_option: any) => {
    this.update_markdown(selected_option);
  };

  update_markdown = (target_option: any) => {
    const label = target_option.label.replace(/ /g, '');
    if (DescriptionData.has(label)) {
      const description = DescriptionData.get(label);
      this.setState({ description: description });
      return;
    }
    HttpClient.Get(`./docs/${label}.md`)
    .then((response) => {
      const description = marked.parse(response);
      DescriptionData.set(label, description);
      this.setState({
        description: description,
        selected_sorting_algorithm: target_option,
      });
    })
    .catch((error) => {
      const text  = "<h1>Fetch Failed...</h1><p>ページのロードに失敗しました。<br />通信環境が悪いか、ページが用意されていない可能性があります。</p>";
      this.setState({
        description: text,
        selected_sorting_algorithm: target_option,
      });
    });
  }

  render() {
    return (
      <Layout title="sorter-demo.ts">
        <Header />
        <div id="Description">
          <div id="DescriptionSelectBox">
            <Select options={readme_added_sort_algorithms} placeholder="SELECT SORTING ALGORITHM" value={this.state.selected_sorting_algorithm} onChange={this.select_changed} />
          </div>
          <div dangerouslySetInnerHTML={{__html: this.state.description}} className="markdown"></div>
        </div>
      </Layout>
    );
  };
}

export default Description;
