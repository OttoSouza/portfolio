import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
const MotionBox = motion(Box);
export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      px={["4", "4", "4", "5", "0"]}
      py="4"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="100%"
        maxW={1280}
        alignItems="center"
        justifyContent="center"
      >
        <MotionBox
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
        >
          <Image src="./logo.svg" />
        </MotionBox>
      </Flex>
    </Flex>
  );
}
