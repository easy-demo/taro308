/* eslint-disable */

import React from 'react';
import IconWechat from './IconWechat';
import IconAlipay from './IconAlipay';
import IconBaidu from './IconBaidu';
import IconLogout from './IconLogout';
import IconUser from './IconUser';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'wechat':
      return <IconWechat {...rest} />;
    case 'alipay':
      return <IconAlipay {...rest} />;
    case 'baidu':
      return <IconBaidu {...rest} />;
    case 'logout':
      return <IconLogout {...rest} />;
    case 'user':
      return <IconUser {...rest} />;

  }

  return null;
};

export default IconFont;
