import React from 'react'
import { connect } from 'react-redux'
import { View, Image } from 'react-native'
import { Container, Content } from 'native-base'
import { ImageConst } from '../../../configs'
import actions from './sauce'
import styles from './style'

import { FormCreateCustomer } from './form'

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Tạo khách hàng'
  }

  componentWillMount() {
    this.props.fetchData()
  }

  // Create new customer
  createNewCustomer = (data) => {
    this.props.createCustomer(data)
  }

  // Form cleared after create customer successfully
  formCleared = () => {
    this.props.resetState()
  }

  render() {
    const { isFetching, isCreateCustomerSuccessfully, data } = this.props

    return (
      <Container>
        <Content scrollEnabled={false} contentContainerStyle={{ flexGrow: 1 }}>
          <Image
            source={ImageConst.image.loginBackground}
            style={styles.backgroundImage}
          />
          <View style={styles.wrapper}>
            <FormCreateCustomer
              data={data}
              isFetching={isFetching}
              isCreateCustomerSuccessfully={isCreateCustomerSuccessfully}
              onSubmitCustomerData={this.createNewCustomer}
              onClearedForm={this.formCleared}
            />
            <View style={styles.formCenterIcon}>
              <Image
                source={ImageConst.logo.createCustomerHeader}
                style={styles.formCenterIconImage}
              />
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.register.isFetching,
    isCreateCustomerSuccessfully: state.register.isCreateCustomerSuccessfully,
    data: state.register.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(actions.data()),
    resetState: () => dispatch(actions.resetState()),
    createCustomer: data => dispatch(actions.createCustomer(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
