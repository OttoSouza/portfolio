import { Flex, Grid, Heading } from "@chakra-ui/react";
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
      mb="5"
    >
      <Heading color="black">Habilidades e Projetos</Heading>
      <Grid
        gridGap={20}
        templateColumns={[
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
          "repeat(6, 1fr)",
        ]}
      >
        <SkillButton name="TypeScript" />
        <SkillButton name="NextJs" />
        <SkillButton name="Html" />
        <SkillButton name="Css" />
        <SkillButton name="JavaScript" />
        <SkillButton name="Chakra" />
      </Grid>
    </Flex>
  );
}
