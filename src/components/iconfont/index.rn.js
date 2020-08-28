/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';
import Icon from './rn';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
