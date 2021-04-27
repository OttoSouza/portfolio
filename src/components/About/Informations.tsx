import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Text, Flex, Heading, Icon, IconButton, Box } from "@chakra-ui/react";
import { ButtonInformation } from "./ButtonInformation";
import Link from "next/link";
export default function Informations() {
  const handleScroll = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.location.href = "#project";
  };
  return (
    <>
      <Flex
        as="main"
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        flexDir="column"
        my="auto"
        w="100%"
      >
        <Flex
          flexDir="column"
          gridGap={4}
          alignItems={[
            "center",
            "center",
            "center",
            "flex-start",
            "flex-start",
          ]}
          maxW="400px"
          p={["4", "0"]}
        >
          <Heading>Quem é Otto?</Heading>
          <Text as="p" color="red.50" textAlign="justify">
            Sou um analista de sistemas e aluno da RocketSeat apaixonado por
            tecnologia. Desenvolvi diversas aplicações com algumas tecnologias
            mais utiliazadas no mercado, como: NextJs, TypeScript, ChakraUI. Além
            disso estou aprendendo a desenvolver as soft skills.
          </Text>

          <Flex gridGap={4}>
            <ButtonInformation name="CV" />
            <ButtonInformation name="Github" />
            <ButtonInformation name="Linkedin" />
          </Flex>
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
        <Link href="#project">
          <IconButton
            aria-label="scroll"
            icon={<Icon as={MdKeyboardArrowDown} fontSize="20" />}
            colorScheme="transparent"
            // onClick={() => window.location.href = "#project"}
          />
        </Link>
      </Flex>
    </>
  );
}
