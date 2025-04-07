import { StyleSheet, View } from 'react-native'
import React from 'react'
import BottomTabNav from '../popups/BottomTabNav'
import PopTab1 from '@/components/popups/PopTab1'
import { ToastPopUp } from '@/components'
const PopUpWrapper = () => {
  return (
    <View style={styles.container}>
      <BottomTabNav />
      <PopTab1 />
      <ToastPopUp />
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