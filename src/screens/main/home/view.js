import React from 'react'
import { connect } from 'react-redux'
import { ActionSheet, Container, Content, Button, Icon } from 'native-base'
import { MessageConst, AppConst } from '../../../configs'
import { TextUpperCase } from '../../../components'
import actions from '../../auth/login/sauce'
import styles from './style'

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'iMED'
  }

  // Receive new checkin barcode
  onGotBarCode = (barCode) => {
    console.log('got new barCode', barCode)
  }

  // Navigate to view
  navigate = (id, params) => {
    this.props.navigation.navigate(id, params)
  }

  // Logout
  logout = () => {
    ActionSheet.show({
      options: MessageConst.Home.Logout.Buttons,
      cancelButtonIndex: MessageConst.Home.Logout.CancelIndex,
      title: MessageConst.Home.Logout.Title
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        this.props.logout(this.props.navigation)
      }
    })
  }

  render() {
    return (
      <Container>
        <Content scrollEnabled={false}>
          <Button
            iconLeft
            style={[styles.button, { marginTop: 50 }]}
            onPress={() => this.navigate(AppConst.screens.register)}
          >
            <Icon name="account-multiple" style={styles.icon} />
            <TextUpperCase text="Tạo khách hàng" style={styles.text} />
          </Button>
          <Button
            iconLeft
            style={styles.button}
            onPress={() => this.navigate(AppConst.screens.register)}
          >
            <Icon name="briefcase-upload" style={styles.icon} />
            <TextUpperCase text="Nâng cấp khách hàng" style={styles.text} />
          </Button>
          <Button
            iconLeft
            style={styles.button}
            onPress={() => this.navigate(AppConst.screens.camera, { onGotBarCode: this.onGotBarCode })}
          >
            <Icon name="qrcode-scan" style={styles.icon} />
            <TextUpperCase text="Quét mã QR" style={styles.text} />
          </Button>
          <Button
            dark
            iconLeft
            style={[styles.button, { marginTop: 30 }]}
            onPress={() => this.logout()}
          >
            <Icon name="logout" style={styles.icon} />
            <TextUpperCase text="Đăng xuất" style={styles.text} />
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: navigation => dispatch(actions.logout(navigation))
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)
