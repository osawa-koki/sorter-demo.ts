import React from 'react';
import Select from 'react-select';

import './Demo.scss';
import { sort_algorithms, SortAlgorithmType, sorting_algorithms_for_visualization } from '../Common/SortAlgorithm';

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
    const id = selected_option.value;
    const selected_sorting_algorithm = this.state.sorting_algorithm.find((algorithm) => algorithm.id === id);
    if (selected_sorting_algorithm) {
      this.setState({ selected_sorting_algorithm });
    }
  }

  render() {
    return (
      <div id="Demo">
        <div id="DemoHeader">
          <div id="DemoAlgorithmSelectBox">
            <Select options={sorting_algorithms_for_visualization} placeholder="SELECT SORTING ALGORITHM" value={sorting_algorithms_for_visualization[0]} onChange={this.select_changed} />
          </div>
        </div>
        <div id="DemoBody"></div>
      </div>
    );
  }
}

export default Demo;
