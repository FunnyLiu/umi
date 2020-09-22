import { createDebug, lodash, winPath } from '../';

const debug = createDebug('umi:utils:BabelRegister');

export default class BabelRegister {
  // 构建一个value为string[]，key为string类型的对象
  only: Record<string, string[]> = {};

  constructor() {}

  setOnlyMap({ key, value }: { key: string; value: string[] }) {
    debug(`set ${key} of only map:`);
    debug(value);
    //initialPlugins
    this.only[key] = value;
    this.register();
  }

  register() {
    const only = lodash.uniq(
      Object.keys(this.only)
        .reduce<string[]>((memo, key) => {
          return memo.concat(this.only[key]);
        }, [])
        .map(winPath),
    );
    // 基于@babel/register来完成
    // 对指定文件进行一定的预设处理
    require('@babel/register')({
      presets: [require.resolve('@umijs/babel-preset-umi/node')],
      ignore: [/node_modules/],
      only,
      extensions: ['.jsx', '.js', '.ts', '.tsx'],
      babelrc: false,
      cache: false,
    });
  }
}
