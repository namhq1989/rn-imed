import React from 'react'
import { Camera } from 'expo'
import { View } from 'react-native'
import { Button, Icon } from 'native-base'
import { platform } from '../../../utils'
import styles from './style'

class SystemCamera extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor() {
    super()

    this.state = {
      isScanned: false,
      ratio: platform.isLargeDevice() ? '16:9' : '4:3'
    }
  }

  onGotBarCode = (data) => {
    if (!this.state.isScanned) {
      this.setState({
        isScanned: true
      })

      this.props.navigation.state.params.onGotBarCode(data)
      this.props.navigation.goBack()
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.flex1}>
        <Camera
          style={styles.flex1}
          ref={(ref) => { this.camera = ref }}
          type={Camera.Constants.Type.back}
          ratio={this.state.ratio}
          onBarCodeRead={({ data }) => this.onGotBarCode(data)}
        >
          <View style={styles.view}>
            <Button
              transparent
              light
              style={styles.button}
              onPress={() => { this.props.navigation.goBack() }}
            >
              <Icon name="close-circle" style={styles.icon} />
            </Button>
          </View>
        </Camera>
      </View>
    )
  }
}

export default SystemCamera
