import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonInformationProps {
  name: string;
}

export function ButtonInformation({ name }: ButtonInformationProps) {
  switch (name) {
    case "CV":
      return (
        <Button
          as="a"
          href="https://drive.google.com/file/d/1mkEhr64nWWdx70Y4oGbcgqOHzFOB9dAM/view?usp=sharing"
          bg="red.600"
          _hover={{
            bg: "red.900",
          }}
        >
          {name}
        </Button>
      );
      break;
    case "Github":
      return (
        <Button
          as="a"
          href="https://github.com/OttoSouza"
          bg="gray.400"
          _hover={{
            bg: "gray.800",
          }}
        >
          {name}
        </Button>
      );
      break;
    case "Linkedin":
      return (
        <Button
          as="a"
          href="https://www.linkedin.com/in/otto-neto/"
          bg="blue.400"
          _hover={{
            bg: "blue.900",
          }}
        >
          {name}
        </Button>
      );
      break;

    default:
      break;
  }
}
