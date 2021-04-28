import { Button } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
interface InfoButtonProps {
  name: string;
}

export function InfoButton({ name }: InfoButtonProps) {
  let link: string;
  let bg: string;
  switch (name) {
    case "CV":
      link =
        "https://drive.google.com/file/d/1JpjiiovgTKO-hwCNft6tQOTocmz0Yn0B/view?usp=sharing";
      bg = "red";
      break;
    case "Github":
      link = "https://github.com/OttoSouza";
      bg = "gray";
      break;
    case "Linkedin":
      link = "https://www.linkedin.com/in/otto-neto/";
      bg = "linkedin";
      break;
    default:
      break;
  }

  return (
    <Link href={link}>
      <Button  colorScheme={bg}>
        {name}
      </Button>
    </Link>
  );
}
