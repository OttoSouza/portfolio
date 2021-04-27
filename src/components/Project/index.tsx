import { Flex } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Card } from "./Card";
import { Skills } from "./Skills";

export function Project() {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#F9F9F9"}}
        id="project"
      />
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          width="100%"
          height="100%"
          maxWidth={1280}
          flexDir="column"
          color="white"
          px="10"
          pb="4"
        >
          <Skills />
          <Card />
        </Flex>
      </ParallaxLayer>
    </>
  );
}
