import React from 'react';
import Select from 'react-select';

import Button from 'react-bootstrap/Button';

import Header from './Header';

import './Demo.scss';
import { sorting_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';

import img_1up from '../Assets/1up.png';
import img_1down from '../Assets/1down.png';
import img_10up from '../Assets/10up.png';
import img_10down from '../Assets/10down.png';

type Props = {
  sorting_algorithm: SortAlgorithmType[];
  selected_sorting_algorithm: SortAlgorithmType;
  stick_count: number;
  sticks: number[];
};

class Demo extends React.Component {

  state: Props = {
    sorting_algorithm: sorting_algorithms,
    selected_sorting_algorithm: sorting_algorithms[0],
    stick_count: 100,
    sticks: [],
  };

  select_changed = (selected_option: any) => {
    this.setState({ selected_sorting_algorithm: selected_option });
  };

  update_stick_count = (operant: number) => {
    const new_stick_count = this.state.stick_count + operant;
    const sticks = [];
    for (let i = 1; i <= new_stick_count; i++) {
      sticks.push(i);
    }
    this.setState({
      sticks: sticks,
      stick_count: new_stick_count,
    });
  };

  Shuffle = () => {
    const sticks = this.state.sticks;
    for (let i = sticks.length - 1; 0 < i; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [sticks[i], sticks[r]] = [sticks[r], sticks[i]];
    }
    this.setState({ sticks: sticks });
  };

  Sort() {
    const sort_algorithm = this.state.selected_sorting_algorithm;
    switch (sort_algorithm.label) {
      case "Bubble Sort":
        this.BubbleSort();
        break;
      case "Selection Sort":
        this.SelectionSort();
        break;
      case "Insertion Sort":
        this.InsertionSort();
        break;
      case "Merge Sort":
        this.MergeSort();
        break;
      default:
        break;
    }
  };

  async BubbleSort() {
    const sticks = this.state.sticks;
    for (let i = 0; i < sticks.length - 1; i++) {
      for (let j = sticks.length - 1; i < j; j--) {
        if (sticks[j] < sticks[j - 1]) {
          [sticks[j], sticks[j - 1]] = [sticks[j - 1], sticks[j]];
          await new Promise(resolve => setTimeout(resolve, 3));
          this.setState({ sticks: sticks });
        }
      }
    }
  };

  async InsertionSort() {
    const sticks = this.state.sticks;
    for (let i = 1; i < sticks.length; i++) {
      const v = sticks[i];
      let j = i - 1;
      while (j >= 0 && sticks[j] > v) {
        sticks[j + 1] = sticks[j];
        j--;
        await new Promise(resolve => setTimeout(resolve, 3));
        this.setState({ sticks: sticks });
      }
      sticks[j + 1] = v;
    }
  };

  async SelectionSort() {
    const sticks = this.state.sticks;
    for (let i = 0; i < sticks.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < sticks.length; j++) {
        if (sticks[j] < sticks[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [sticks[i], sticks[min]] = [sticks[min], sticks[i]];
        await new Promise(resolve => setTimeout(resolve, 3));
        this.setState({ sticks: sticks });
      }
    }
  };

  async MergeSort() {
    const sticks = this.state.sticks;
    const merge = async (left: number[], right: number[]) => {
      let i = 0;
      let j = 0;
      const result = [];
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        await new Promise(resolve => setTimeout(resolve, 3));
        this.setState({ sticks: result });
      }
      return result.concat(left.slice(i)).concat(right.slice(j));
    };
    const mergeSort = async (array: number[]): Promise<any> => {
      if (array.length <= 1) {
        return array;
      }
      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);
      return merge(await mergeSort(left), await mergeSort(right));
    };
    this.setState({ sticks: await mergeSort(sticks) });
  };

  componentDidMount() {
    this.update_stick_count(0);
  };

  render() {
    return (
      <div>
        <Header />
        <div id="Demo">
          <div id="DemoHeader">
            <div id="DemoAlgorithmSelectBox">
              <Select options={this.state.sorting_algorithm} placeholder="SELECT SORTING ALGORITHM" value={this.state.selected_sorting_algorithm} onChange={this.select_changed} />
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
            <div id="StickCountChanger">
              <img onClick={() => {this.update_stick_count(-10)}} src={img_10down} alt="1down" className={((30 <= this.state.stick_count - 10) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <img onClick={() => {this.update_stick_count(-1)}} src={img_1down} alt="10down" className={((30 <= this.state.stick_count - 1) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <div className="StickCountChangerComponents displayer">{this.state.stick_count}回</div>
              <img onClick={() => {this.update_stick_count(+1)}} src={img_1up} alt="1up" className={((this.state.stick_count + 1 <= 300) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <img onClick={() => {this.update_stick_count(+10)}} src={img_10up} alt="10up" className={((this.state.stick_count + 10 <= 300) ? "" : "disabled") + " StickCountChangerComponents updater"} />
            </div>
          </div>
          <div id="DemoBody">
            <div id="DemoBodyButtons">
              <Button variant="outline-success" onClick={this.Shuffle}>シャッフル♪</Button>
              <Button variant="outline-primary" onClick={() => {this.Sort()}}>ソート開始♪</Button>
            </div>
            <div id="DemoCanvas">
              {
                this.state.sticks.map((stick, index) => {
                  return <div key={index} className="Stick" style={{height: `calc(100% / ${this.state.stick_count} * ${stick})`, backgroundColor: `hsl(${(stick * 360 / this.state.stick_count).toString()}deg, 100%, 50%)`, width: `calc(100% / ${this.state.stick_count})`}}></div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Demo;
