import React from 'react';
import {
  Image,
  ImageRequireSource,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import {useDip} from '../../constants';

interface NavigationMenuItem {
  action: (item: NavigationMenuItem) => void;
  icon: ImageRequireSource | ImageURISource;
  isEnabled: boolean;
}

interface MyProps {
  title: string;
  hideBackButton?: boolean;
  menus?: NavigationMenuItem[]
  backButtonIcon?: ImageRequireSource | ImageURISource;
  onBackPressed?: () => void;
  style?: StyleProp<ViewStyle>
}

const Navigation = (props: MyProps) => {
  const {
    title,
    style,
    menus = [],
    backButtonIcon,
    onBackPressed,
    hideBackButton,
  } = props;
  return <View style={[styles.view, style]}>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        {!hideBackButton &&  
          <TouchableOpacity
            onPress={onBackPressed}
            activeOpacity={0.8}
            hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}
            >
            <Image 
              source={backButtonIcon ?? require('./assets/back.png')}
              style={{height: useDip(24), width: useDip(24)}}
              />
          </TouchableOpacity>
        }
        <Text
          style={{
            fontSize: useDip(18),
            color: '#333',
            fontWeight: '500',
            marginLeft: hideBackButton ? 0 : useDip(12)
          }}>
          {title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {menus.map((it, i) => <TouchableOpacity
          disabled={!it.isEnabled}
          onPress={() => {
            it.action(it);
          }}
          activeOpacity={0.8}
          style={{opacity: it.isEnabled ? 1 : 0.58}}
        >
          <Image
            source={it.icon}
            style={{
              height: useDip(24),
              width: useDip(24),
              marginLeft: 12,
              tintColor: '#333'
            }}
          />
        </TouchableOpacity>)}
      </View>
  </View>;
};

const styles = StyleSheet.create({
  view: {
    height: useDip(56),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  }
})
export default Navigation;