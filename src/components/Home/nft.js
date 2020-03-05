import React from "react";
import {Anchor, Box, Image, Text} from "grommet";
import nftLogo from '../../images/nft.svg'
import CardBox from './card-box';

const Nft = ({ anchorStyles }) => (
  <CardBox gridArea={'nft'}>
    <Box height={'62px'} justify={'center'}>
      <Anchor href="/tinlake/"><Image src={nftLogo}/></Anchor>
    </Box>
    <Anchor style={anchorStyles} href={'/nfts/'}>
      NFT
    </Anchor>
    <Text textAlign="center">User-mintable Non-Fungible Tokens (NFTs) enable privacy-preserving tokenization of assets.</Text>
  </CardBox>
)

export default Nft;
