/* eslint-disable */
import { FunctionComponent } from 'react';

interface Props {
  name: 'wechat' | 'alipay' | 'baidu' | 'logout' | 'user';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
