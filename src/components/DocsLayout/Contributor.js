import React, { useState, useRef } from "react";
import { Box, Text, Image, Drop } from "grommet";

const Contributor = ({ name, avatar }) => {
  const [showDrop, setShowDrop] = useState(false);
  const targetRef = useRef();

  return (
    <>
      <Box
        ref={targetRef}
        onMouseOver={() => {
          setShowDrop(true);
        }}
        onMouseOut={() => {
          setShowDrop(false);
        }}
      >
        <Image src={avatar} height="24px" />
      </Box>
      {showDrop && (
        <Drop
          plain
          align={{ top: "bottom", left: "left" }}
          target={targetRef.current}
        >
          <Box margin="xxsmall" pad="small" elevation="small" round="small">
            <Text>{name}</Text>
          </Box>
        </Drop>
      )}
    </>
  );
};

export default Contributor;
