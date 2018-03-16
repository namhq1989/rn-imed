import React from 'react'
import { FlatList, View } from 'react-native'
import { Container, Content, Text } from 'native-base'
// import styles from './style'

const data = []
for (let i = 0; i < 100; i += 1) {
  data.push({
    _id: i,
    name: `Row ${i + 1}`
  })
}

class HistoriesScreen extends React.PureComponent {
  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1 }}>
                  <Text>{item.name}</Text>
                </View>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}

export default HistoriesScreen
