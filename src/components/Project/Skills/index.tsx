import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { SkillButton } from "./SkillButton";

export function Skills() {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gridGap={20}
      mt="5"
    >
      <Heading color="black">Habilidades e Projetos</Heading>
      <Flex gridGap={32}>
        <SkillButton name="TypeScript" />
        <SkillButton name="NextJs" />
        <SkillButton name="Html" />
        <SkillButton name="Css" />
        <SkillButton name="JavaScript" />
        <SkillButton name="Chakra" />
      </Flex>
    </Flex>
  );
}
