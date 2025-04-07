import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/Constants';

interface AppDividerProps {
  text: string;
}

const AppDividerText: React.FC<AppDividerProps> = ({text}) => {
  return (
    <View style={styles.mainContainer} >
      <View style={{ position: 'absolute', borderBottomWidth: 1, borderColor: COLORS.Grey, width: '100%'}} />
      <Text style={{ backgroundColor: COLORS.background, padding: 10 }}>{text}</Text>
    </View>
  )
}

export default AppDividerText

const styles = StyleSheet.create({
  mainContainer:{
    display: 'flex', 
    position:'relative',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'

  }
})