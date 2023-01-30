import { HStack } from "@chakra-ui/react";
import React from "react";
import { ChatContainer } from "../components/ChatContainer";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <HStack w="100%">
      <Sidebar maxW="20%" />
      <ChatContainer maxW="80%" />
    </HStack>
  );
};
