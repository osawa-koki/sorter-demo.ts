import React from 'react';
import Select from 'react-select';

import './Demo.scss';
import { sort_algorithms, SortAlgorithmType, sortin_algorithms_for_visualization } from '../Common/SortAlgorithm';

type Props = {
  sorting_algorithm: SortAlgorithmType[];
};

class Demo extends React.Component {

  state: Props = {
    sorting_algorithm: sort_algorithms,
  }

  render() {
    return (
      <div id="Demo">
        <div id="DemoHeader">
          <div id="DemoAlgorithmSelectBox">
            <Select options={sortin_algorithms_for_visualization} placeholder="SELECT SORTING ALGORITHM" />
          </div>
        </div>
        <div id="DemoBody"></div>
      </div>
    );
  }
}

export default Demo;
