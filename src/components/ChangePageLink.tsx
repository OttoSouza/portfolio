import { Flex, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
export function ChangePageLink() {
  const { push, asPath,  } = useRouter();

  const changePage = asPath === "/" ? "ability" : "/"

  return (
    <Flex
      width="100%"
      px="4"
      py="4"
      alignItems="center"
      justifyContent="center"
      mb="5"
    >
      <Flex maxW={1280} alignItems="center" justifyContent="center" w="100%">
        <Link href={changePage}>
          <IconButton
            aria-label=" scroll"
            icon={
              <Icon
                as={asPath === "/" ? MdKeyboardArrowDown : MdKeyboardArrowUp}
                fontSize="30"
              />
            }
            colorScheme="transparent"
            color={asPath === "/" ? "white" : "black"}
          />
        </Link>
      </Flex>
    </Flex>
  );
}
