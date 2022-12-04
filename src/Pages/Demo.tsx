import React from 'react';
import Select from 'react-select';

import './Demo.scss';
import { sort_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';

type Props = {
  sorting_algorithm: SortAlgorithmType[];
  selected_sorting_algorithm: SortAlgorithmType;
};

class Demo extends React.Component {

  state: Props = {
    sorting_algorithm: sort_algorithms,
    selected_sorting_algorithm: sort_algorithms[0],
  }

  select_changed = (selected_option: any) => {
    this.setState({ selected_sorting_algorithm: selected_option });
  }

  render() {
    return (
      <div id="Demo">
        <div id="DemoHeader">
          <div id="DemoAlgorithmSelectBox">
            <Select options={sort_algorithms} placeholder="SELECT SORTING ALGORITHM" value={this.state.selected_sorting_algorithm} onChange={this.select_changed} />
          </div>
          <div id="DemoAlgorithmInfoBox">
            <table>
              <tbody>
                <tr>
                  <th>名称 (en)</th>
                  <td>{this.state.selected_sorting_algorithm.label}</td>
                </tr>
                <tr>
                  <th>名称 (ja)</th>
                  <td>{this.state.selected_sorting_algorithm.label_ja}</td>
                </tr>
                <tr>
                  <th>説明 (en)</th>
                  <td>{this.state.selected_sorting_algorithm.description}</td>
                </tr>
                <tr>
                  <th>説明 (ja)</th>
                  <td>{this.state.selected_sorting_algorithm.description_ja}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="DemoBody"></div>
      </div>
    );
  }
}

export default Demo;
