import React, { useMemo } from "react";
import { Box, Text } from "grommet";

import Contributor from "./Contributor";

import avatar1 from "../../images/avatars/1.svg";
import avatar2 from "../../images/avatars/2.svg";
import avatar3 from "../../images/avatars/3.svg";
import avatar4 from "../../images/avatars/4.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const Contributors = ({ contributors }) => {
  const parseContributor = (contributor) => {
    const found = contributor.match(/<([\s\S]+):[\s]*(\S+)>/);

    return {
      name: found[1],
      email: found[2],
    };
  };

  const contributorsList = useMemo(
    () =>
      contributors
        .split(/,[\s]*/)
        .map((contributor) => parseContributor(contributor)),
    [contributors]
  );

  return (
    !!contributors && (
      <Box direction="row" gap="small">
        <Text style={{ fontFamily: "Space Mono" }}>Contributors</Text>
        {contributorsList.map((contributor, i) => (
          <Contributor {...contributor} avatar={avatars[i % 4]} />
        ))}
      </Box>
    )
  );
};

export default Contributors;
