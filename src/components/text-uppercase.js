import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'native-base'

export default class extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { style = {} } = this.props
    return (
      <Text style={style}>{this.props.text.toUpperCase()}</Text>
    )
  }
}
