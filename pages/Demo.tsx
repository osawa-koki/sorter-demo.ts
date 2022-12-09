import Image from 'next/image';
import React from 'react';
import Select from 'react-select';

import Button from 'react-bootstrap/Button';

import Header from './header';

import { sorting_algorithms, SortAlgorithmType } from '../Common/SortAlgorithm';

import Settings from '../Common/Settings';

const stick_count_min = 30;
const stick_count_max = 500;

type Props = {
  sorting_algorithm: SortAlgorithmType[];
  selected_sorting_algorithm: SortAlgorithmType;
  stick_count: number;
  sticks: number[];
  is_locked: boolean;
  interval_time: number;
  is_resetting: boolean;
};

class Demo extends React.Component {

  state: Props = {
    sorting_algorithm: sorting_algorithms,
    selected_sorting_algorithm: sorting_algorithms[0],
    stick_count: 100,
    sticks: [],
    is_locked: false,
    interval_time: 3,
    is_resetting: false,
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

  isSorted(array: number[]): boolean {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  }

  async Reset() {
    this.setState({ is_resetting: true });
    await new Promise(resolve => setTimeout(resolve, this.state.interval_time * 10));
    this.setState({ is_resetting: false });
  };

  async Sort() {
    if (this.state.is_locked) {
      console.log("locked...");
      return;
    }
    this.setState({ is_locked: true });
    const sort_algorithm = this.state.selected_sorting_algorithm;
    switch (sort_algorithm.label) {
      case "Bubble Sort":
        await this.BubbleSort();
        break;
      case "Selection Sort":
        await this.SelectionSort();
        break;
      case "Insertion Sort":
        await this.InsertionSort();
        break;
      case "Merge Sort":
        await this.MergeSort();
        break;
      case "Quick Sort":
        await this.QuickSort();
        break;
      case "Heap Sort":
        await this.HeapSort();
        break;
      case "Counting Sort":
        await this.CountingSort();
        break;
      case "Radix Sort":
        await this.RadixSort();
        break;
      case "Bucket Sort":
        await this.BucketSort();
        break;
      case "Shell Sort":
        await this.ShellSort();
        break;
      case "Comb Sort":
        await this.CombSort();
        break;
      case "Cycle Sort":
        await this.CycleSort();
        break;
      case "Pancake Sort":
        await this.PancakeSort();
        break;
      case "Gnome Sort":
        await this.GnomeSort();
        break;
      case "Stooge Sort":
        await this.StoogeSort();
        break;
      case "Bitonic Sort":
        await this.BitonicSort();
        break;
      case "Pigeonhole Sort":
        await this.PigeonholeSort();
        break;
      case "Odd-Even Sort":
        await this.OddEvenSort();
        break;
      case "Cocktail Sort":
        await this.CocktailSort();
        break;
      case "Bogo Sort":
        await this.BogoSort();
        break;
      case "Sleep Sort":
        await this.SleepSort();
        break;
      case "Strand Sort":
        await this.StrandSort();
        break;
      default:
        break;
    }
    this.setState({ is_locked: false });
  };

  async BubbleSort() {
    const sticks = this.state.sticks;
    for (let i = 0; i < sticks.length - 1; i++) {
      for (let j = sticks.length - 1; i < j; j--) {
        if (this.state.is_resetting) return; // 中断用
        if (sticks[j] < sticks[j - 1]) {
          [sticks[j], sticks[j - 1]] = [sticks[j - 1], sticks[j]];
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
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
        if (this.state.is_resetting) return; // 中断用
        sticks[j + 1] = sticks[j];
        j--;
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: sticks });
      }
      sticks[j + 1] = v;
    }
  };

  async SelectionSort() {
    const sticks = this.state.sticks;
    for (let i = 0; i < sticks.length - 1; i++) {
      if (this.state.is_resetting) return; // 中断用
      let min = i;
      for (let j = i + 1; j < sticks.length; j++) {
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        if (sticks[j] < sticks[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [sticks[i], sticks[min]] = [sticks[min], sticks[i]];
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
        if (this.state.is_resetting) return result.concat(left.slice(i)).concat(right.slice(j)); // 中断用
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
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

  async QuickSort() {
    const sticks = this.state.sticks;
    const quickSort = async (array: number[], left: number, right: number) => {
      if (this.state.is_resetting) return array; // 中断用
      let index;
      if (array.length > 1) {
        index = await partition(array, left, right);
        if (left < index - 1) {
          await quickSort(array, left, index - 1);
        }
        if (index < right) {
          await quickSort(array, index, right);
        }
      }
      return array;
    };
    const partition = async (array: number[], left: number, right: number) => {
      const pivot = array[Math.floor((right + left) / 2)];
      let i = left;
      let j = right;
      while (i <= j) {
        while (array[i] < pivot) {
          i++;
        }
        while (array[j] > pivot) {
          j--;
        }
        if (i <= j) {
          [array[i], array[j]] = [array[j], array[i]];
          i++;
          j--;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return i;
    };
    this.setState({ sticks: await quickSort(sticks, 0, sticks.length - 1) });
  };

  async HeapSort() {
    const sticks = this.state.sticks;
    const heapSort = async (array: number[]) => {
      let size = array.length;
      buildMaxHeap(array);
      while (size > 1) {
        if (this.state.is_resetting) return array; // 中断用
        size--;
        [array[0], array[size]] = [array[size], array[0]];
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: array });
        heapify(array, size, 0);
      }
      return array;
    };
    const buildMaxHeap = (array: number[]) => {
      const size = array.length;
      const middle = Math.floor(size / 2);
      for (let i = middle; i >= 0; i--) {
        heapify(array, size, i);
      }
    };
    const heapify = (array: number[], size: number, i: number) => {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;
      if (left < size && array[left] > array[largest]) {
        largest = left;
      }
      if (right < size && array[right] > array[largest]) {
        largest = right;
      }
      if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, size, largest);
      }
    };
    this.setState({ sticks: await heapSort(sticks) });
  };

  async CountingSort() {
    const sticks = this.state.sticks;
    const countingSort = async (array: number[]) => {
      const max = Math.max(...array);
      const min = Math.min(...array);
      const countArray = new Array(max - min + 1).fill(0);
      for (let i = 0; i < array.length; i++) {
        countArray[array[i] - min]++;
      }
      let j = 0;
      for (let i = min; i <= max; i++) {
        while (countArray[i - min] > 0) {
          if (this.state.is_resetting) return array; // 中断用
          array[j] = i;
          countArray[i - min]--;
          j++;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return array;
    };
    this.setState({ sticks: await countingSort(sticks) });
  };

  async RadixSort() {
    const sticks = this.state.sticks;
    const radixSort = async (array: number[]) => {
      const max = Math.max(...array);
      let divisor = 1;
      while (max / divisor >= 1) {
        if (this.state.is_resetting) return array; // 中断用
        await countingSort(array, divisor);
        divisor *= 10;
      }
      return array;
    };
    const countingSort = async (array: number[], divisor: number) => {
      const countArray = new Array(10).fill(0);
      for (let i = 0; i < array.length; i++) {
        countArray[Math.floor(array[i] / divisor) % 10]++;
      }
      for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
      }
      const sortedArray = new Array(array.length);
      for (let i = array.length - 1; i >= 0; i--) {
        if (this.state.is_resetting) return sortedArray; // 中断用
        sortedArray[countArray[Math.floor(array[i] / divisor) % 10] - 1] = array[i];
        countArray[Math.floor(array[i] / divisor) % 10]--;
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: sortedArray });
      }
      return sortedArray;
    };
    this.setState({ sticks: await radixSort(sticks) });
  };

  async BucketSort() {
    const sticks = this.state.sticks;
    const bucketSort = async (array: number[]) => {
      const buckets: number[][] = new Array(10).fill(0).map(() => []);
      const max = Math.max(...array);
      const min = Math.min(...array);
      const bucketSize = (max - min) / 10 + 1;
      for (let i = 0; i < array.length; i++) {
        if (this.state.is_resetting) return array; // 中断用
        buckets[Math.floor((array[i] - min) / bucketSize)].push(array[i]);
      }
      let j = 0;
      for (let i = 0; i < buckets.length; i++) {
        await insertionSort(buckets[i]);
        for (let k = 0; k < buckets[i].length; k++) {
          if (this.state.is_resetting) return array; // 中断用
          array[j] = buckets[i][k];
          j++;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return array;
    };
    const insertionSort = async (array: number[]) => {
      for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        const temp = array[i];
        while (j >= 0 && array[j] > temp) {
          array[j + 1] = array[j];
          j--;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
        array[j + 1] = temp;
      }
      return array;
    };
    this.setState({ sticks: await bucketSort(sticks) });
  };

  async ShellSort() {
    const sticks = this.state.sticks;
    const shellSort = async (array: number[]) => {
      let gap = Math.floor(array.length / 2);
      while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
          let j = i;
          const temp = array[i];
          while (j >= gap && array[j - gap] > temp) {
            if (this.state.is_resetting) return array; // 中断用
            array[j] = array[j - gap];
            j -= gap;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
          array[j] = temp;
        }
        gap = Math.floor(gap / 2);
      }
      return array;
    };
    this.setState({ sticks: await shellSort(sticks) });
  };

  async CombSort() {
    const sticks = this.state.sticks;
    const combSort = async (array: number[]) => {
      let gap = array.length;
      const shrink = 1.3;
      let swapped = true;
      while (gap > 1 || swapped) {
        if (gap > 1) {
          gap = Math.floor(gap / shrink);
        }
        let i = 0;
        swapped = false;
        while (i + gap < array.length) {
          if (this.state.is_resetting) return array; // 中断用
          if (array[i] > array[i + gap]) {
            [array[i], array[i + gap]] = [array[i + gap], array[i]];
            swapped = true;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
          i++;
        }
      }
      return array;
    };
    this.setState({ sticks: await combSort(sticks) });
  };

  async CycleSort() {
    const sticks = this.state.sticks;
    const cycleSort = async (array: number[]) => {
      for (let cycleStart = 0; cycleStart < array.length - 1; cycleStart++) {
        let item = array[cycleStart];
        let pos = cycleStart;
        for (let i = cycleStart + 1; i < array.length; i++) {
          if (array[i] < item) {
            pos++;
          }
        }
        if (pos === cycleStart) {
          continue;
        }
        while (item === array[pos]) {
          pos++;
        }
        [array[pos], item] = [item, array[pos]];
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: array });
        while (pos !== cycleStart) {
          pos = cycleStart;
          for (let i = cycleStart + 1; i < array.length; i++) {
            if (this.state.is_resetting) return array; // 中断用
            if (array[i] < item) {
              pos++;
            }
          }
          while (item === array[pos]) {
            pos++;
          }
          [array[pos], item] = [item, array[pos]];
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return array;
    };
    this.setState({ sticks: await cycleSort(sticks) });
  };

  async PancakeSort() {
    const sticks = this.state.sticks;
    const pancakeSort = async (array: number[]) => {
      for (let i = array.length - 1; i >= 1; i--) {
        let maxIndex = 0;
        for (let j = 0; j <= i; j++) {
          if (array[j] > array[maxIndex]) {
            maxIndex = j;
          }
        }
        if (maxIndex !== i) {
          await flip(array, maxIndex);
          await flip(array, i);
        }
      }
      return array;
    };
    const flip = async (array: number[], k: number) => {
      let i = 0;
      while (i < k) {
        if (this.state.is_resetting) return; // 中断用
        [array[i], array[k]] = [array[k], array[i]];
        i++;
        k--;
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: array });
      }
    };
    this.setState({ sticks: await pancakeSort(sticks) });
  };

  async GnomeSort() {
    const sticks = this.state.sticks;
    const gnomeSort = async (array: number[]) => {
      let i = 1;
      while (i < array.length) {
        if (this.state.is_resetting) return array; // 中断用
        if (i === 0 || array[i - 1] <= array[i]) {
          i++;
        } else {
          [array[i], array[i - 1]] = [array[i - 1], array[i]];
          i--;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return array;
    };
    this.setState({ sticks: await gnomeSort(sticks) });
  };

  async StoogeSort() {
    const sticks = this.state.sticks;
    const stoogeSort = async (array: number[], i = 0, j = array.length - 1) => {
      if (this.state.is_resetting) return array; // 中断用
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: array });
      }
      if (j - i + 1 > 2) {
        const t = Math.floor((j - i + 1) / 3);
        await stoogeSort(array, i, j - t);
        await stoogeSort(array, i + t, j);
        await stoogeSort(array, i, j - t);
      }
      return array;
    };
    this.setState({ sticks: await stoogeSort(sticks) });
  };

  async BitonicSort() {
    const sticks = this.state.sticks;
    const bitonicSort = async (array: number[], up = true) => {
      if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        await bitonicSort(array.slice(0, mid), true);
        await bitonicSort(array.slice(mid), false);
        await bitonicMerge(array, up);
      }
      return array;
    };
    const bitonicMerge = async (array: number[], up: boolean) => {
      if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        for (let i = 0; i < mid; i++) {
          if (this.state.is_resetting) return; // 中断用
          if (up === (array[i] > array[i + mid])) {
            [array[i], array[i + mid]] = [array[i + mid], array[i]];
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
        }
        await bitonicMerge(array.slice(0, mid), up);
        await bitonicMerge(array.slice(mid), up);
      }
      return array;
    };
    this.setState({ sticks: await bitonicSort(sticks) });
  };

  async PigeonholeSort() {
    const sticks = this.state.sticks;
    const pigeonholeSort = async (array: number[]) => {
      const min = Math.min(...array);
      const max = Math.max(...array);
      const size = max - min + 1;
      const holes = Array(size).fill(0);
      for (let i = 0; i < array.length; i++) {
        holes[array[i] - min]++;
      }
      let i = 0;
      for (let count = 0; count < size; count++) {
        while (holes[count]-- > 0) {
          if (this.state.is_resetting) return array; // 中断用
          array[i++] = count + min;
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          this.setState({ sticks: array });
        }
      }
      return array;
    };
    this.setState({ sticks: await pigeonholeSort(sticks) });
  };

  async OddEvenSort() {
    const sticks = this.state.sticks;
    const oddEvenSort = async (array: number[]) => {
      let sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 1; i < array.length - 1; i += 2) {
          if (this.state.is_resetting) return array; // 中断用
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            sorted = false;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
        }
        for (let i = 0; i < array.length - 1; i += 2) {
          if (this.state.is_resetting) return array; // 中断用
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            sorted = false;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
        }
      }
      return array;
    };
    this.setState({ sticks: await oddEvenSort(sticks) });
  };

  async CocktailSort() {
    const sticks = this.state.sticks;
    const cocktailSort = async (array: number[]) => {
      let swapped = true;
      let start = 0;
      let end = array.length;
      while (swapped) {
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
          if (this.state.is_resetting) return array; // 中断用
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            swapped = true;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
        }
        if (!swapped) {
          break;
        }
        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
          if (this.state.is_resetting) return array; // 中断用
          if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            swapped = true;
            await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
            this.setState({ sticks: array });
          }
        }
        start++;
      }
      return array;
    };
    this.setState({ sticks: await cocktailSort(sticks) });
  };

  async BogoSort() {
    const sticks = this.state.sticks;
    const bogoSort = async (array: number[]) => {
      while (!this.isSorted(array)) {
        if (this.state.is_resetting) return array; // 中断用
        this.Shuffle();
        await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
        this.setState({ sticks: array });
      }
      return array;
    };
    this.setState({ sticks: await bogoSort(sticks) });
  };

  async SleepSort() {
    const sticks = this.state.sticks;
    const sleepSort = async (array: number[]) => {
      const sorted: number[] = [];
      for (let i = 0; i < array.length; i++) {
        if (this.state.is_resetting) return array; // 中断用
        setTimeout(() => {
          sorted.push(array[i]);
          this.setState({ sticks: sorted });
        }, array[i] * 3);
      }
      return sorted;
    };
    this.setState({ sticks: await sleepSort(sticks) });
  };

  async StrandSort() {
    const sticks = this.state.sticks;
    const strandSort = async (array: number[]) => {
      const sorted: number[] = [];
      while (array.length > 0) {
        let min = array[0];
        let minIndex = 0;
        for (let i = 1; i < array.length; i++) {
          if (this.state.is_resetting) return sorted.concat(array); // 中断用
          await new Promise(resolve => setTimeout(resolve, this.state.interval_time));
          if (array[i] < min) {
            min = array[i];
            minIndex = i;
          }
        }
        sorted.push(min);
        array.splice(minIndex, 1);
        this.setState({ sticks: sorted });
      }
      return sorted;
    };
    this.setState({ sticks: await strandSort(sticks) });
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
              <Select id="selectbox" instanceId="selectbox" options={this.state.sorting_algorithm} placeholder="SELECT SORTING ALGORITHM" value={this.state.selected_sorting_algorithm} onChange={this.select_changed} isDisabled={this.state.is_locked} />
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
              <img onClick={() => {this.update_stick_count(-10)}} src={`${Settings.IMG_ROOT_PATH}/1down.png`} alt="1down" className={((stick_count_min <= this.state.stick_count - 10 && !this.state.is_locked) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <img onClick={() => {this.update_stick_count(-1)}} src={`${Settings.IMG_ROOT_PATH}/10down.png`} alt="10down" className={((stick_count_min <= this.state.stick_count - 1 && !this.state.is_locked) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <div className="StickCountChangerComponents displayer">{this.state.stick_count}回</div>
              <img onClick={() => {this.update_stick_count(+1)}} src={`${Settings.IMG_ROOT_PATH}/1up.png`} alt="1up" className={((this.state.stick_count + 1 <= stick_count_max && !this.state.is_locked) ? "" : "disabled") + " StickCountChangerComponents updater"} />
              <img onClick={() => {this.update_stick_count(+10)}} src={`${Settings.IMG_ROOT_PATH}/10up.png`} alt="10up" className={((this.state.stick_count + 10 <= stick_count_max && !this.state.is_locked) ? "" : "disabled") + " StickCountChangerComponents updater"} />
            </div>
            <div id="IntervalTimeUpdater">
              <div>処理間隔</div>
              <input type="range" min="1" max="30" step="1" value={this.state.interval_time} onInput={(e) => {this.setState({ interval_time:  (e.target as HTMLInputElement).value})}} disabled={this.state.is_locked} />
              <div>{this.state.interval_time} ms</div>
            </div>
          </div>
          <div id="DemoBody">
            <div id="DemoBodyButtons">
              <Button variant="outline-success" onClick={this.Shuffle} disabled={this.state.is_locked}>シャッフル♪</Button>
              <Button variant="outline-primary" onClick={() => {this.Sort()}} disabled={this.state.is_locked}>ソート開始♪</Button>
              {
                (this.state.is_locked) ? <Button variant="outline-danger" onClick={() => {this.Reset()}}>一時停止</Button> : ""
              }
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
