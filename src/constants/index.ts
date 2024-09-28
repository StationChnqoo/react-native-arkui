import {Dimensions} from 'react-native';

/**
 * 
 * @param n 
 */
const useDip = (n: number, mobileWidth?: number) => {
    return Math.floor(Dimensions.get('screen').width/375 * n)
}

export {
    useDip
}