import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ChangePageLink } from "../ChangePageLink";
import { AbilityButton } from "./AbilityButton";

export function Header() {
  return (
    <Flex
      width="100%"
      px="4"
      py="4"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW={1280}
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        
      >
        <ChangePageLink />
        <Heading>Habilidades & Projetos</Heading>

        <Flex
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gridGap={20}
          mt="20"
        >
          <AbilityButton name="NextJs" />
          <AbilityButton name="TypeScript" />
          <AbilityButton name="Html" />
          <AbilityButton name="Css" />
          <AbilityButton name="JavaScript" />
          <AbilityButton name="Chakra" />
        </Flex>
      </Flex>
    </Flex>
  );
}
