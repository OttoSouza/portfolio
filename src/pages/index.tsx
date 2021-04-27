import React from "react";

import { Parallax } from "@react-spring/parallax";
import About from "../components/About";
import { Project } from "../components/Project/index";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Otto | PortFolio</title>
      </Head>
      <Parallax
        pages={2}
        style={{ width: "100vw", height: "100vh", background: "#1A202C" }}
      >
        <About />
        <Project />
      </Parallax>
    </>
  );
}
