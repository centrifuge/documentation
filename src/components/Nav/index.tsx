import React, {useState} from "react";

import {Box, Image, Grid} from "grommet";
import {NavBar} from "@centrifuge/axis-nav-bar";
import {MenuItem} from "@centrifuge/axis-nav-bar";
import {Menu as MenuIcon, User as UserIcon, Close as CloseIcon} from "grommet-icons";
import Search from "../Search";
import styled from "styled-components";
import {navigate} from "gatsby";
const wordmark = require("../../images/centrifuge-developer-wordmark.svg")as string;


const Logo = styled(Image)`
  vertical-align: middle;
  height: 32px;
  margin: 16px 0;
`;

const Nav = (props) => {
    const [selectedRoute, setSelectedRoute] = useState("/");
    const menuItems: MenuItem[] = [
        {
            label: "Centrifuge P2P Node",
            route: "/cent-node/"
        },
        {
            label: "Tinlake",
            route: "/tinlake/"
        },
        {
            label: "NFTs",
            route: "/nfts/overview/introduction/"
        },
        {
            label: 'Centrifuge Chain',
            route: "/chain/"
        }, {
            label: 'Github',
            route: "https://github.com/centrifuge"
        }, {
            label: 'Slack',
            route: "https://centrifuge.io/slack/"
        }
    ];
    const onRouteClick = (route) => {
        setSelectedRoute(route);
        if (route.startsWith('/')) {
            navigate(route);
        } else {
            window.open(route);
        }
    };
    const theme = {
        navBar: {
            icons: {
                menu: MenuIcon,
                close: CloseIcon,
                user: UserIcon
            }
        }
    };

    return (
        <Grid fill
            areas={
                [
                    {
                        name: "logo",
                        start: [
                            0, 0
                        ],
                        end: [0, 0]
                    }, {
                        name: "navBar",
                        start: [
                            1, 0
                        ],
                        end: [1, 0]
                    }
                ]
            }
            columns={
                ["small", "flex"]
            }
            rows={
                ["flex"]}
                margin={{left:"large"}}>
            <Logo src={wordmark}
                alignSelf="start"
                gridArea="logo"
                onClick={
                    () => {
                        onRouteClick('/')
                    }
                
                }/>
            <Box direction="row" gridArea="navBar">

                <NavBar align="end"
                    menuItems={menuItems}
                    theme={theme}
                    width={"100%"}
                    selectedRoute={selectedRoute}
                    onRouteClick={
                        (item : MenuItem) => {
                            onRouteClick(item.route);
                        }
                }>
                    <Search/></NavBar>
            </Box>
        </Grid>
    );
};

export default Nav;
