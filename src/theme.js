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

