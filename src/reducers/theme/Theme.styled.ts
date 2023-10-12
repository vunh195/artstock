import {
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from 'styled-components';

export type Color = string;
export interface Colors {
  // base
  white: Color;
  black: Color;

  // table
  headerRow: Color;
  hoverRow: Color;
  darkRow: Color;
  lightRow: Color;

  // modal
  modalBg: Color;

  border1: Color;
  border2: Color;

  // Text
  text1: Color;
  text2: Color;
  text3: Color;
  text4: Color;
  text5: Color;
  text6: Color;
  text7: Color;
  text8: Color;
  text9: Color;

  // Colors
  green1: Color;
  green2: Color;
  red1: Color;
  yellow1: Color;
  yellow2: Color;

  tooltipBg: string;
  tooltipText: string;

  gray1: Color;
  gray2: Color;
  gray3: Color;
  dark1: Color;
  dark2: Color;
  dark3: Color;
  dark4: Color;
  dark5: Color;
  dark6: Color;
  dark7: Color;
  dark8: Color;
  dark9: Color;

  blue1: Color;
  blue2: Color;
  blue3: Color;
  blue4: Color;
  //GALO SWAP V3 Color
  color1: Color;
  color2: Color;
  color3: Color;
  color4: Color;
  color5: Color;
  textLabel: Color;
  cardBg: Color;
  cardBorderBlue: Color;
  cardBorderPink: Color;
  cardBorderRed: Color;
  cardBorderYellow: Color;
  cardBorderGreen: Color;
  appBackground: Color;
  textPinkColor: Color;
  textGrayColor: Color;
  appBackground2: Color;
  supperWhite: Color;
  inputColor: Color;
  errorColor: Color;
}

export interface Grids {
  sm: number;
  md: number;
  lg: number;
}

declare module 'styled-components' {
  export interface ITheme extends Colors {
    grids: Grids;

    // media queries
    mediaWidth: {
      upToExtraSmall3: ThemedCssFunction<ITheme>;
      upToExtraSmall2: ThemedCssFunction<ITheme>;
      upToExtraSmall1: ThemedCssFunction<ITheme>;
      upToExtraSmall: ThemedCssFunction<ITheme>;
      upToSmall: ThemedCssFunction<ITheme>;
      upToMedium: ThemedCssFunction<ITheme>;
      upToMedium1: ThemedCssFunction<ITheme>;
      upToMedium2: ThemedCssFunction<ITheme>;
      upToLarge: ThemedCssFunction<ITheme>;
    };
    // css font weight
    fontWeight: {
      fontRegular: number;
      fontBold: number;
      fontMedium: number;
    };
    // css font family
    fontFamily: {
      primaryFont: string;
      secondaryFont: string;
      tertiaryFont: string;
    };

    // css font size
    fontSize: {
      superSmall: string;
      small: string;
      regular: string;
      medium: string;
      superMedium: string;
      large: string;
      avgLarge: string;
      veryLarge: string;
      superLarge: string;
    };
    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation;
    flexRowNoWrap: FlattenSimpleInterpolation;
  }
}
