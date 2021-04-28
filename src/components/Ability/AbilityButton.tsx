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
  Tooltip,
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
  let iconProps: ElementType;
  let color: string;

  switch (name) {
    case "TypeScript":
      iconProps = SiTypescript;
      color = "blue";

      break;
    case "NextJs":
      iconProps = SiNextDotJs;
      color = "black";

      break;
    case "Html":
      iconProps = SiHtml5;
      color = "orange";
      break;

    case "Css":
      iconProps = SiCss3;
      color = "blue.500";
      break;
    case "JavaScript":
      iconProps = SiJavascript;
      color = "yellow.300";
      break;
    case "Chakra":
      iconProps = IoFlash;
      color = "cyan.300";
      break;
    default:
      break;
  }

  return (
    <Tooltip hasArrow label={name} bg="blackAlpha.600">
      <Button colorScheme="none">
        <Icon as={iconProps} fontSize="3xl" color={color} />
      </Button>
    </Tooltip>
  );
}
