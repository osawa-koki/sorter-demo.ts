# 奇偶転置ソート

奇偶転置ソートは、ソートのアルゴリズムの一つで、バブルソートを改良したもの。  
バブルソートではスキャンを一方向に順次行うのに対し、奇偶転置ソートでは組ごとに行う。  

バブルソートと同じく安定な内部ソートで、最悪の場合で時間計算量はO(n2)である。  

組の比較は互いに独立であるため、バブルソートとは異なり、並列動作が可能である。  
そのため、ハードウェアで隣り合う組の比較を同時に処理すれば、常に (n-1) ステップで処理が完了する。  
 ただし、ソートの対象が多いと必要とするリソースが大きくなり、実用的ではない。  

![奇偶転置ソート](./img/Odd-EvenSort.gif)  

## 計算量

```text
O(n2)
```

## 特徴

- 並列化による高速化が容易。
- アルゴリズムが複雑。
- パフォーマンスが不安定。

## 参考文献

- <https://ja.wikipedia.org/wiki/奇偶転置ソート>