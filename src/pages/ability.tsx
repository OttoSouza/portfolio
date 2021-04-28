import { Button, Flex, Grid } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { AbilityButton } from "../components/Ability/AbilityButton";
import { Header } from "../components/Ability/Header";

export default function Ability() {
  return (
    <>
      <Head>
        <title>Otto | PortFolio</title>
      </Head>
      <Flex height="100vh" width="100vw" bg="whitesmoke" flexDir="column">
        <Header />

       
      </Flex>
    </>
  );
}
