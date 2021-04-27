import { Flex } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Skills } from "./Skills";

export function Project() {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#F9F9F9" }}
        id="contato"
      />
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Flex
          width="100%"
          height="100vh"
          maxWidth={1280}
          flexDir="column"
          color="white"
        >
          <Skills />
        </Flex>
      </ParallaxLayer>
    </>
  );
}
