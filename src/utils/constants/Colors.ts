const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const primaryPink = '#FB6580';
const primaryNavy = '#2D2C3C';
const secondaryGray = '#7B7B8B';
const thirdGray = '#5C5E6F';
const blackBackground = '#13131A';

export const GRADIENT_START = '#FB6580'
export const GRADIENT_END = '#F11775'

export default {
  light: {
    text: '#000',
    background: '#fff',
    navbarBackground: '#EAEAEA',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: blackBackground,
    navbarBackground: primaryNavy,
    tint: primaryPink,
    tabIconDefault: thirdGray,
    tabIconSelected: primaryPink,
  },
};
