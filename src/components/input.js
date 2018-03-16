import React from 'react'
import { Input } from 'native-base'

export default class extends React.Component {
  render() {
    const { style = {} } = this.props

    return (
      <Input
        {...this.props}
        style={style}
        placeholderTextColor="#a9a9a9"
        autoCorrect={false}
        autoCapitalize="none"
      />
    )
  }
}
