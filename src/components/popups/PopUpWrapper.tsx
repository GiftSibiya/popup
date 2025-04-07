import React from 'react';
import { View } from 'react-native';
import PopTab1 from './PopTab1';
import ToastPopUp from './ToastPopUp';

const PopUpWrapper = () => {
  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'box-none' }}>
      <PopTab1 />
      <ToastPopUp />
    </View>
  );
};

export default PopUpWrapper; 