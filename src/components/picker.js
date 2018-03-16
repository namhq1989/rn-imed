import React from 'react'
import PropTypes from 'prop-types'
import { Picker, Item } from 'native-base'
import { CssConst } from '../configs'
import { platform } from '../utils'

const getPickerWidth = () => {
  if (platform.iOS()) {
    return undefined
  }

  if (platform.isSmallDevice() || platform.isMediumDevice()) {
    return '90%'
  } else {
    return '95%'
  }
}

export default class extends React.Component {
  static propTypes = {
    selectedValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  render() {
    const { style = {}, options, onSelect, placeholder, iosHeader, selectedValue } = this.props

    return (
      <Picker
        mode="dropdown"
        placeholder={placeholder || 'Select value'}
        iosHeader={iosHeader || 'Select value'}
        style={{ ...style, height: 40, width: getPickerWidth() }}
        textStyle={{ fontSize: 15, paddingLeft: 5, color: selectedValue ? '#000' : '#a9a9a9', fontFamily: CssConst.attribute.fontBold }}
        headerStyle={{ width: '100%', backgroundColor: CssConst.color.primary }}
        headerTitleStyle={{ color: '#fff' }}
        headerBackButtonTextStyle={{ color: '#fff' }}
        selectedValue={selectedValue}
        onValueChange={event => onSelect(event)}
      >
        {
          options.map((item) => {
            if (!item._id) {
              return <Item label={item.name} value={item._id} key={item._id} enabled color="#9c9c9c" />
            } else {
              return <Item label={item.name} value={item._id} key={item._id} />
            }
          })
        }
      </Picker>
    )
  }
}
