import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { InfoButton } from "./InfoButton";

export default function About() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir={["column"]}
      maxW={1280}
      width="100%"
      my="auto"
      mx={["auto", "0"]}
      px={["4", "4", "4", "5", "0"]}
    >
      <Flex
        alignItems="flex-start"
        flexDir="column"
        justifyContent="flex-start"
      >
        <Heading color="white">Quem é Otto?</Heading>
        <Text color="white" textAlign="justify" my="10" maxW="500px" w="100%">
          Sou um analista de sistemas e aluno da RocketSeat apaixonado por
          tecnologia. Desenvolvi diversas aplicações com algumas tecnologias
          mais utiliazadas no mercado, como: NextJs, TypeScript, ChakraUI. Além
          disso estou aprendendo a desenvolver as soft skills.
        </Text>
        <Flex alignItems="center" flexWrap="wrap" flexBasis="1">
          <InfoButton name="CV" />
          <Box mx="4">
            <InfoButton name="Github" />
          </Box>
          <InfoButton name="Linkedin" />
        </Flex>
      </Flex>
    </Flex>
  );
}
