import { Flex } from "@chakra-ui/react";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

import { Logo } from "./Logo";
import Informations from './Informations';

export default function About() {
  return (
    <ParallaxLayer
      offset={0}
      speed={2.5}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#140D0C",
      }}
    >
      <Flex
        width="100%"
        height="100vh"
        maxWidth={1280}
        flexDir="column"
        alignItems="flex-start"
        color="white"
        p="4"
      >
        <Logo />
        <Informations/>
        
      </Flex>
    </ParallaxLayer>
  );
}
