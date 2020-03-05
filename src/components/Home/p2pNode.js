import React from "react";
import {Anchor, Image, Text} from "grommet";
import p2pNodeLogo from '../../images/p2p_node.svg'
import CardBox from './card-box';

const P2PNode = ({ anchorStyles }) => (
  <CardBox
    gridArea={'p2pNode'}
  >
    <Anchor href="/p2p-node/"><Image style={{maxWidth: '480px'}} src={p2pNodeLogo}/></Anchor>
    <Anchor href="/p2p-node/" style={anchorStyles}>Centrifuge P2P Node</Anchor>
    <Text textAlign="center">Exchange documents privately via our P2P network and interact with tokens on chain.</Text>
  </CardBox>
)

export default P2PNode;
