import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './user.scss'

export default class User extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='mine'>
        <Text>Mine Page</Text>
      </View>
    )
  }
}
