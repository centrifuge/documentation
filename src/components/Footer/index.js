import {Box, Button, Grid, Text} from "grommet";
import React from "react";
import styled from 'styled-components'


export const JoinUs = () => {
  return (
    <>
      <Grid
        areas={[
          { name: "main", start: [1, 0], end: [1, 0] },
          { name: "nav", start: [0, 0], end: [0, 0] }
        ]}
        columns={["3/5", "2/5"]}
        rows={["flex"]}
        gap="medium"
        justifyContent="center"
      >
        <Box
          gridArea="nav"
          alignSelf="center"
        >
          <Text
            color={'white'}
            margin={ {top: '0', bottom: '0'} }
          >
            Come join our team of experienced, smart, and nice people building the future of B2B software!?
          </Text>
        </Box>
        <Box gridArea="main">
          <Button
            white={'true'}
            label={'Join the Team'}
            href={'https://centrifuge.io/slack'}
            target={'_blank'}
          />
        </Box>
      </Grid>
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

  return (
    <>
      <Grid style={gridStyle} columns={{
        count: 4,
        size: "auto"
      }}
      gap="medium">
        <Box textAlign={'right'}>
          <Text size="xsmall">
            Berlin<br />
            Full Node, Skalitzer Strasse 85-86<br />
            10997 Berlin
          </Text>
          <br />
          <Text size="xsmall">Centrifuge Inc. © Copyright 2018</Text>
        </Box>
        <Box textAlign={'right'}>
          <Text size="xsmall">
            San-Francisco<br />
            548 Market Street #67433<br />
            San Francisco, CA 94104<br />
          </Text>
        </Box>
        <Box textAlign={'right'}>
          <Text size="xsmall">
            <Link href="https://twitter.com/centrifuge">
              Twitter
            </Link>
          </Text>
          <Text size="xsmall">
            <Link href="https://medium.com/centrifuge">
              Medium
            </Link>
          </Text>
          <Text size="xsmall">
            <Link href="https://github.com/centrifuge/">
              GitHub
            </Link>
          </Text>
          <Text size="xsmall">
            <Link href="https://centrifuge.io/slack">
              Slack
            </Link>
          </Text>
        </Box>
        <Box>
          <Text size="xsmall">
            <Link href="mailto:support@centrifuge.io">support@centrifuge.io</Link>
          </Text>
        </Box>
      </Grid>
      <Box fill={true}>

      </Box>

    </>
  )
}
