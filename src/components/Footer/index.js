import {Box, Button, Grid, Heading, Paragraph} from "grommet";
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
  let gridStyle = {
    gridGap: '32px'
  }
  let areas;
  let columns = [
    'minmax(160px,220px)',
    '1fr',
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
        {name: "copyright", start: [0, 0], end: [0, 0]},
        {name: "social", start: [2, 0], end: [2, 0]},
        {name: "support", start: [3, 0], end: [3, 0]},

      ];
      break;


  }

  return (
    <>
      <Grid style={gridStyle} columns={columns} rows={rows} areas={areas}>
        <Box gridArea="copyright">
          <Paragraph>
            Centrifuge Inc. © Copyright {new Date().getFullYear()}
          </Paragraph>
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
      <Box fill={true}>

      </Box>

    </>
  )
}
