import {axisThemeConfig} from "@centrifuge/axis-theme";
import {deepMerge} from "grommet/utils/object";
import {css} from "styled-components";

const ffStack = 'Inter, sans-serif'

export const theme = deepMerge(axisThemeConfig, {
  maxContentWidth: '1024px',
  global: {
    breakpoints: {
      small: {
        value: 871,
      }
    },
    font: {
      family: ffStack
    }
  },
  table: {
    header: {
      align: 'start',
      pad: { horizontal: 'small', vertical: 'xsmall' },
      border: 'bottom',
      verticalAlign: 'bottom',
      fill: 'false',
      extend: props => css`
       font-weight: bold;
      `,
    },
    body: {
      align: 'start',
      pad: {horizontal: 'small', vertical: 'xsmall'},
      border: null,
      extend: props => css`
        border-bottom: 1px solid ${axisThemeConfig.global.colors['light-4']} ;
      `,
    },
    footer: {
      align: 'start',
      pad: { horizontal: 'small', vertical: 'xsmall' },
      border: 'top',
      verticalAlign: 'top',
      fill: 'vertical',
      // extend: undefined,
    },
  },
  button: {
    extend: props => css`
      font-family: ${ffStack};
    `
  },
  heading: {
    extend: props => css`
           max-width: 100%;
           font-family: ${ffStack};

           ${props.level === 1 && `
               font-size: 24px;
           `}
           ${props.level === 2 && `
               border-bottom: 1px solid ${axisThemeConfig.global.colors.border};
               font-size: 18px;
               padding-bottom: 16px;
           `}
           ${props.level === 3 && `
               font-size: 14px;
           `}
        `
  }
});

