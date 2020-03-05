import React from 'react';
import {Box} from "grommet";

const CardBox = ({ gridArea, children }) => (
  <Box
    align="center"
    style={{width: '348px'}}
    gridArea={gridArea}
    gap={'medium'}
    pad={'medium'}
    round={'small'}
    elevation={'medium'}
  >
    {children}
  </Box>
)

export default CardBox;
