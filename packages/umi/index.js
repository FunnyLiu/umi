let ex = require('./lib/cjs');
// 合并多个库的导出，一起导出
try {
  // @@代表./src/.umi/
  const umiExports = require('@@/core/umiExports');
  ex = Object.assign(ex, umiExports);
} catch (e) {}
module.exports = ex;
