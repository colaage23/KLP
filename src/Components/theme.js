import {Platform, StyleSheet} from 'react-native';

const fontsizes = {
  extra: '42px',
  xxxlarge: '32px',
  xxlarge: '28px',
  xlarge: '26px',
  large: '24px',
  tabTitle: '22px',
  title: '20px',
  content: '18px',
  normal: '16px',
  small: '15px',
  xsmall: '14px',
  xxsmall: '13px',
};

const family = {
  semibold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  medium: 'Pretendard-Medium',
  regular: 'Pretendard-Regular',
};

const colors = {
  main: '#5E59FE', // 메인
  main2: '#9E9BFE',

  border: '#F3D802',
  bgBlack: '#4C4B4B',
  bgGray: '#faf8f8', // 연한 그레이
  bgGray2: '#ededed', // 1보다는 진하지만 연함
  bgBlue: '#E4F1FC',
  bgGreen: '#EBFDED',
  bgRed: '#FFF1F1',
  bgOrange: '#FFF0DC',
  bgBase: '#F2F2F2',
  bgBase2: '#F2F2F2',
  bgBase3: '#F8F8F8',
  bgMain: '#EDEDFF',

  barGray: '#e6e6e6',
  barGray2: '#d6d6d6', //line으로 수정예정
  barDarkGray: '#7d7d7d', //line으로 수정예정

  btnGray: '#BEBEBE',

  fontMain: '#191919', // 검은색 글씨
  fontGray: '#7D7D7D', // 회색 글씨
  fontLightGray: '#AFAEAE', // placeholder
  fontDarkGray: '#707070',
  fontGreen: '#5BC467', //  더 진한 녹색
  fontDarkGreen: '#117C5B', // 어두운 녹색
  fontBlue: '#459EE2',
  fontLightBlue: '#5C93FF',
  fontRed: '#FE5E59',
  fontWhite: '#ffffff',
  fontYellow: '#FFB300', // 별점색깔
  fontYellow2: '#FFDB45', // 별점색깔
  fontOrange: '#FF9100',
  fontLightGreen: '#77CFC2',
  lineGray: '#E6E6E6',
  lineDarkGray: '#7d7d7d',
};

const style = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  topTap: {fontSize: 18, fontFamily: 'Pretendard-Bold'},
});

const theme = {
  fontsizes,
  family,
  colors,
  style,
};

export default theme;
