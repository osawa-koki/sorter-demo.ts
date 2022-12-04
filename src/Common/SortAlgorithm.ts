
type SortAlgorithmType = {
  value: number;
  label: string;
  label_ja: string;
  description: string;
  description_ja: string;
};

const sort_algorithms: SortAlgorithmType[] = [
  {
    value: 0,
    label: "Bubble Sort",
    label_ja: "バブルソート",
    description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
    description_ja: "バブルソートは、隣り合う要素を比較し、順序が逆であれば交換することを繰り返す単純なソートアルゴリズムです。",
  } as SortAlgorithmType,
  {
    value: 1,
    label: "Selection Sort",
    label_ja: "選択ソート",
    description: "Selection Sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.",
    description_ja: "選択ソートは、比較ソートの一種で、与えられたリストから最小の要素を探し、それをリストの先頭にある要素と交換することを繰り返すソートアルゴリズムです。",
  } as SortAlgorithmType,
  {
    value: 2,
    label: "Insertion Sort",
    label_ja: "挿入ソート",
    description: "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    description_ja: "挿入ソートは、整列済みの部分列と整列されていない部分列に分けて、整列されていない部分列の要素を整列済みの部分列に挿入することを繰り返すソートアルゴリズムです。",
  } as SortAlgorithmType,
  {
    value: 3,
    label: "Merge Sort",
    label_ja: "マージソート",
    description: "Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.",
    description_ja: "マージソートは、比較ソートの一種で、分割統治法を用いて実装されています。マージソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 4,
    label: "Quick Sort",
    label_ja: "クイックソート",
    description: "Quicksort is a divvaluee and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
    description_ja: "クイックソートは、分割統治法を用いて実装されているソートアルゴリズムです。クイックソートは、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 5,
    label: "Heap Sort",
    label_ja: "ヒープソート",
    description: "Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divvaluees its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region.",
    description_ja: "ヒープソートは、比較ソートの一種で、分割統治法を用いて実装されています。ヒープソートは、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 6,
    label: "Counting Sort",
    label_ja: "カウントソート",
    description: "Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.",
    description_ja: "カウントソートは、整数のみを対象とするソートアルゴリズムです。カウントソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 7,
    label: "Radix Sort",
    label_ja: "基数ソート",
    description: "Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the indivvalueual digits which share the same significant position and value.",
    description_ja: "基数ソートは、整数のみを対象とするソートアルゴリズムです。基数ソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 8,
    label: "Bucket Sort",
    label_ja: "バケットソート",
    description: "Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted indivvalueually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.",
    description_ja: "バケットソートは、整数のみを対象とするソートアルゴリズムです。バケットソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 9,
    label: "Shell Sort",
    label_ja: "シェルソート",
    description: "Shell sort, also known as Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.",
    description_ja: "シェルソートは、比較ソートの一種で、挿入ソートを改良したものです。シェルソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 10,
    label: "Comb Sort",
    label_ja: "コムソート",
    description: "Comb sort improves on bubble sort. The basic valueea is to eliminate turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort.",
    description_ja: "コムソートは、比較ソートの一種で、バブルソートを改良したものです。コムソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。",
  } as SortAlgorithmType,
  {
    value: 11,
    label: "Cycle Sort",
    label_ja: "サイクルソート",
    description: "Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array. It is based on the valueea that the permutation to be sorted can be factored into cycles, which can indivvalueually be rotated to give a sorted result.",
    description_ja: "サイクルソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 12,
    label: "Pancake Sort",
    label_ja: "パンケーキソート",
    description: "Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it.",
    description_ja: "パンケーキソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 13,
    label: "Gnome Sort",
    label_ja: "グノームソート",
    description: "Gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort. It is conceptually simple, requiring no nested loops.",
    description_ja: "グノームソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 14,
    label: "Stooge Sort",
    label_ja: "ストゥージソート",
    description: "Stooge sort is a recursive sorting algorithm originally described by Joshua J. Arulanandham, Robert Endre Tarjan, and Hari B. Sivakumar in 1992. It is a simple sorting algorithm that is not suitable for practical use, but can be used for educational purposes.",
    description_ja: "ストゥージソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 15,
    label: "Bitonic Sort",
    label_ja: "ビトニックソート",
    description: "Bitonic sort is a parallel sorting algorithm for sorting a sequence of n real numbers in ascending order. It is a comparison sort like merge sort or quick sort, but it is faster than both of them. It is also a stable sort.",
    description_ja: "ビトニックソートは、比較ソートの一種で、安定ソートです。",
  } as SortAlgorithmType,
  {
    value: 16,
    label: "Pigeonhole Sort",
    label_ja: "パイソンホールソート",
    description: "Pigeonhole sort is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the length of the range of possible key values (N) are approximately the same. It requires O(n + N) time.",
    description_ja: "パイソンホールソートは、比較ソートの一種で、安定ソートです。",
  } as SortAlgorithmType,
  {
    value: 17,
    label: "Odd-Even Sort",
    label_ja: "オッド・イブンソート",
    description: "Odd–even sort, also known as brick sort, is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections. It is a comparison sort related to bubble sort, with which it shares many characteristics.",
    description_ja: "オッド・イブンソートは、比較ソートの一種で、安定ソートです。",
  } as SortAlgorithmType,
  {
    value: 18,
    label: "Cocktail Sort",
    label_ja: "カクテルソート",
    description: "Cocktail shaker sort, also known as bvalueirectional bubble sort, cocktail sort, shaker sort (which can also refer to a variant of selection sort), ripple sort, shuffle sort, or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list.",
    description_ja: "カクテルソートは、比較ソートの一種で、安定ソートです。",
  } as SortAlgorithmType,
  {
    value: 19,
    label: "Bogo Sort",
    label_ja: "ボゴソート",
    description: "Bogosort, also known as permutation sort, stupvalue sort, slowsort, shotgun sort or monkey sort, is a particularly ineffective sorting algorithm based on the generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted.",
    description_ja: "ボゴソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 20,
    label: "Sleep Sort",
    label_ja: "スリープソート",
    description: "Sleep sort is a non-comparison sorting algorithm that is not suitable for sorting large numbers of items. It is a simple algorithm that creates a separate task for each item to be sorted, where each task sleeps for an interval corresponding to the item's sort key, then emits the item.",
    description_ja: "スリープソートは、比較ソートの一種で、安定ソートではありません。",
  } as SortAlgorithmType,
  {
    value: 21,
    label: "Strand Sort",
    label_ja: "ストランドソート",
    description: "Strand sort is a sorting algorithm that is similar to insertion sort. It is a stable sorting algorithm that is also adaptive, meaning that the algorithm takes advantage of already sorted elements in the list.",
    description_ja: "ストランドソートは、比較ソートの一種で、安定ソートです。",
  } as SortAlgorithmType,
];

export { sort_algorithms };  export type { SortAlgorithmType };
