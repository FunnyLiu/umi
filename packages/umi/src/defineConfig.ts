import { IConfig } from '@umijs/types';
// @ts-ignore
import { IConfigFromPlugins } from '@@/core/pluginConfig';

// IConfig types is prior to IConfigFromPlugins in the same key.
// 一个简单的传入传出操作，用来对配置文件的类型进行约束
export function defineConfig(
  config: IConfigFromPlugins | IConfig,
): IConfigFromPlugins | IConfig {
  return config;
}
