/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/sorter-demo.ts";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // assetPrefix: isProd ? SUB_DIRECTORY : "",
  assetPrefix: SUB_DIRECTORY,
};

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  // write your next.js configuration values.
});
