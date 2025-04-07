import { Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/Fonts';
import { COLORS, FONT_WIDTH } from '@/constants/Constants';

interface AppTextProps {
  text: string;
  size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
  color: 'primary' | 'secondary' | 'background' | 'lightGrey' | 'Grey' | 'text' | 'white' | 'black' | 'transparent';
  weight?: 'medium' | 'large' | 'extraLarge';
  align?: 'left' | 'center' | 'right';
  marginTop?: number;
  marginBottom?: number;
  onPress?: () => void
}

const AppTextInner: React.FC<AppTextProps> = ({
  text, size,
  color, onPress,
  align, weight,
  marginTop = 0,
  marginBottom = 0
}) => {

  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Text style={{
        fontSize: FONT_SIZE[size],
        color: COLORS[color],
        fontWeight: '600',
        textAlign: align,
        fontFamily: 'Poppins-Regular'
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  ) : (

    <View style={[align ? { width: '100%' } : {}, { marginTop: marginTop, marginBottom: marginBottom }]}>
      <Text style={[{
        fontSize: FONT_SIZE[size],
        color: COLORS[color],
        textAlign: align,
        fontFamily: 'Poppins-Regular',
      }, weight && {
        fontWeight: FONT_WIDTH[weight]
      }
      ]}>
        {text}
      </Text>
    </View>
  )
}

export default React.memo(AppTextInner)

