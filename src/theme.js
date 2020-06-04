import {axisThemeConfig} from "@centrifuge/axis-theme";
import {deepMerge} from "grommet/utils/object";
import {css} from "styled-components";

export const theme = deepMerge(axisThemeConfig, {
  maxContentWidth: '1920px',
  global: {
    breakpoints: {
      small: {
        value: 871,
      }
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
  heading: {
    extend: props => css`
           max-width: 100%; 
           ${props.level === 1 && `
               font-size: 40px;
           `}
           ${props.level === 2 && `
               border-bottom: 1px solid ${axisThemeConfig.global.colors.border};
               font-size:24px;
               padding-bottom: 32px;
           `}
           ${props.level === 3 && `
               font-size:20px;
           `}
        `
  }
});

