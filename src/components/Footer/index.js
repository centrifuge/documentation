import {Box, Button, Grid, Heading} from "grommet";
import React from "react";
import styled from 'styled-components'


export const JoinSlack = () => {
  return (
    <>
      <Heading textAlign={'center'} level={'5'} color={'white'}>Do you want to know more? Do you have questions to ask?</Heading>
      <Button white={'true'} label={'Join Slack'} href={'https://centrifuge.io/slack'} target={'_blank'}/>
    </>
  )
}


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
  let gridStyle = {gridGap: gap, width: '100%'};
  let areas;
  let columns = [
    '54px',
    '1fr',
    '142px'
  ]
  let rows = ['auto'];

  switch (size) {
    // Desktop
    case "large":
    case "medium":
    default:

      areas = [

        {name: "social", start: [0, 0], end: [0, 0]},
        {name: "support", start: [2, 0], end: [2, 0]},

      ];
      break;

  }

  return (
    <>
      <Grid style={gridStyle} columns={columns} rows={rows} areas={areas}>

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
      <Box fill={true}>

      </Box>

    </>
  )
}
