import {Box, Button, Grid, Heading} from "grommet";
import React from "react";
import styled from 'styled-components'

export const JoinUs = () => {
  return (
    <>
      <Heading textAlign={'center'} level={'5'} color={'white'}>Come join our team of experienced, smart, and nice
        people building the future of B2B software!</Heading>
      <Button white={'true'} label={'Join the Team'} href={'https://centrifuge.io/careers'} target={'_blank'}/>
    </>
  )
}


const Address = styled.address`
  font-style: normal;
  line-height: 24px;
  display: inline;
`;


export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
    color : #2762FF;
  }
  &:active {
    /* opacity: 0.9; */
    color : #2762FF;
  }
`;


export const FooterMenu = ({size, gap}) => {
  let gridStyle = {}
  let areas;
  let columns = [
    '118px',
    '166px',
    ...Array(8).fill("auto"),
    '54px',
    '142px'
  ]
  let rows = ['auto'];

  switch (size) {
    // Desktop
    case "large":
    case "medium":
    default:
      gridStyle = {gridGap: gap, width: '100%'};
      areas = [
        {name: "deAddress", start: [0, 0], end: [0, 0]},
        {name: "usAddress", start: [1, 0], end: [1, 0]},
        {name: "social", start: [10, 0], end: [10, 0]},
        {name: "support", start: [11, 0], end: [11, 0]},

      ];
      break;
    case "small":
      columns = ["1fr,1fr,1fr"];
      rows = ['auto', 'auto'];
      gridStyle = {gridGap: gap, width: '100%', justifyContent: 'space-between'};
      areas = [
        {name: "deAddress", start: [0, 0], end: [0, 0]},
        {name: "usAddress", start: [2, 0], end: [2, 0]},
        {name: "social", start: [0, 1], end: [0, 1]},
        {name: "support", start: [2, 1], end: [2, 1]},


      ];
      break;


  }

  return (
    <Grid style={gridStyle} columns={columns} rows={rows} areas={areas}>
      <Box gridArea="deAddress">
        <Address>
          Centrifuge GmbH
          <br/>
          Glogauer Straße 6
          <br/>
          10999 Berlin
        </Address>
      </Box>

      <Box gridArea="usAddress">
        <Address>
          San-Francisco
          <br/>
          548 Market Street #67433
          <br/>
          San Francisco, CA 94104
          <br/>
        </Address>
      </Box>

      <Box gridArea="social" textAlign={'right'}>

        <Link href="https://twitter.com/centrifuge">
          Twitter
        </Link>
        <Link href="https://medium.com/centrifuge">
          Medium
        </Link>
        <Link href="https://centrifuge.io/slack">
          Slack
        </Link>
        <Link href="https://github.com/centrifuge/">
          GitHub
        </Link>

      </Box>
      <Box gridArea="support">
        <Link href="mailto:support@centrifuge.io">support@centrifuge.io</Link>
      </Box>
    </Grid>
  )
}
