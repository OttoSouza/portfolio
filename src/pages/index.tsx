import React from "react";

import Head from "next/head";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Home/Header";
import About from "../components/Home/About";
import { ChangePageLink } from "../components/ChangePageLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Otto | PortFolio</title>
      </Head>
      <Flex height="100vh" width="100vw" bg="black" flexDir="column" >
        <Header />
        <About />
        <ChangePageLink />
      </Flex>
    </>
  );
}
