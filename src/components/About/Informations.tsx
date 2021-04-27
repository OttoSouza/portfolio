import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Text, Flex, Heading, Icon } from "@chakra-ui/react";
import { ButtonInformation } from "./ButtonInformation";

export default function Informations() {
  return (
    <>
      <Flex
        as="main"
        alignItems="flex-start"
        flexDir="column"
        my="auto"
        gridGap={4}
        w="40%"
      >
        <Heading>Quem é Otto?</Heading>
        <Text as="p" color="red.50" textAlign="justify">
          Sou um analista de sistemas e aluno da RocketSeat apaixonado por
          tecnologia. Desenvolvi diversas aplicações com algumas tecnologias
          mais em alta do mercado, como: NextJs, TypeScript, ChakraUI. Alem
          disso estou tentando desenvolver as soft skills.
        </Text>

        <Flex gridGap={4}>
          <ButtonInformation name="CV" />
          <ButtonInformation name="Github" />
          <ButtonInformation name="Linkedin" />
        </Flex>
      </Flex>

      <Flex
        as="footer"
        mx="auto"
        mb="10"
        flexDir="column"
        alignItems="center"
        gridGap={2}
      >
        <Icon as={MdKeyboardArrowDown} fontSize="20" />
      </Flex>
    </>
  );
}
