import { StyleSheet, View } from 'react-native'
import React from 'react'
import BottomTabNav from '../popups/BottomTabNav'

const PopUpWrapper = () => {
  return (
    <View style={styles.container}>
      <BottomTabNav />
    </View>
  )
}

export default PopUpWrapper

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
})