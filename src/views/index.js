import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Index component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
