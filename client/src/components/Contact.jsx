import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Contact = ({ username, profileImg, lastMessage, id }) => {
  return (
    <HStack
      alignItems="center"
      w="100%"
      borderBottom="0.1px solid #a1a1a1"
      py="5px"
    >
      <Avatar />
      <VStack>
        <Heading fontSize="20px">{username}</Heading>
        <Text>{lastMessage}</Text>
      </VStack>
    </HStack>
  );
};
