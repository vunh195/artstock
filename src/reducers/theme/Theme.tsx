import React, { useMemo } from 'react';
import {
  ITheme,
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { useSelector } from 'react-redux';
import { Colors } from './Theme.styled';
import { darkModeSelector } from './Theme.selector';
// import secondaryBg from 'assets/btn-secondary.png';
import { FONT_SIZES } from './Theme.fonts';

export const MEDIA_WIDTHS = {
  // upToExtraSmall: 500,
  // upToSmall: 720,
  // upToMedium: 1024,
  // upToLarge: 1480,
  upToExtraSmall3: 340,
  upToExtraSmall2: 420,
  upToExtraSmall1: 500,
  upToExtraSmall: 640,
  upToSmall: 768,
  upToMedium2: 800,
  upToMedium: 1056,
  upToMedium1: 1156,
  upToLarge: 1460,
  uptoVeryLarge: 1600,
  upToLarge1: 1260,
};

export const FONT_WEIGHT = {
  fontRegular: 400,
  fontBold: 600,
  fontMedium: 500,
};
export const FONT_FAMILY = {
  primaryFont: 'Space Grotesk',
  secondaryFont: 'Ubuntu',
  tertiaryFont: 'Unbounded',
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const white = '#FFFFFF';
const black = '#000000';

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // table
    headerRow: darkMode ? '#f5f5f5' : '#f5f5f5',
    hoverRow: darkMode ? '#e0e0e0' : '#e0e0e0',
    darkRow: darkMode ? '#F5F5F5' : '#F5F5F5',
    lightRow: darkMode ? white : white,

    // modal
    modalBg: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',

    border1: darkMode ? '#3f3f3f' : '#353945',
    border2: darkMode ? '#E0E0E0' : '#E0E0E0',

    // text
    text1: darkMode ? white : black,
    text2: darkMode ? 'rgba(112, 112, 112, 1)' : 'rgba(112, 112, 112, 1)',
    text3: darkMode ? '#37b9ff' : '#3772FF',
    text4: darkMode ? '#797979' : '#797979',
    text5: darkMode ? '#37B9FF' : '#37B9FF',
    text6: darkMode ? '#E6E8EC' : '#E6E8EC',
    text7: darkMode ? '#FCFCFD' : '#FCFCFD',
    text8: darkMode ? black : white,
    text9: darkMode ? '#45B36B' : '#45B36B',

    green1: darkMode ? 'rgba(49, 217, 46, 1)' : 'rgba(49, 217, 46, 1)',
    green2: darkMode ? '#45B26B' : '#45B26B',
    red1: darkMode ? '#EF466F' : '#EF466F',

    yellow1: darkMode ? '#FFD166' : '#FFD166',
    yellow2: darkMode ? '#FF8A00' : '#FF8A00',

    tooltipBg: black,
    tooltipText: white,

    gray1: darkMode ? '#D8D8D8' : '#D8D8D8',
    gray2: darkMode ? '#D6D8E0' : '#D6D8E0',
    gray3: darkMode ? '#D1D1D1' : '#D1D1D1',

    dark1: darkMode ? '#232630' : '#232630',
    dark2: darkMode ? '#353945' : '#353945',
    dark3: darkMode ? '#777E90' : '#777E90',
    dark4: darkMode ? '#B1B5C3' : '#B1B5C3',
    dark5: darkMode ? '#232323' : '#232323',
    dark6: darkMode ? '#777E91' : '#777E91',
    dark7: darkMode ? '#23262F' : '#23262F',
    dark8: darkMode ? '#141416' : '#141416',
    dark9: darkMode ? '#202231' : '#202231',

    blue1: darkMode ? '#3772ff' : '#3772ff',
    blue2: darkMode ? '#8084dc' : '#8084dc',
    blue3: darkMode ? 'rgba(98, 216, 238, 1)' : 'rgba(98, 216, 238, 1)',
    blue4: darkMode ? '#15B2F4' : '#15B2F4',

    color1: darkMode ? '#DDDDDD' : '#DDDDDD',
    color2: darkMode ? '#ffffff' : '#ffffff',
    color3: darkMode ? '#9E71FF' : '#9E71FF',
    color4: darkMode ? '#808080' : '#808080',
    color5: darkMode ? '#C5AAFF' : '#C5AAFF',
    textLabel: darkMode ? '#5E6B7E' : '#5E6B7E',
    cardBg: darkMode ? '#212325' : '#212325',
    cardBorderBlue: darkMode ? '#705bec' : '#705bec',
    cardBorderPink: darkMode ? '#eb5be5' : '#eb5be5',
    cardBorderGreen: darkMode ? '#88eb5b' : '#88eb5b',
    cardBorderRed: darkMode ? '#e87a95' : '#e87a95',
    cardBorderYellow: darkMode ? '#ebb15b' : '#ebb15b',
    appBackground: darkMode ? '#141315' : '#141315',
    textPinkColor: darkMode ? '#DACCFF' : '#DACCFF',
    textGrayColor: darkMode ? '#D1CED8' : '#D1CED8',
    appBackground2: darkMode ? '#151515' : '#151515',
    supperWhite: darkMode ? '#f5f1ff' : '#f5f1ff',
    inputColor: darkMode ? '#8D8D8D' : '#8D8D8D',
    errorColor: darkMode ? '#B95000' : '#B95000',
  };
}

export function appTheme(darkMode: boolean): ITheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    // media queries
    mediaWidth: mediaWidthTemplates,
    // font_weight
    fontWeight: FONT_WEIGHT,
    // font_family
    fontFamily: FONT_FAMILY,
    // font_size
    fontSize: FONT_SIZES,
    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = useSelector(darkModeSelector);

  const themeObject = useMemo(() => appTheme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export const FixedGlobalStyle = createGlobalStyle`
html{position: relative; height: 100%; }
:root {
  --toastify-color-light: #121212;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #121212;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: "Clash Display";
  --toastify-z-index: 9999;

  --toastify-text-color-light: #fff;
  --toastify-text-color-dark: #fff;

  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}
.Toastify__toast-container--bottom-right div {
  font-family: "Hepta Slab" !important;
}

    html,
    body {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk';
        >iframe{
          z-index: -1 !important;
        }
    
    }
    /* ::-webkit-scrollbar {
        width: 7px;
        background: #000;
    }

    ::-webkit-scrollbar-thumb {
        // background: #393812;
        background: linear-gradient(238.93deg, #90caffd6 18.8%, #07ff889e 81.2%);
        -webkit-border-radius: 1ex;
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    } */

    ::-webkit-scrollbar-corner {
    }
    .ant-modal-close-x {
        display: none;
    }

    .ant-modal-body {
        padding: 0;
    }

    .ant-modal-content {
        background-color: transparent;
    }

    a {
        color: ${colors(false).black};
    }
    .tg-container {
      width: 100%;
        max-width: 1152px !important;
        padding: 0 16px !important;
        box-sizing: border-box;
      

    }
    .tg-container-app {
      width: 100%;
        max-width: 1156px !important;
        padding: 0 10px !important;
        box-sizing: border-box;
      

    }
   
    .modified-item:hover {
        border-bottom: 2px solid transparent !important;
        color: inherit !important;
    }

    * {
        box-sizing: border-box !important;
    }

    button {
        user-select: none;
    }
    .container {
        max-width: 1660px !important;
        padding: 0 16px !important;

    }

    html {
        font-size: '16px';
        font-variant: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    }
    p {
        margin-bottom: 0;
    }
`;

export const ThemedGlobalStyle = createGlobalStyle`
html.has-scroll-smooth {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
    body {
        min-height: 100vh;
        box-sizing: border-box;
        // background-color: #0f0e0e;
        // background-image: url(./bg.svg);
        width: 100vw;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .disable-pointer {
        cursor: default;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .gradient-text {
        background: -webkit-linear-gradient(-75deg, #15b2f4 0%, #9546c2 50%, #fd7942 75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &::selection {
            -webkit-text-fill-color: white;
        }
    }
    .items-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .justify-between {
        display: flex;
        justify-content: space-between;
    }
    .btn-border {
        border: 2px solid ${({ theme }: { theme: ITheme }) => theme.dark3};
        font-size: 12px !important;
        background: transparent !important;
    }
    .btn-connect-wallet {
        border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border1};
        .balanceText {
            width: max-content;
        }
    }
    .css-6m3mwv-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root{
      font-family: 'Hepta Slab' !important;
    }
    .text-center {
        text-align: center;
    }
    .default-text {
        color: ${({ theme }: { theme: ITheme }) => theme.text8};
    }
    .line-full-width {
        width: 100%;
        height: 1px;
        background: ${({ theme }: { theme: ITheme }) => theme.border1};
    }
    .btn-disconnect {
        color: ${({ theme }: { theme: ITheme }) => theme.text8};
    }
    .btn-primary-anim{
        transition: all .3s;
        &:hover {
            transform: scale(1.02);
        }
        &:active {
            transform: scale(0.98);
        }
    }
    .modal-collection-drops {
        .ant-modal-footer {
            display: none;
        }
        .ant-modal-header {
            // border-top-left-radius: 5px;
            // border-top-right-radius: 5px;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(20px);
            border-bottom: none;
            padding: 7px 15px;
        }
        .ant-modal-body {
            .ant-image {
                width: 100%;
                backdrop-filter: blur(20px);
                background: rgba(0,0,0,0.8);
            }
     
        }
    }
  .animate__spinImg{
    animation-name: spinImg;
    animation-duration: 1.5s !important;
  }
    video::-webkit-media-controls, video::-moz-media-controls, video::-o-media-controls, video::-ms-media-controls {   display: none !important; }

    .btn-play {
    width:100px;
    height:100px;
    background-color: rgba(255,255,255,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    color:white;
}
.btn-play svg {
  font-size: 70px;
}
.btn-primary{
  transition:all .3s ;
}
.btn-primary.unactive {
   opacity: 0.6;

}
  .btn-primary:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }

  // .btn-secondary {
  //   width:188px;
  //   padding:10px 0px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   text-align: center;
  //   background-image: url(});
  //   background-size:100% 100%;
  //   color: #DECFC0;
  //   font-family: ${(props) => props.theme.fontFamily.primaryFont};
    
  //   position:relative;
  // }
  .btn-secondary a{
    padding: 10px 20px;
    display: block ;
  }
  .btn-secondary:active {
    transform: translateY(0px)
  }
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @media only screen and (max-width: 560px) {
    .btn-primary {
      width:120px;
      padding:8px 0px;
      font-size: 14px;
      position:relative;
    }
    .btn-secondary {
      width:120px;
      padding:8px 0px;
    }
  }
  ::-webkit-scrollbar {
    width: 4px;
    background-color: black;
  }
  
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
    border-radius: 4px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.5;
  }
`;
