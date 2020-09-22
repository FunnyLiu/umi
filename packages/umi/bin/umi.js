#!/usr/bin/env node

const resolveCwd = require('resolve-cwd');

const { name, bin } = require('../package.json');
// 使用自己依赖的相同名称模块
// 有时候A依赖B的1版本，全局又安装了B的2版本，那么在A里面执行全局命令B，则需要取A包内部的B1版本
const localCLI = resolveCwd.silent(`${name}/${bin['umi']}`);
if (!process.env.USE_GLOBAL_UMI && localCLI && localCLI !== __filename) {
  const debug = require('@umijs/utils').createDebug('umi:cli');
  debug('Using local install of umi');
  require(localCLI);
} else {
  require('../lib/cli');
}
