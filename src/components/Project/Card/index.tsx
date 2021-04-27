import React, { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import { CardItem } from "./CardItem";
import informationsJson from "../../../../informations.json";
interface CardProps {
  id: number;
  name: string;
  description: string;
  tecnologies: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  url: string;
}
[];

export function Card() {
  const [informations, setInformations] = useState<CardProps[]>(
    informationsJson
  );

  console.log(informations);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} my="auto" px="4">
      {informations.map((info) => (
        <CardItem key={info.id} projects={info} />
      ))}
    </Grid>
  );
}
