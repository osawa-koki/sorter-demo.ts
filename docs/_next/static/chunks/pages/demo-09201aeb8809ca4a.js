(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{4184:function(t,e){var s; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var i={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var r=typeof s;if("string"===r||"number"===r)t.push(s);else if(Array.isArray(s)){if(s.length){var o=a.apply(null,s);o&&t.push(o)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){t.push(s.toString());continue}for(var n in s)i.call(s,n)&&s[n]&&t.push(n)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0!==(s=(function(){return a}).apply(e,[]))&&(t.exports=s)}()},5361:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return s(8876)}])},4509:function(t,e,s){"use strict";let i=s(2702),a={ROOT_PATH:"",IMG_ROOT_PATH:i.assetPrefix,PAGE_DEFAULT_TITLE:"Sorter Demo"};e.Z=a},4511:function(t,e,s){"use strict";s.d(e,{X:function(){return i}});let i=[{is_valid:!0,value:0,label:"Bubble Sort",label_ja:"バブルソート",description:"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",description_ja:"バブルソートは、隣り合う要素を比較し、順序が逆であれば交換することを繰り返す単純なソートアルゴリズムです。"},{is_valid:!0,value:1,label:"Selection Sort",label_ja:"選択ソート",description:"Selection Sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.",description_ja:"選択ソートは、比較ソートの一種で、与えられたリストから最小の要素を探し、それをリストの先頭にある要素と交換することを繰り返すソートアルゴリズムです。"},{is_valid:!0,value:2,label:"Insertion Sort",label_ja:"挿入ソート",description:"Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",description_ja:"挿入ソートは、整列済みの部分列と整列されていない部分列に分けて、整列されていない部分列の要素を整列済みの部分列に挿入することを繰り返すソートアルゴリズムです。"},{is_valid:!0,value:3,label:"Merge Sort",label_ja:"マージソート",description:"Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.",description_ja:"マージソートは、比較ソートの一種で、分割統治法を用いて実装されています。マージソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!0,value:4,label:"Quick Sort",label_ja:"クイックソート",description:"Quicksort is a divvaluee and conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",description_ja:"クイックソートは、分割統治法を用いて実装されているソートアルゴリズムです。クイックソートは、安定ソートではありません。"},{is_valid:!0,value:5,label:"Heap Sort",label_ja:"ヒープソート",description:"Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divvaluees its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region.",description_ja:"ヒープソートは、比較ソートの一種で、分割統治法を用いて実装されています。ヒープソートは、安定ソートではありません。"},{is_valid:!0,value:6,label:"Counting Sort",label_ja:"カウントソート",description:"Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.",description_ja:"カウントソートは、整数のみを対象とするソートアルゴリズムです。カウントソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!1,value:7,label:"Radix Sort",label_ja:"基数ソート",description:"Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the indivvalueual digits which share the same significant position and value.",description_ja:"基数ソートは、整数のみを対象とするソートアルゴリズムです。基数ソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!0,value:8,label:"Bucket Sort",label_ja:"バケットソート",description:"Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted indivvalueually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.",description_ja:"バケットソートは、整数のみを対象とするソートアルゴリズムです。バケットソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!0,value:9,label:"Shell Sort",label_ja:"シェルソート",description:"Shell sort, also known as Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.",description_ja:"シェルソートは、比較ソートの一種で、挿入ソートを改良したものです。シェルソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!0,value:10,label:"Comb Sort",label_ja:"コムソート",description:"Comb sort improves on bubble sort. The basic valueea is to eliminate turtles, or small values near the end of the list, since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning of the list, do not pose a problem in bubble sort.",description_ja:"コムソートは、比較ソートの一種で、バブルソートを改良したものです。コムソートは、安定ソートであり、同じ値の要素の順序がソート前後で保たれます。"},{is_valid:!0,value:11,label:"Cycle Sort",label_ja:"サイクルソート",description:"Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array. It is based on the valueea that the permutation to be sorted can be factored into cycles, which can indivvalueually be rotated to give a sorted result.",description_ja:"インプレースで不安定な ソートアルゴリズムであり、他のインプレースソートアルゴリズムとは異なり、元の配列への書き込みの総数に関して理論的に最適な比較ソートです。"},{is_valid:!0,value:12,label:"Pancake Sort",label_ja:"パンケーキソート",description:"Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it.",description_ja:"ある数列を大きさ順に並べる際に先頭から何番目かまでをひっくり返す最小の手数を求める問題から考え出された整列アルゴリズムです。"},{is_valid:!0,value:13,label:"Gnome Sort",label_ja:"ノームソート",description:"Gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort. It is conceptually simple, requiring no nested loops.",description_ja:"ノームソートはソートアルゴリズムの一種で、挿入ソートに似ているが、要素の移動は挿入ではなくバブルソートのような一連の交換で行うソート。"},{is_valid:!0,value:14,label:"Stooge Sort",label_ja:"ストゥージソート",description:"Stooge sort is a recursive sorting algorithm originally described by Joshua J. Arulanandham, Robert Endre Tarjan, and Hari B. Sivakumar in 1992. It is a simple sorting algorithm that is not suitable for practical use, but can be used for educational purposes.",description_ja:"再帰を用いたソートアルゴリズムのひとつです。"},{is_valid:!1,value:15,label:"Bitonic Sort",label_ja:"ビトニックソート",description:"Bitonic sort is a parallel sorting algorithm for sorting a sequence of n real numbers in ascending order. It is a comparison sort like merge sort or quick sort, but it is faster than both of them. It is also a stable sort.",description_ja:"主にソーティングネットワークの構築法として使用されるソートの並列アルゴリズムの１つ。"},{is_valid:!0,value:16,label:"Pigeonhole Sort",label_ja:"鳩の巣ソート",description:"Pigeonhole sort is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the length of the range of possible key values (N) are approximately the same. It requires O(n + N) time.",description_ja:"鳩の巣ソートはソートアルゴリズムの一種であり、要素数(n)とソートキーの値の個数(N)がほぼ同じ場合に適した手法である。"},{is_valid:!0,value:17,label:"Odd-Even Sort",label_ja:"奇偶転置ソート",description:"Odd–even sort, also known as brick sort, is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections. It is a comparison sort related to bubble sort, with which it shares many characteristics.",description_ja:"奇偶転置ソートは、ソートのアルゴリズムの一つで、バブルソートを改良したものです。"},{is_valid:!0,value:18,label:"Cocktail Sort",label_ja:"カクテルソート",description:"Cocktail shaker sort, also known as bvalueirectional bubble sort, cocktail sort, shaker sort (which can also refer to a variant of selection sort), ripple sort, shuffle sort, or shuttle sort, is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list.",description_ja:"カクテルソート(シェーカーソート)は、ソートのアルゴリズムの一つです。"},{is_valid:!1,value:19,label:"Bogo Sort",label_ja:"ボゴソート",description:"Bogosort, also known as permutation sort, stupvalue sort, slowsort, shotgun sort or monkey sort, is a particularly ineffective sorting algorithm based on the generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted.",description_ja:"整列するまでひたすらシャッフルを繰り返すというおふざけ整列アルゴリズムです。"},{is_valid:!0,value:20,label:"Sleep Sort",label_ja:"スリープソート",description:"Sleep sort is a non-comparison sorting algorithm that is not suitable for sorting large numbers of items. It is a simple algorithm that creates a separate task for each item to be sorted, where each task sleeps for an interval corresponding to the item's sort key, then emits the item.",description_ja:"対象の整数をsleepコマンドの引数として渡して、そのあと出力されるようにすれば、その出力が整列されているというおふざけアルゴリズムです。"},{is_valid:!0,value:21,label:"Strand Sort",label_ja:"ストランドソート",description:"Strand sort is a sorting algorithm that is similar to insertion sort. It is a stable sorting algorithm that is also adaptive, meaning that the algorithm takes advantage of already sorted elements in the list.",description_ja:"ストランドソートは、リストの項目を昇順に並べ替える再帰的な並べ替えアルゴリズムです。"}].filter(t=>t.is_valid)},1943:function(t,e,s){"use strict";var i=s(5893);s(7294);var a=s(9008),r=s.n(a),o=s(4509);let n=t=>{let{children:e,title:s}=t;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:s}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("link",{rel:"icon",href:"".concat(o.Z.IMG_ROOT_PATH,"/favicon.ico"),sizes:"any"})]}),(0,i.jsx)("header",{children:(0,i.jsx)("nav",{})}),e,(0,i.jsx)("footer",{})]})};e.Z=n},4320:function(t,e,s){"use strict";var i=s(5893);s(7294);var a=s(1664),r=s.n(a);e.Z=function(){return(0,i.jsx)("div",{id:"Header",children:(0,i.jsxs)("header",{id:"Header-header",children:[(0,i.jsx)(r(),{href:"/",children:"Home"}),(0,i.jsx)(r(),{href:"/description",children:"Description"}),(0,i.jsx)(r(),{href:"/demo",children:"Demo"})]})})}},2702:function(t){"use strict";let e="/sorter-demo.ts";t.exports={basePath:e,assetPrefix:e,publicRuntimeConfig:{basePath:e}}},8876:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return S}});var i=s(5893),a=s(7294),r=s(7038),o=s(4184),n=s.n(o);let l=["as","disabled"];function c({tagName:t,disabled:e,href:s,target:i,rel:a,role:r,onClick:o,tabIndex:n=0,type:l}){t||(t=null!=s||null!=i||null!=a?"a":"button");let c={tagName:t};if("button"===t)return[{type:l||"button",disabled:e},c];let h=i=>{var a;if(!e&&("a"!==t||(a=s)&&"#"!==a.trim())||i.preventDefault(),e){i.stopPropagation();return}null==o||o(i)},d=t=>{" "===t.key&&(t.preventDefault(),h(t))};return"a"===t&&(s||(s="#"),e&&(s=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:e?void 0:n,href:s,target:"a"===t?i:void 0,"aria-disabled":e||void 0,rel:"a"===t?a:void 0,onClick:h,onKeyDown:d},c]}let h=a.forwardRef((t,e)=>{let{as:s,disabled:a}=t,r=function(t,e){if(null==t)return{};var s,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)s=r[i],e.indexOf(s)>=0||(a[s]=t[s]);return a}(t,l),[o,{tagName:n}]=c(Object.assign({tagName:s,disabled:a},r));return(0,i.jsx)(n,Object.assign({},r,o,{ref:e}))});h.displayName="Button";let d=a.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:u,Provider:g}=d,m=a.forwardRef(({as:t,bsPrefix:e,variant:s,size:r,active:o,className:l,...h},u)=>{let g=function(t,e){let{prefixes:s}=(0,a.useContext)(d);return t||s[e]||e}(e,"btn"),[m,{tagName:p}]=c({tagName:t,...h});return(0,i.jsx)(p,{...m,...h,ref:u,className:n()(l,g,o&&"active",s&&`${g}-${s}`,r&&`${g}-${r}`,h.href&&h.disabled&&"disabled")})});m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var p=s(4320),f=s(1943),_=s(4511),b=s(4509);class k extends a.Component{isSorted(t){for(let e=1;e<t.length;e++)if(t[e-1]>t[e])return!1;return!0}async Reset(){this.setState({is_resetting:!0}),await new Promise(t=>setTimeout(t,10*this.state.interval_time)),this.setState({is_resetting:!1})}async Sort(){if(this.state.is_locked){console.log("locked...");return}this.setState({is_locked:!0});let t=this.state.selected_sorting_algorithm;switch(t.label){case"Bubble Sort":await this.BubbleSort();break;case"Selection Sort":await this.SelectionSort();break;case"Insertion Sort":await this.InsertionSort();break;case"Merge Sort":await this.MergeSort();break;case"Quick Sort":await this.QuickSort();break;case"Heap Sort":await this.HeapSort();break;case"Counting Sort":await this.CountingSort();break;case"Radix Sort":await this.RadixSort();break;case"Bucket Sort":await this.BucketSort();break;case"Shell Sort":await this.ShellSort();break;case"Comb Sort":await this.CombSort();break;case"Cycle Sort":await this.CycleSort();break;case"Pancake Sort":await this.PancakeSort();break;case"Gnome Sort":await this.GnomeSort();break;case"Stooge Sort":await this.StoogeSort();break;case"Bitonic Sort":await this.BitonicSort();break;case"Pigeonhole Sort":await this.PigeonholeSort();break;case"Odd-Even Sort":await this.OddEvenSort();break;case"Cocktail Sort":await this.CocktailSort();break;case"Bogo Sort":await this.BogoSort();break;case"Sleep Sort":await this.SleepSort();break;case"Strand Sort":await this.StrandSort()}this.setState({is_locked:!1})}async BubbleSort(){let t=this.state.sticks;for(let e=0;e<t.length-1;e++)for(let s=t.length-1;e<s;s--){if(this.state.is_resetting)return;t[s]<t[s-1]&&([t[s],t[s-1]]=[t[s-1],t[s]],await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}}async InsertionSort(){let t=this.state.sticks;for(let e=1;e<t.length;e++){let s=t[e],i=e-1;for(;i>=0&&t[i]>s;){if(this.state.is_resetting)return;t[i+1]=t[i],i--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}t[i+1]=s}}async SelectionSort(){let t=this.state.sticks;for(let e=0;e<t.length-1;e++){if(this.state.is_resetting)return;let s=e;for(let i=e+1;i<t.length;i++)await new Promise(t=>setTimeout(t,this.state.interval_time)),t[i]<t[s]&&(s=i);s!==e&&([t[e],t[s]]=[t[s],t[e]],this.setState({sticks:t}))}}async MergeSort(){let t=this.state.sticks,e=async(t,e)=>{let s=0,i=0,a=[];for(;s<t.length&&i<e.length&&!this.state.is_resetting;)t[s]<e[i]?(a.push(t[s]),s++):(a.push(e[i]),i++),await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:a});return a.concat(t.slice(s)).concat(e.slice(i))},s=async t=>{if(t.length<=1)return t;let i=Math.floor(t.length/2),a=t.slice(0,i),r=t.slice(i);return e(await s(a),await s(r))};this.setState({sticks:await s(t)})}async QuickSort(){let t=this.state.sticks,e=async(t,i,a)=>{let r;return this.state.is_resetting||t.length>1&&(r=await s(t,i,a),i<r-1&&await e(t,i,r-1),r<a&&await e(t,r,a)),t},s=async(t,e,s)=>{let i=t[Math.floor((s+e)/2)],a=e,r=s;for(;a<=r;){for(;t[a]<i;)a++;for(;t[r]>i;)r--;a<=r&&([t[a],t[r]]=[t[r],t[a]],a++,r--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}return a};this.setState({sticks:await e(t,0,t.length-1)})}async HeapSort(){let t=this.state.sticks,e=async t=>{let e=t.length;for(s(t);e>1&&!this.state.is_resetting;)e--,[t[0],t[e]]=[t[e],t[0]],await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}),i(t,e,0);return t},s=t=>{let e=t.length,s=Math.floor(e/2);for(let a=s;a>=0;a--)i(t,e,a)},i=(t,e,s)=>{let a=2*s+1,r=2*s+2,o=s;a<e&&t[a]>t[o]&&(o=a),r<e&&t[r]>t[o]&&(o=r),o!==s&&([t[s],t[o]]=[t[o],t[s]],i(t,e,o))};this.setState({sticks:await e(t)})}async CountingSort(){let t=this.state.sticks,e=async t=>{let e=Math.max(...t),s=Math.min(...t),i=Array(e-s+1).fill(0);for(let a=0;a<t.length;a++)i[t[a]-s]++;let r=0;for(let o=s;o<=e;o++)for(;i[o-s]>0;){if(this.state.is_resetting)return t;t[r]=o,i[o-s]--,r++,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}return t};this.setState({sticks:await e(t)})}async RadixSort(){let t=this.state.sticks,e=async t=>{let e=Math.max(...t),i=1;for(;e/i>=1&&!this.state.is_resetting;)await s(t,i),i*=10;return t},s=async(t,e)=>{let s=Array(10).fill(0);for(let i=0;i<t.length;i++)s[Math.floor(t[i]/e)%10]++;for(let a=1;a<s.length;a++)s[a]+=s[a-1];let r=Array(t.length);for(let o=t.length-1;o>=0&&!this.state.is_resetting;o--)r[s[Math.floor(t[o]/e)%10]-1]=t[o],s[Math.floor(t[o]/e)%10]--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:r});return r};this.setState({sticks:await e(t)})}async BucketSort(){let t=this.state.sticks,e=async t=>{let e=Array(10).fill(0).map(()=>[]),i=Math.max(...t),a=Math.min(...t),r=(i-a)/10+1;for(let o=0;o<t.length;o++){if(this.state.is_resetting)return t;e[Math.floor((t[o]-a)/r)].push(t[o])}let n=0;for(let l=0;l<e.length;l++){await s(e[l]);for(let c=0;c<e[l].length;c++){if(this.state.is_resetting)return t;t[n]=e[l][c],n++,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}}return t},s=async t=>{for(let e=1;e<t.length;e++){let s=e-1,i=t[e];for(;s>=0&&t[s]>i;){if(this.state.is_resetting)return t;t[s+1]=t[s],s--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}t[s+1]=i}return t};this.setState({sticks:await e(t)})}async ShellSort(){let t=this.state.sticks,e=async t=>{let e=Math.floor(t.length/2);for(;e>0;){for(let s=e;s<t.length;s++){let i=s,a=t[s];for(;i>=e&&t[i-e]>a;){if(this.state.is_resetting)return t;t[i]=t[i-e],i-=e,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}t[i]=a}e=Math.floor(e/2)}return t};this.setState({sticks:await e(t)})}async CombSort(){let t=this.state.sticks,e=async t=>{let e=t.length,s=!0;for(;e>1||s;){e>1&&(e=Math.floor(e/1.3));let i=0;for(s=!1;i+e<t.length;){if(this.state.is_resetting)return t;t[i]>t[i+e]&&([t[i],t[i+e]]=[t[i+e],t[i]],s=!0,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})),i++}}return t};this.setState({sticks:await e(t)})}async CycleSort(){let t=this.state.sticks,e=async t=>{for(let e=0;e<t.length-1;e++){let s=t[e],i=e;for(let a=e+1;a<t.length;a++)t[a]<s&&i++;if(i!==e){for(;s===t[i];)i++;for([t[i],s]=[s,t[i]],await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t});i!==e;){i=e;for(let r=e+1;r<t.length;r++){if(this.state.is_resetting)return t;t[r]<s&&i++}for(;s===t[i];)i++;[t[i],s]=[s,t[i]],await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}}}return t};this.setState({sticks:await e(t)})}async PancakeSort(){let t=this.state.sticks,e=async t=>{for(let e=t.length-1;e>=1;e--){let i=0;for(let a=0;a<=e;a++)t[a]>t[i]&&(i=a);i!==e&&(await s(t,i),await s(t,e))}return t},s=async(t,e)=>{let s=0;for(;s<e;){if(this.state.is_resetting)return;[t[s],t[e]]=[t[e],t[s]],s++,e--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}};this.setState({sticks:await e(t)})}async GnomeSort(){let t=this.state.sticks,e=async t=>{let e=1;for(;e<t.length&&!this.state.is_resetting;)0===e||t[e-1]<=t[e]?e++:([t[e],t[e-1]]=[t[e-1],t[e]],e--,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}));return t};this.setState({sticks:await e(t)})}async StoogeSort(){var t=this;let e=this.state.sticks,s=async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-1;if(t.state.is_resetting)return e;if(e[i]>e[a]&&([e[i],e[a]]=[e[a],e[i]],await new Promise(e=>setTimeout(e,t.state.interval_time)),t.setState({sticks:e})),a-i+1>2){let r=Math.floor((a-i+1)/3);await s(e,i,a-r),await s(e,i+r,a),await s(e,i,a-r)}return e};this.setState({sticks:await s(e)})}async BitonicSort(){let t=this.state.sticks,e=async function(t){let i=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(t.length>1){let a=Math.floor(t.length/2);await e(t.slice(0,a),!0),await e(t.slice(a),!1),await s(t,i)}return t},s=async(t,e)=>{if(t.length>1){let i=Math.floor(t.length/2);for(let a=0;a<i;a++){if(this.state.is_resetting)return;e===t[a]>t[a+i]&&([t[a],t[a+i]]=[t[a+i],t[a]],await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}await s(t.slice(0,i),e),await s(t.slice(i),e)}return t};this.setState({sticks:await e(t)})}async PigeonholeSort(){let t=this.state.sticks,e=async t=>{let e=Math.min(...t),s=Math.max(...t),i=s-e+1,a=Array(i).fill(0);for(let r=0;r<t.length;r++)a[t[r]-e]++;let o=0;for(let n=0;n<i;n++)for(;a[n]-- >0;){if(this.state.is_resetting)return t;t[o++]=n+e,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t})}return t};this.setState({sticks:await e(t)})}async OddEvenSort(){let t=this.state.sticks,e=async t=>{let e=!1;for(;!e;){e=!0;for(let s=1;s<t.length-1;s+=2){if(this.state.is_resetting)return t;t[s]>t[s+1]&&([t[s],t[s+1]]=[t[s+1],t[s]],e=!1,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}for(let i=0;i<t.length-1;i+=2){if(this.state.is_resetting)return t;t[i]>t[i+1]&&([t[i],t[i+1]]=[t[i+1],t[i]],e=!1,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}}return t};this.setState({sticks:await e(t)})}async CocktailSort(){let t=this.state.sticks,e=async t=>{let e=!0,s=0,i=t.length;for(;e;){e=!1;for(let a=s;a<i-1;++a){if(this.state.is_resetting)return t;t[a]>t[a+1]&&([t[a],t[a+1]]=[t[a+1],t[a]],e=!0,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}if(!e)break;e=!1,i--;for(let r=i-1;r>=s;r--){if(this.state.is_resetting)return t;t[r]>t[r+1]&&([t[r],t[r+1]]=[t[r+1],t[r]],e=!0,await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t}))}s++}return t};this.setState({sticks:await e(t)})}async BogoSort(){let t=this.state.sticks,e=async t=>{for(;!this.isSorted(t)&&!this.state.is_resetting;)this.Shuffle(),await new Promise(t=>setTimeout(t,this.state.interval_time)),this.setState({sticks:t});return t};this.setState({sticks:await e(t)})}async SleepSort(){let t=this.state.sticks,e=async t=>{let e=[];for(let s=0;s<t.length;s++){if(this.state.is_resetting)return t;setTimeout(()=>{e.push(t[s]),this.setState({sticks:e})},3*t[s])}return e};this.setState({sticks:await e(t)})}async StrandSort(){let t=this.state.sticks,e=async t=>{let e=[];for(;t.length>0;){let s=t[0],i=0;for(let a=1;a<t.length;a++){if(this.state.is_resetting)return e.concat(t);await new Promise(t=>setTimeout(t,this.state.interval_time)),t[a]<s&&(s=t[a],i=a)}e.push(s),t.splice(i,1),this.setState({sticks:e})}return e};this.setState({sticks:await e(t)})}componentDidMount(){this.update_stick_count(0);let t=location.search.replace(/^\?/,"");if(""!==t){let e=this.state.sorting_algorithm.find(e=>e.label.replace(/ /g,"")===t);e&&this.select_changed(e)}this.update_page_title(this.state.selected_sorting_algorithm.label)}render(){return(0,i.jsxs)(f.Z,{title:this.state.page_title,children:[(0,i.jsx)(p.Z,{}),(0,i.jsxs)("div",{id:"Demo",children:[(0,i.jsxs)("div",{id:"DemoHeader",children:[(0,i.jsx)("div",{id:"DemoAlgorithmSelectBox",children:(0,i.jsx)(r.ZP,{id:"selectbox",instanceId:"selectbox",options:this.state.sorting_algorithm,placeholder:"SELECT SORTING ALGORITHM",value:this.state.selected_sorting_algorithm,onChange:this.select_changed,isDisabled:this.state.is_locked})}),(0,i.jsx)("div",{id:"DemoAlgorithmInfoBox",children:(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"名称 (en)"}),(0,i.jsx)("td",{children:this.state.selected_sorting_algorithm.label})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"名称 (ja)"}),(0,i.jsx)("td",{children:this.state.selected_sorting_algorithm.label_ja})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"説明 (en)"}),(0,i.jsx)("td",{children:this.state.selected_sorting_algorithm.description})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"説明 (ja)"}),(0,i.jsx)("td",{children:this.state.selected_sorting_algorithm.description_ja})]})]})})}),(0,i.jsxs)("div",{id:"StickCountChanger",children:[(0,i.jsx)("img",{onClick:()=>{this.update_stick_count(-10)},src:"".concat(b.Z.IMG_ROOT_PATH,"/1down.png"),alt:"1down",className:(30<=this.state.stick_count-10&&!this.state.is_locked?"":"disabled")+" StickCountChangerComponents updater"}),(0,i.jsx)("img",{onClick:()=>{this.update_stick_count(-1)},src:"".concat(b.Z.IMG_ROOT_PATH,"/10down.png"),alt:"10down",className:(30<=this.state.stick_count-1&&!this.state.is_locked?"":"disabled")+" StickCountChangerComponents updater"}),(0,i.jsxs)("div",{className:"StickCountChangerComponents displayer",children:[this.state.stick_count,"回"]}),(0,i.jsx)("img",{onClick:()=>{this.update_stick_count(1)},src:"".concat(b.Z.IMG_ROOT_PATH,"/1up.png"),alt:"1up",className:(this.state.stick_count+1<=500&&!this.state.is_locked?"":"disabled")+" StickCountChangerComponents updater"}),(0,i.jsx)("img",{onClick:()=>{this.update_stick_count(10)},src:"".concat(b.Z.IMG_ROOT_PATH,"/10up.png"),alt:"10up",className:(this.state.stick_count+10<=500&&!this.state.is_locked?"":"disabled")+" StickCountChangerComponents updater"})]}),(0,i.jsxs)("div",{id:"IntervalTimeUpdater",children:[(0,i.jsx)("div",{children:"処理間隔"}),(0,i.jsx)("input",{type:"range",min:"1",max:"30",step:"1",value:this.state.interval_time,onInput:t=>{this.setState({interval_time:t.target.value})},disabled:this.state.is_locked}),(0,i.jsxs)("div",{children:[this.state.interval_time," ms"]})]})]}),(0,i.jsxs)("div",{id:"DemoBody",children:[(0,i.jsxs)("div",{id:"DemoBodyButtons",children:[(0,i.jsx)(m,{variant:"outline-success",onClick:this.Shuffle,disabled:this.state.is_locked,children:"シャッフル♪"}),(0,i.jsx)(m,{variant:"outline-primary",onClick:()=>{this.Sort()},disabled:this.state.is_locked,children:"ソート開始♪"}),this.state.is_locked?(0,i.jsx)(m,{variant:"outline-danger",onClick:()=>{this.Reset()},children:"一時停止"}):""]}),(0,i.jsx)("div",{id:"DemoCanvas",children:this.state.sticks.map((t,e)=>(0,i.jsx)("div",{className:"Stick",style:{height:"calc(100% / ".concat(this.state.stick_count," * ").concat(t,")"),backgroundColor:"hsl(".concat((360*t/this.state.stick_count).toString(),"deg, 100%, 50%)"),width:"calc(100% / ".concat(this.state.stick_count,")")}},e))})]})]})]})}constructor(...t){super(...t),this.state={sorting_algorithm:_.X,selected_sorting_algorithm:_.X[0],stick_count:100,sticks:[],is_locked:!1,interval_time:3,is_resetting:!1,page_title:b.Z.PAGE_DEFAULT_TITLE},this.select_changed=t=>{this.setState({selected_sorting_algorithm:t}),history.pushState("","","".concat(location.href.replace(/\?.*/,""),"?").concat(t.label.replace(/ /g,""))),this.update_page_title(t.label)},this.update_page_title=t=>{this.setState({page_title:"".concat(t," - ").concat(b.Z.PAGE_DEFAULT_TITLE,"(demo)")})},this.update_stick_count=t=>{let e=this.state.stick_count+t,s=[];for(let i=1;i<=e;i++)s.push(i);this.setState({sticks:s,stick_count:e})},this.Shuffle=()=>{let t=this.state.sticks;for(let e=t.length-1;0<e;e--){let s=Math.floor(Math.random()*(e+1));[t[e],t[s]]=[t[s],t[e]]}this.setState({sticks:t})}}}var S=k}},function(t){t.O(0,[996,38,774,888,179],function(){return t(t.s=5361)}),_N_E=t.O()}]);