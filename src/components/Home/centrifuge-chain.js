import React from "react";
import {Anchor, Box, Image, Text} from "grommet";
import centrifugeChainLogo from '../../images/centrifuge_chain.svg';
import CardBox from './card-box';

const CentrifugeChain = ({ anchorStyles }) => (
  <CardBox gridArea={'centrifugeChain'}>
    <Box height={'62px'} justify={'center'}>
      <Anchor href="/chain/"><Image src={centrifugeChainLogo}/></Anchor>
    </Box>
    <Anchor href="/chain/" style={anchorStyles}>Centrifuge Chain</Anchor>
    <Text textAlign="center">Centrifuge Chain is built on Parity Substrate with a bridge to Ethereum to optimize transactions for our use cases.</Text>
  </CardBox>
)

export default CentrifugeChain;
