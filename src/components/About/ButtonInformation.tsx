import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonInformationProps {
  name: string;
}

export function ButtonInformation({ name }: ButtonInformationProps) {

  let link: string;
  let hover: string;
  let bg: string;
  switch (name) {
    case "CV":
      link =
        "https://drive.google.com/file/d/1mkEhr64nWWdx70Y4oGbcgqOHzFOB9dAM/view?usp=sharing";
      hover = "red.900";
      bg = "red.600";
      break;
    case "Github":
      link =
        "https://github.com/OttoSouza";
      hover = "gray.700";
      bg = "gray.500";
      break;
    case "Linkedin":
      link =
        "https://www.linkedin.com/in/otto-neto/";
      hover = "blue";
      bg = "blue.600";
      break;
    default:
      break;
  }

  return (
    <Button
      as="a"
      href={link}
      bg={bg}
      _hover={{
        bg: hover,
      }}
    >
      {name}
    </Button>
  );
}
