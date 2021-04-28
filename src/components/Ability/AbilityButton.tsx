import {
  Box,
  Button,
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

export function AbilityButton({ name }) {
  let aboutTecnology: string;
  let iconProps: ElementType;
  let value: number;
  let color: string;
  let bg: string;
  switch (name) {
    case "TypeScript":
      iconProps = SiTypescript;

      break;
    case "NextJs":
      iconProps = SiNextDotJs;

      break;
    case "Html":
      iconProps = SiHtml5;

      break;
    case "Css":
      iconProps = SiCss3;

      break;
    case "JavaScript":
      iconProps = SiJavascript;

      break;
    case "Chakra":
      iconProps = IoFlash;

      break;
    default:
      break;
  }

  return <Icon as={iconProps} fontSize="3xl" />;
}
