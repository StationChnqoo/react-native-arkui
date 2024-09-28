import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import {useDip} from '../../constants';

interface MyProps {
  fontStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  onPress?:() => void;
  disabled?: boolean;
  title: string;
  loading?: boolean;
  indicatorColor?: string
}

const Button = (props: MyProps) => {
  const {
    title,
    fontStyle,
    style,
    onPress,
    loading,
    disabled,
    indicatorColor
  } = props;
  return <View>
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      onPress={onPress}
      disabled={loading || disabled}
      >
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {loading && <View style={{marginRight: 12}}>
          <ActivityIndicator size={useDip(16)} color={indicatorColor}/>
        </View>}
        <Text style={[styles.text, fontStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: useDip(36),
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: useDip(18),
    flexShrink: 1,
    minWidth: 0
  },
  text: {
    fontSize: useDip(16),
    color: '#333'
  }
})

export default Button;