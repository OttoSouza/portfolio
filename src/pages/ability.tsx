import { Button, Flex, Grid, VStack, HStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { AbilityButton } from "../components/Ability/AbilityButton";
import { Card } from "../components/Ability/Card";
import { Header } from "../components/Ability/Header";

export default function Ability() {
  return (
    <>
      <Head>
        <title>Otto | PortFolio</title>
      </Head>
      <VStack  height='100vh'
      
      bg="whitesmoke"
      >
        <Header />

        <Card />
      </VStack>
    </>
  );
}
