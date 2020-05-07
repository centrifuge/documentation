import React from "react";
import { Box, Grid, Image, Text, Anchor, Heading } from "grommet";
import centrifugeChainLogo from '../../images/centrifuge_chain.svg';
import nftLogo from '../../images/nft.svg'
import p2pNodeLogo from '../../images/p2p_node.svg'
import {UnstyledAnchor} from "../Links";
import tinlakeLogo from "../../images/tinlake_logo_dev.svg";

const anchorStyles = {
  fontWeight: '500',
  fontSize: '16px'
}

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

const Products = ({ areas, columns, rows }) => {
  return (
    <Box fill={true} pad={{bottom: 'large'}}>
      <Grid areas={areas} columns={columns} rows={rows} justifyContent={'between'} gap={'large'}>
        <CardBox gridArea={'centrifugeChain'}>
          <Box height={'62px'} justify={'center'}>
            <Anchor href="/chain/"><Image src={centrifugeChainLogo}/></Anchor>
          </Box>
          <Anchor href="/chain/" style={anchorStyles}>Centrifuge Chain</Anchor>
          <Text textAlign="center">Centrifuge Chain is built on Parity Substrate with a bridge to Ethereum to optimize transactions for our use cases.</Text>
        </CardBox>
        <CardBox gridArea={'tinlake'}>
          <Box height={'62px'} justify={'center'}>
            <Anchor href="/tinlake/"><Image src={tinlakeLogo}/></Anchor>
          </Box>
          <Anchor href="/tinlake/" style={anchorStyles}>Tinlake Documentation</Anchor>
          <Text textAlign="center">Tinlake is a set of smart contracts that enables on-chain borrowing against collateralized non-fungible assets.</Text>
        </CardBox>
        <CardBox
          gridArea={'p2pNode'}
        >
          <Anchor href="/cent-node/"><Image style={{maxWidth: '480px'}} src={p2pNodeLogo}/></Anchor>
          <Anchor href="/cent-node/" style={anchorStyles}>Centrifuge P2P Node</Anchor>
          <Text textAlign="center">Exchange documents privately via our P2P network and interact with tokens on chain.</Text>
        </CardBox>
        <CardBox gridArea={'nft'}>
          <Box height={'62px'} justify={'center'}>
            <Anchor href="/tinlake/"><Image src={nftLogo}/></Anchor>
          </Box>
          <Anchor style={anchorStyles} href={'/nfts/'}>
            NFT
          </Anchor>
          <Text textAlign="center">User-mintable Non-Fungible Tokens (NFTs) enable privacy-preserving tokenization of assets.</Text>
        </CardBox>
        <CardBox gridArea={'protocolPaper'}>
          <Heading level={1} style={{margin: '0px 0px 6px 0px'}}>
            <UnstyledAnchor href={'https://staticw.centrifuge.io/assets/centrifuge_os_protocol_paper.pdf'} target={'_blank'}>
              Protocol Paper
            </UnstyledAnchor>
          </Heading>
          <Anchor
            style={anchorStyles}
            href={'https://staticw.centrifuge.io/assets/centrifuge_os_protocol_paper.pdf'}
            target={'_blank'}>
            Centrifuge Protocol Paper
          </Anchor>
          <Text textAlign="center">A detailed specification of the Centrifuge P2P Protocol.</Text>
        </CardBox>
      </Grid>
    </Box>
  );
}

export default Products;
