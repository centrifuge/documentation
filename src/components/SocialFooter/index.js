import React from "react";
import { Anchor, Box, Image } from "grommet";

import discord_logo from "../../images/social/discord.svg";
import discourse_logo from "../../images/social/discourse.svg";
import telegram_logo from "../../images/social/telegram.svg";
import twitter_logo from "../../images/social/twitter.svg";

const SocialButton = ({ icon, href, external }) => {
  let extraProps = {};
  if (external) extraProps.target = "_blank";

  return (
    <Anchor href={href} {...extraProps}>
      <Image src={icon} height="72px" />
    </Anchor>
  );
};

SocialButton.defaultProps = {
  external: false,
};

const SocialFooter = () => (
  <Box
    background="linear-gradient(180deg, #2762FF 0%, rgba(39, 98, 255, 0) 100%)"
    height="260px"
    pad={{
      vertical: "94px",
      horizontal: "medium",
    }}
  >
    <Box direction="row" justify="around">
      <SocialButton external icon={discourse_logo} />
      <SocialButton icon={discord_logo} />
      <SocialButton icon={telegram_logo} />
      <SocialButton icon={twitter_logo} />
    </Box>
  </Box>
);

export default SocialFooter;
