import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import {
  SiNextDotJs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlask,
} from "react-icons/si";

import { IoFlash } from "react-icons/io5";

interface SkillButton {
  name: string;
}

export function SkillButton({ name }) {
  let aboutTecnology: string;
  let iconProps: ElementType;
  let value: number;
  let color: string;
  let bg: string;
  switch (name) {
    case "TypeScript":
      aboutTecnology =
        "É uma super linguagem para o javaScript. Utilizo o básico para tipagem dentro do react nos componentes e variáveis.";
      iconProps = SiTypescript;
      value = 40;
      color = "blue";
      break;
    case "NextJs":
      aboutTecnology =
        "É um framework para react que está crescendo bastante no mercado trazendo duas grandes funcinalidades: SSR e SSG. A maioria dos meus projetos utiliza-o";
      iconProps = SiNextDotJs;
      value = 50;
      color = "black";
      break;
    case "Html":
      aboutTecnology =
        "É uma linguagem de marcação utilizada na construção de páginas na Web. Aprendi bastante nas aplicações react.";
      iconProps = SiHtml5;
      value = 80;
      color = "orange";
      break;
    case "Css":
      aboutTecnology =
        "É um mecanismo para adicionar estilo a um documento web. Preciso melhorar, mas aprendi bastante nas aplicações react.";
      iconProps = SiCss3;
      value = 60;
      color = "blue.500";

      break;
    case "JavaScript":
      aboutTecnology =
        " é uma linguagem de programação interpretada estruturada, de script. Utilizo junto com o typescript para facilitar a tipagem das variaveis. Preciso melhorar. ";
      iconProps = SiJavascript;
      value = 50;
      color = "yellow.300";
      break;
    case "Chakra":
      aboutTecnology =
        "Biblioteca com diversos componentes do html e css juntos. Utilizando bastante para criaçao de páginas mais rapidas.  ";
      iconProps = IoFlash;
      value = 60;
      color = "cyan.300";
      break;
    default:
      break;
  }

  return (
    <Box boxShadow="xl">
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="tecnologies"
            icon={<Icon as={iconProps} />}
            color={color}
            fontSize="4xl"
            border="none"
          />
        </PopoverTrigger>
        <PopoverContent bg="black">
          <PopoverArrow borderColor="black" bg="red.100" />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold">{name}</PopoverHeader>
          <PopoverBody height="100%">
            <Flex gridGap={4} alignItems="center" justifyContent="flex-start">
              <CircularProgress value={value} color="green.400">
                <CircularProgressLabel color="red.100">{`${String(
                  value
                )}%`}</CircularProgressLabel>
              </CircularProgress>
              <Text textAlign="justify">{aboutTecnology}</Text>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
