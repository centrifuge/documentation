import React from "react";
import {AxisTheme} from "@centrifuge/axis-theme";
import styled from 'styled-components'
import {theme} from "../theme";
import {Box, Grid, Image, ResponsiveContext, Text, Button} from "grommet";
import helloWordImage from "../images/hello_world-42.svg";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Products from '../components/Home/products';


const HomePage = () => (
  <AxisTheme theme={theme}>
    <ResponsiveContext.Consumer>
      {size => {
        let areas;
        let columns = [
          '1fr',
          '348px',
          '348px',
          '348px',
          '1fr'
        ]
        let rows = ['auto', 'auto'];

        switch (size) {
          case "large":
            areas = [
              {name: "centrifugeChain", start: [1, 0], end: [1, 0]},
              {name: "tinlake", start: [2, 0], end: [2, 0]},
              {name: "p2pNode", start: [3, 0], end: [3, 0]},
              {name: "nft", start: [1, 1], end: [1, 1]},
              {name: "protocolPaper", start: [2, 1], end: [2, 1]},
            ];
            break;
          case "medium":
            rows = ['auto', 'auto', 'auto'];
            areas = [
              {name: "centrifugeChain", start: [1, 0], end: [1, 0]},
              {name: "tinlake", start: [2, 0], end: [2, 0]},
              {name: "p2pNode", start: [1, 1], end: [1, 1]},
              {name: "nft", start: [2, 1], end: [2, 1]},
              {name: "protocolPaper", start: [1, 2], end: [1, 2]},
            ];
            break;
          default:
            columns = [
              '1fr', '348px', '1fr'
            ];
            rows = ['auto', 'auto', 'auto', 'auto', 'auto'];

            areas = [
              {name: "centrifugeChain", start: [1, 0], end: [1, 0]},
              {name: "tinlake", start: [1, 1], end: [1, 1]},
              {name: "p2pNode", start: [1, 2], end: [1, 2]},
              {name: "nft", start: [1, 3], end: [1, 3]},
              {name: "protocolPaper", start: [1, 4], end: [1, 4]},

            ];
            break;
        }

        return <Layout size={size}>
          <SEO title="Centrifuge documentation"/>
          <Box
            fill
            as="main"
            align="center"
            pad={'xlarge'}
          >
            <Image style={{maxWidth: '440px'}} src={helloWordImage}/>
          </Box>

          <Box fill={true} pad={{bottom: 'large'}}>
            <Products areas={areas} columns={columns} rows={rows} />
          </Box>
        </Layout>
      }}
    </ResponsiveContext.Consumer>
  </AxisTheme>
);

export default HomePage;
