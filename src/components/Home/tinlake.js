import React from "react";
import {Anchor, Box, Image, Text} from "grommet";
import tinlakeLogo from "../../images/tinlake_logo_dev.svg";
import CardBox from './card-box';

const Tinlake = ({ anchorStyles }) => (
  <CardBox gridArea={'tinlake'}>
    <Box height={'62px'} justify={'center'}>
      <Anchor href="/tinlake/"><Image src={tinlakeLogo}/></Anchor>
    </Box>
    <Anchor href="/tinlake/" style={anchorStyles}>Tinlake Documentation</Anchor>
    <Text textAlign="center">Tinlake is a set of smart contracts that enables on-chain borrowing against collateralized non-fungible assets.</Text>
  </CardBox>
)

export default Tinlake;
