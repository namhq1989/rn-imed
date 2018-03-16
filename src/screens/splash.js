import React from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Spinner } from 'native-base'
import { AppConst } from '../configs'

export default class extends React.Component {
  constructor() {
    super()

    this.checkToken()
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkToken = async () => {
    const token = await AsyncStorage.getItem(AppConst.storage.authKey)

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    setTimeout(async () => {
      this.props.navigation.navigate(token ? AppConst.screens.main : AppConst.screens.auth)
    }, 500)
  }

  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }
}
