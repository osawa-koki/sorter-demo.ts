# sorter-demo.ts

整列アルゴリズムのデモンストレーションサイト。  

![BubbleSort](./.development/img/BubbleSort.gif)  

## 実行方法

```shell
# デバグ実行
yarn dev

# デプロイ用ビルド
yarn build
```

## ディレクトリ構成

```dir
- .development (開発者用情報)
- .next (Nextが使用するファイル群)
- Common (各プログラムで共有して使用するモジュール)
- components (部品系)
- node_modules (ノードモジュール)
- docs (ビルド後ファイル群出力先 | デプロイ対象)
- pages (ページ)
- public (公開ページ)
```

## 開発環境

| module | version |
| ---- | ---- |
| Windows | 11 Home |
| Node | v19.3.0 |

## 自分用メモ

### Image/NextはSSGサポートしていない

Image/NextはNodeモジュールを使用したサーバ機能であるため、SSGには使用できない。  
一応、[next-export-optimize-images](https://github.com/dc7290/next-export-optimize-images)を使用して無理やり使用することもできるが、諸設定がかなり複雑になるため、ここでは使用しない。  

## その他イロイロ

- [youtube](https://www.youtube.com/watch?v=oY1JGijg9jc)

## 参考文献

- [React(TypeScript)の導入](https://create-react-app.dev/docs/adding-typescript/)
- [(Next)クラメソ](https://dev.classmethod.jp/articles/introduction-to-nextjs/)
