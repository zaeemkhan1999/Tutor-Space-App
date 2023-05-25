import React from 'react';

import { createTheme } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';

import ErrorOutline from './public/assets/images/_ErrorOutline.svg';
import WarningAmberOutlined from './public/assets/images/_WarningAmberOutlined.svg';
import InfoOutlined from './public/assets/images/_InfoOutlined.svg';
import CheckCircleOutlined from './public/assets/images/_CheckCircleOutlined.svg';
import CheckBoxOutlineBlank from './public/assets/images/_CheckBoxOutlineBlankOutlined.svg';
import IndeterminateCheckBo from './public/assets/images/_IndeterminateCheckBoxFilled.svg';
import CheckBoxFilled from './public/assets/images/_CheckBoxFilled.svg';

const globalTheme = createTheme({
  palette: {
    '50': 'rgba(236, 239, 241, 1)',
    '100': 'rgba(207, 216, 220, 1)',
    '200': 'rgba(176, 190, 197, 1)',
    '300': 'rgba(144, 164, 174, 1)',
    '400': 'rgba(120, 144, 156, 1)',
    '500': 'rgba(96, 125, 139, 1)',
    '600': 'rgba(84, 110, 122, 1)',
    '700': 'rgba(69, 90, 100, 1)',
    '800': 'rgba(55, 71, 79, 1)',
    '900': 'rgba(38, 50, 56, 1)',
    mode: 'light',
    primary: {
      main: 'rgba(25, 118, 210, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    secondary: {
      main: 'rgba(156, 39, 176, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    error: {
      main: 'rgba(211, 47, 47, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    warning: {
      main: 'rgba(237, 108, 2, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    success: {
      main: 'rgba(46, 125, 50, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    info: {
      main: 'rgba(2, 136, 209, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
    Text: {
      Primary: 'rgba(0, 0, 0, 0.87)',
      Secondary: 'rgba(0, 0, 0, 0.6)',
      Disabled: 'rgba(0, 0, 0, 0.38)',
    },
    Primary: {
      Main: 'rgba(25, 118, 210, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(25, 118, 210, 0.04)',
        '8p': 'rgba(25, 118, 210, 0.08)',
        '12p': 'rgba(25, 118, 210, 0.12)',
        '30p': 'rgba(25, 118, 210, 0.3)',
        '50p': 'rgba(25, 118, 210, 0.5)',
      },
    },
    Secondary: {
      Main: 'rgba(156, 39, 176, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(156, 39, 176, 0.04)',
        '8p': 'rgba(156, 39, 176, 0.08)',
        '12p': 'rgba(156, 39, 176, 0.12)',
        '30p': 'rgba(156, 39, 176, 0.3)',
        '50p': 'rgba(156, 39, 176, 0.5)',
      },
    },
    Action: {
      'Hover (4p)': 'rgba(0, 0, 0, 0.04)',
      'Selected (8p)': 'rgba(0, 0, 0, 0.08)',
      'Disabled Background (12p)': 'rgba(0, 0, 0, 0.12)',
      'Focus (12p)': 'rgba(0, 0, 0, 0.12)',
      'Disabled (26p)': 'rgba(0, 0, 0, 0.26)',
      'Active (54p)': 'rgba(0, 0, 0, 0.54)',
    },
    Error: {
      Main: 'rgba(211, 47, 47, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(211, 47, 47, 0.04)',
        '12p': 'rgba(211, 47, 47, 0.12)',
        '30p': 'rgba(211, 47, 47, 0.3)',
        '50p': 'rgba(211, 47, 47, 0.5)',
        '160p': 'rgba(211, 47, 47, 1)',
        '190p': 'rgba(211, 47, 47, 1)',
      },
    },
    Warning: {
      Main: 'rgba(237, 108, 2, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(237, 108, 2, 0.04)',
        '12p': 'rgba(237, 108, 2, 0.12)',
        '30p': 'rgba(237, 108, 2, 0.3)',
        '50p': 'rgba(237, 108, 2, 0.5)',
        '160p': 'rgba(237, 108, 2, 1)',
        '190p': 'rgba(237, 108, 2, 1)',
      },
    },
    Info: {
      Main: 'rgba(2, 136, 209, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(2, 136, 209, 0.04)',
        '12p': 'rgba(2, 136, 209, 0.12)',
        '30p': 'rgba(2, 136, 209, 0.3)',
        '50p': 'rgba(2, 136, 209, 0.5)',
        '160p': 'rgba(2, 136, 209, 1)',
        '190p': 'rgba(2, 136, 209, 1)',
      },
    },
    Success: {
      Main: 'rgba(46, 125, 50, 1)',
      Contrast: 'rgba(255, 255, 255, 1)',
      Shades: {
        '4p': 'rgba(46, 125, 50, 0.04)',
        '12p': 'rgba(46, 125, 50, 0.12)',
        '30p': 'rgba(46, 125, 50, 0.3)',
        '50p': 'rgba(46, 125, 50, 0.5)',
        '160p': 'rgba(46, 125, 50, 1)',
        '190p': 'rgba(46, 125, 50, 1)',
      },
    },
    Background: {
      Paper: 'rgba(255, 255, 255, 1)',
      Default: 'rgba(255, 255, 255, 1)',
    },
    Other: {
      Divider: 'rgba(0, 0, 0, 0.12)',
      'Outlined Border (23p)': 'rgba(0, 0, 0, 0.23)',
      'Backdrop Overlay': 'rgba(0, 0, 0, 0.5)',
      'Filled Input Background': 'rgba(0, 0, 0, 0.06)',
      'Standard Input Line': 'rgba(0, 0, 0, 0.42)',
      Snackbar: 'rgba(50, 50, 50, 1)',
      'Rating Active': 'rgba(255, 180, 0, 1)',
      'focus-ring-color': 'rgba(0, 95, 204, 1)',
    },
    Common: {
      Black: {
        '4p': 'rgba(0, 0, 0, 0.04)',
        '12p': 'rgba(0, 0, 0, 0.12)',
        '30p': 'rgba(0, 0, 0, 0.3)',
        '100p': 'rgba(0, 0, 0, 1)',
      },
      White: {
        '8p': 'rgba(255, 255, 255, 0.08)',
        '12p': 'rgba(255, 255, 255, 0.12)',
        '30p': 'rgba(255, 255, 255, 0.3)',
        '100p': 'rgba(255, 255, 255, 1)',
      },
    },
    A100: 'rgba(130, 177, 255, 1)',
    A200: 'rgba(68, 138, 255, 1)',
    A400: 'rgba(41, 121, 255, 1)',
    A700: 'rgba(41, 98, 255, 1)',
  },
  typography: {
    Typography: {
      H1: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '96px',
        letterSpacing: '-1.44px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      H2: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontSize: '60px',
        letterSpacing: '-0.3px',
        textDecoration: 'none',
        lineHeight: '120.00000476837158%',
        textTransform: 'none',
      },
      H3: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '48px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      H4: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '34px',
        letterSpacing: '0.085px',
        textDecoration: 'none',
        lineHeight: '123.50000143051147%',
        textTransform: 'none',
      },
      H5: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '133.39999914169312%',
        textTransform: 'none',
      },
      H6: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '0.030000001192092896px',
        textDecoration: 'none',
        lineHeight: '160.0000023841858%',
        textTransform: 'none',
      },
      'Body 1': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Body 2': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '142.99999475479126%',
        textTransform: 'none',
      },
      'Subtitle 1': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
      'Subtitle 2': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '157.00000524520874%',
        textTransform: 'none',
      },
      Overline: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.12px',
        textDecoration: 'none',
        lineHeight: '266.00000858306885%',
        textTransform: 'uppercase',
      },
      Caption: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
    },
    Components: {
      'Alert Title': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Avatar Initials': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '20px',
        letterSpacing: '0.02800000011920929px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Badge Label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.016800000071525573px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Button Large': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '15px',
        letterSpacing: '0.06900000125169754px',
        textDecoration: 'none',
        lineHeight: '26px',
        textTransform: 'uppercase',
      },
      'Button Medium': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.056000000834465026px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'uppercase',
      },
      'Button Small': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '13px',
        letterSpacing: '0.05980000108480454px',
        textDecoration: 'none',
        lineHeight: '22px',
        textTransform: 'uppercase',
      },
      'Input Label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.01800000071525574px',
        textDecoration: 'none',
        lineHeight: '12px',
        textTransform: 'none',
      },
      'Helper Text': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '20px',
        textTransform: 'none',
      },
      'Input Text': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      Chip: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '13px',
        letterSpacing: '0.020799999535083772px',
        textDecoration: 'none',
        lineHeight: '18px',
        textTransform: 'none',
      },
      Tooltip: {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '14px',
        textTransform: 'none',
      },
      'Table Header': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'Menu Item': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Menu Item Dense': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '24px',
        textTransform: 'none',
      },
      'List Subheader': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.014000000208616257px',
        textDecoration: 'none',
        lineHeight: '48px',
        textTransform: 'none',
      },
      'Bottom Navigation Active Label': {
        fontStyle: 'normal',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.056000000834465026px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
    },
  },
  customShadows: {
    Elevation: {
      '1': {
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      '2': {
        boxShadow:
          '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.2)',
      },
      '3': {
        boxShadow:
          '0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.2)',
      },
      '4': {
        boxShadow:
          '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)',
      },
      '5': {
        boxShadow:
          '0px 1px 14px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
      },
      '6': {
        boxShadow:
          '0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
      },
      '7': {
        boxShadow:
          '0px 2px 16px rgba(0, 0, 0, 0.12), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.2)',
      },
      '8': {
        boxShadow:
          '0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 5px 5px rgba(0, 0, 0, 0.2)',
      },
      '9': {
        boxShadow:
          '0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 5px 6px rgba(0, 0, 0, 0.2)',
      },
      '10': {
        boxShadow:
          '0px 4px 18px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 6px 6px rgba(0, 0, 0, 0.2)',
      },
      '11': {
        boxShadow:
          '0px 4px 20px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 6px 7px rgba(0, 0, 0, 0.2)',
      },
      '12': {
        boxShadow:
          '0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
      },
      '13': {
        boxShadow:
          '0px 5px 24px rgba(0, 0, 0, 0.12), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
      },
      '14': {
        boxShadow:
          '0px 5px 26px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 7px 9px rgba(0, 0, 0, 0.2)',
      },
      '15': {
        boxShadow:
          '0px 6px 28px rgba(0, 0, 0, 0.12), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 8px 9px rgba(0, 0, 0, 0.2)',
      },
      '16': {
        boxShadow:
          '0px 6px 30px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2)',
      },
      '17': {
        boxShadow:
          '0px 6px 32px rgba(0, 0, 0, 0.12), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 8px 11px rgba(0, 0, 0, 0.2)',
      },
      '18': {
        boxShadow:
          '0px 7px 34px rgba(0, 0, 0, 0.12), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 9px 11px rgba(0, 0, 0, 0.2)',
      },
      '19': {
        boxShadow:
          '0px 7px 36px rgba(0, 0, 0, 0.12), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 9px 12px rgba(0, 0, 0, 0.2)',
      },
      '20': {
        boxShadow:
          '0px 8px 38px rgba(0, 0, 0, 0.12), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
      },
      '21': {
        boxShadow:
          '0px 8px 40px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
      },
      '22': {
        boxShadow:
          '0px 8px 42px rgba(0, 0, 0, 0.12), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 10px 14px rgba(0, 0, 0, 0.2)',
      },
      '23': {
        boxShadow:
          '0px 9px 44px rgba(0, 0, 0, 0.12), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 11px 14px rgba(0, 0, 0, 0.2)',
      },
      '24': {
        boxShadow:
          '0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2)',
      },
      'Outlined Light': {
        boxShadow: '0px 0px 0px rgba(224, 224, 224, 1)',
      },
      'Outlined Dark': {
        boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.12)',
      },
    },
  },
});

const questTheme = createTheme(
  {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiAlert: {
        defaultProps: {
          iconMapping: {
            error: <SvgIcon component={ErrorOutline} />,
            warning: <SvgIcon component={WarningAmberOutlined} />,
            info: <SvgIcon component={InfoOutlined} />,
            success: <SvgIcon component={CheckCircleOutlined} />,
          },
        },
        styleOverrides: {
          filledError: {
            backgroundColor: globalTheme.palette['Error']['Main'],
            borderRadius: `4px`,
          },
          filledWarning: {
            backgroundColor: globalTheme.palette['Warning']['Main'],
            borderRadius: `4px`,
          },
          filledInfo: {
            backgroundColor: globalTheme.palette['Info']['Main'],
            borderRadius: `4px`,
          },
          filledSuccess: {
            backgroundColor: globalTheme.palette['Success']['Main'],
            borderRadius: `4px`,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          circular: {},
          square: {},
          rounded: {
            borderRadius: `4px`,
          },
          colorDefault: {
            color: globalTheme.palette['Background']['Paper'],
            fontStyle:
              globalTheme.typography['Components']['Avatar Initials'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Avatar Initials']
                .fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Avatar Initials']
                .fontWeight,
            fontSize:
              globalTheme.typography['Components']['Avatar Initials'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Avatar Initials']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Avatar Initials']
                .lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Avatar Initials']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Avatar Initials']
                .textTransform,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedSizeLarge: {
            fontStyle: `normal`,
            fontFamily: `Roboto`,
            fontWeight: `500`,
            fontSize: `15px`,
            letterSpacing: `0.06900000125169754px`,
            textDecoration: `none`,
            lineHeight: `26px`,
            textTransform: `uppercase`,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          containedSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          containedSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          containedPrimary: {
            backgroundColor: globalTheme.palette['Primary']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          containedSecondary: {
            backgroundColor: globalTheme.palette['Secondary']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          containedError: {
            backgroundColor: globalTheme.palette['Error']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          containedSuccess: {
            backgroundColor: globalTheme.palette['Success']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          containedInfo: {
            backgroundColor: globalTheme.palette['Info']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          containedWarning: {
            backgroundColor: globalTheme.palette['Warning']['Main'],
            boxShadow: globalTheme.customShadows['Elevation']['2'].boxShadow,
            color: `rgba(255, 255, 255, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Dark'],
              boxShadow: globalTheme.customShadows['Elevation']['4'].boxShadow,
              color: `rgba(255, 255, 255, 1)`,
            },
            '&:disabled': {
              backgroundColor:
                globalTheme.palette['Action']['Disabled Background (12p)'],
            },
          },
          textSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 8px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          textSizeLarge: {
            fontStyle:
              globalTheme.typography['Components']['Button Large'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Large'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Large'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Large'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Large']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Large'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Large']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Large']
                .textTransform,
            padding: `8px 11px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          textSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 5px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          textPrimary: {
            color: `rgba(25, 118, 210, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              color: `rgba(25, 118, 210, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSecondary: {
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Shades']['4p'],
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textError: {
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Shades']['4p'],
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textSuccess: {
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Shades']['4p'],
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textInfo: {
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Shades']['4p'],
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          textWarning: {
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Shades']['4p'],
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSizeLarge: {
            fontStyle:
              globalTheme.typography['Components']['Button Large'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Large'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Large'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Large'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Large']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Large'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Large']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Large']
                .textTransform,
            padding: `8px 22px`,
            borderRadius: `4px`,
            height: `42px`,
          },
          outlinedSizeMedium: {
            fontStyle:
              globalTheme.typography['Components']['Button Medium'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Medium'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Medium'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Medium'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Medium']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Medium'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Medium']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Medium']
                .textTransform,
            padding: `6px 16px`,
            borderRadius: `4px`,
            height: `36px`,
          },
          outlinedSizeSmall: {
            fontStyle:
              globalTheme.typography['Components']['Button Small'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Button Small'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Button Small'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Button Small'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Button Small']
                .letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Button Small'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Button Small']
                .textDecoration,
            textTransform:
              globalTheme.typography['Components']['Button Small']
                .textTransform,
            padding: `4px 10px`,
            borderRadius: `4px`,
            height: `30px`,
          },
          outlinedPrimary: {
            border: `1px solid rgba(25, 118, 210, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(25, 118, 210, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              border: `1px solid rgba(25, 118, 210, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(25, 118, 210, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSecondary: {
            border: `1px solid rgba(156, 39, 176, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(156, 39, 176, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Secondary']['Shades']['4p'],
              border: `1px solid rgba(156, 39, 176, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(156, 39, 176, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedError: {
            border: `1px solid rgba(211, 47, 47, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(211, 47, 47, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Error']['Shades']['4p'],
              border: `1px solid rgba(211, 47, 47, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(211, 47, 47, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedSuccess: {
            border: `1px solid rgba(46, 125, 50, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(46, 125, 50, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Success']['Shades']['4p'],
              border: `1px solid rgba(46, 125, 50, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(46, 125, 50, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedInfo: {
            border: `1px solid rgba(2, 136, 209, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(2, 136, 209, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Info']['Shades']['4p'],
              border: `1px solid rgba(2, 136, 209, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(2, 136, 209, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
          outlinedWarning: {
            border: `1px solid rgba(237, 108, 2, 0.5)`,
            boxSizing: `border-box`,
            color: `rgba(237, 108, 2, 1)`,
            '&:hover': {
              backgroundColor: globalTheme.palette['Warning']['Shades']['4p'],
              border: `1px solid rgba(237, 108, 2, 0.5)`,
              boxSizing: `border-box`,
              color: `rgba(237, 108, 2, 1)`,
            },
            '&:disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
              boxSizing: `border-box`,
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          icon: <SvgIcon component={CheckBoxOutlineBlank} />,
          indeterminateIcon: <SvgIcon component={IndeterminateCheckBo} />,
          checkedIcon: <SvgIcon component={CheckBoxFilled} />,
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: globalTheme.palette['Primary']['Shades']['4p'],
              borderRadius: `19px`,
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle: globalTheme.typography['Typography']['Body 1'].fontStyle,
            fontFamily:
              globalTheme.typography['Typography']['Body 1'].fontFamily,
            fontWeight:
              globalTheme.typography['Typography']['Body 1'].fontWeight,
            fontSize: globalTheme.typography['Typography']['Body 1'].fontSize,
            letterSpacing:
              globalTheme.typography['Typography']['Body 1'].letterSpacing,
            lineHeight:
              globalTheme.typography['Typography']['Body 1'].lineHeight,
            textDecoration:
              globalTheme.typography['Typography']['Body 1'].textDecoration,
            textTransform:
              globalTheme.typography['Typography']['Body 1'].textTransform,
            '&.Mui-disabled': {
              color: globalTheme.palette['Action']['Disabled (26p)'],
              fontStyle:
                globalTheme.typography['Typography']['Body 1'].fontStyle,
              fontFamily:
                globalTheme.typography['Typography']['Body 1'].fontFamily,
              fontWeight:
                globalTheme.typography['Typography']['Body 1'].fontWeight,
              fontSize: globalTheme.typography['Typography']['Body 1'].fontSize,
              letterSpacing:
                globalTheme.typography['Typography']['Body 1'].letterSpacing,
              lineHeight:
                globalTheme.typography['Typography']['Body 1'].lineHeight,
              textDecoration:
                globalTheme.typography['Typography']['Body 1'].textDecoration,
              textTransform:
                globalTheme.typography['Typography']['Body 1'].textTransform,
            },
          },
          root: {
            marginLeft: '0px',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: {
            borderRadius: `4px`,
            boxShadow: globalTheme.customShadows['Elevation']['24'].boxShadow,
            padding: `8px 24px`,
          },
          paper: {
            backgroundColor: globalTheme.palette['Background']['Paper'],
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            '&.MuiRadio-colorPrimary': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(25, 118, 210, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(25, 118, 210, 0.3)`,
              },
            },
            '&.MuiRadio-colorSecondary': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(156, 39, 176, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(156, 39, 176, 0.04)`,
              },
            },
            '&.MuiRadio-colorError': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(211, 47, 47, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(211, 47, 47, 0.04)`,
              },
            },
            '&.MuiRadio-colorWarning': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(237, 108, 2, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(237, 108, 2, 0.04)`,
              },
            },
            '&.MuiRadio-colorSuccess': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(46, 125, 50, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(46, 125, 50, 0.04)`,
              },
            },
            '&.MuiRadio-colorInfo': {
              color: `rgba(0, 0, 0, 0.6)`,
              '&.Mui-checked': {
                color: `rgba(2, 136, 209, 1)`,
              },
              '&:hover': {
                backgroundColor: `rgba(2, 136, 209, 0.04)`,
              },
            },
            '&.Mui-disabled': {
              color: `rgba(0, 0, 0, 0.26)`,
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.MuiSwitch-colorPrimary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(25, 118, 210, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSecondary': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(156, 39, 176, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(156, 39, 176, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorError': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(211, 47, 47, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(211, 47, 47, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorWarning': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(237, 108, 2, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(237, 108, 2, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorSuccess': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(46, 125, 50, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(46, 125, 50, 0.04)',
                },
              },
            },
            '&.MuiSwitch-colorInfo': {
              color: 'rgba(250, 250, 250, 1)',
              borderRadius: `100px`,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '&.Mui-checked': {
                color: 'rgba(2, 136, 209, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(2, 136, 209, 0.04)',
                },
              },
            },
          },
          track: {
            '.MuiSwitch-colorPrimary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorPrimary.Mui-checked + &': {
              backgroundColor: 'rgba(25, 118, 210, 1)',
            },
            '.MuiSwitch-colorSecondary + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSecondary.Mui-checked + &': {
              backgroundColor: 'rgba(156, 39, 176, 1)',
            },
            '.MuiSwitch-colorError + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorError.Mui-checked + &': {
              backgroundColor: 'rgba(211, 47, 47, 1)',
            },
            '.MuiSwitch-colorWarning + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorWarning.Mui-checked + &': {
              backgroundColor: 'rgba(237, 108, 2, 1)',
            },
            '.MuiSwitch-colorSuccess + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorSuccess.Mui-checked + &': {
              backgroundColor: 'rgba(46, 125, 50, 1)',
            },
            '.MuiSwitch-colorInfo + &': {
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            '.Mui-checked.MuiSwitch-colorInfo.Mui-checked + &': {
              backgroundColor: 'rgba(2, 136, 209, 1)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: `undefinedpx`,
            letterSpacing: `normal`,
            textDecoration: `none`,
            textTransform: `none`,
            '&.MuiError': {
              fontSize: `undefinedpx`,
              letterSpacing: `normal`,
              textDecoration: `none`,
              textTransform: `none`,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Secondary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Secondary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
          sizeSmall: {
            color: globalTheme.palette['Text']['Primary'],
            fontStyle:
              globalTheme.typography['Components']['Input Text'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Input Text'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Input Text'].fontWeight,
            fontSize:
              globalTheme.typography['Components']['Input Text'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Input Text'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Input Text'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Input Text'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Input Text'].textTransform,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: `rgba(97, 97, 97, 0.9)`,
            borderRadius: `4px`,
            color: globalTheme.palette['Common']['White']['100p'],
            fontStyle:
              globalTheme.typography['Components']['Tooltip'].fontStyle,
            fontFamily:
              globalTheme.typography['Components']['Tooltip'].fontFamily,
            fontWeight:
              globalTheme.typography['Components']['Tooltip'].fontWeight,
            fontSize: globalTheme.typography['Components']['Tooltip'].fontSize,
            letterSpacing:
              globalTheme.typography['Components']['Tooltip'].letterSpacing,
            lineHeight:
              globalTheme.typography['Components']['Tooltip'].lineHeight,
            textDecoration:
              globalTheme.typography['Components']['Tooltip'].textDecoration,
            textTransform:
              globalTheme.typography['Components']['Tooltip'].textTransform,
          },
          arrow: {
            color: `rgba(97, 97, 97, 0.9)`,
          },
        },
      },
    },
  },
  globalTheme
);

export default questTheme;
