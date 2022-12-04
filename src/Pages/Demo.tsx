import React from 'react';

import './Demo.scss';
import { sort_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';

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
            <label>
              <span className="prompt_text">select sorting algorithm: </span>
              <select className='sorting_algorithm_select_element'>
                {
                  this.state.sorting_algorithm.map((algorithm) => {
                    return <option key={algorithm.name} value={algorithm.name}>{algorithm.name}</option>
                  })
                }
              </select>
            </label>
          </div>
        </div>
        <div id="DemoBody"></div>
      </div>
    );
  }
}

export default Demo;
