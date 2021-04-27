import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { TiArrowRightOutline } from "react-icons/ti";

interface CardItemProps {
  projects: {
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
  };
}

export function CardItem({ projects }: CardItemProps) {
  return (
    <Box
      w={300}
      height={500}
      d="flex"
      flexDir="column"
      gridGap={6}
      bg="red.50"
      padding="4"
      borderRadius="xl"
      border="2px"
      borderColor="gray.200"
      boxShadow="lg"
      justifyContent="space-between"
    >
      <Heading color="black">{projects.name}</Heading>
      <Text as="p" color="black" textAlign="justify">
        {projects.description}
      </Text>
      <Heading color="black" fontSize="xl">
        Tecnologias
      </Heading>

      <List spacing={3} color="black">
        <ListItem>
          <ListIcon as={TiArrowRightOutline} color="green.500" />
          {projects.tecnologies.first}
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightOutline} color="green.500" />
          {projects.tecnologies.second}
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightOutline} color="green.500" />
          {projects.tecnologies.third}
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightOutline} color="green.500" />
          {projects.tecnologies.fourth}
        </ListItem>
      </List>
      <Button as="a" bg="green.400" _hover={{ bg: "green.500" }} href={projects.url}>
        Mais detalhes
      </Button>
    </Box>
  );
}
