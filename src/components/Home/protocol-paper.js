import React from "react";
import {Anchor, Text, Heading} from "grommet";
import {UnstyledAnchor} from "../Links";
import CardBox from './card-box';

const ProtocolPaper = ({ anchorStyles }) => (
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
)

export default ProtocolPaper;
