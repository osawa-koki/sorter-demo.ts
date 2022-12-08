/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/sorter-demo.ts";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV === "production";

export const assetPrefix = isProd ? SUB_DIRECTORY : "";
