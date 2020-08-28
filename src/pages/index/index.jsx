import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.css'
import IconFont from '../../components/iconfont';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <IconFont name="alipay" size={100} />
      </View>
    )
  }
}
