import React, { useState } from "react";
import { Flex, Grid } from "@chakra-ui/react";
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

  return (
    <Flex
      bg="whitesmoke"
      w="100%"
      align="center"
      justifyContent="center"
      pt="10"
    >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        alignItems="center"
        justifyContent="center"
        gridGap={6}
      mb={["5", "5", "5", 0]}
        
      >
        {informations.map((info) => (
          <CardItem key={info.id} projects={info} />
        ))}
      </Grid>
    </Flex>
  );
}
