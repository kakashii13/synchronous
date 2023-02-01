import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSynchronousContext } from "../context/Context";
import { ContactNav } from "./ContactNav";

export const ChatContainer = () => {
  const { userSelected, chatSelected, user } = useSynchronousContext();
  const [messages, setMessages] = useState([]);

  return (
    <Stack w="100%" h="100%" bg="whiteAlpha.50" mx="0 !important">
      {userSelected ? <ContactNav /> : ""}
      <VStack w="100%">
        {chatSelected
          ?.reduce((acc, el) => el.messages, [])
          .map(({ text, sender, id }) => (
            <HStack
              w="100%"
              px="10px"
              key={id}
              justifyContent={sender === user?.id ? "start" : "end"}
            >
              <Text bg={sender === user?.id ? "blue.500" : "green.500"}>
                {text}
              </Text>
            </HStack>
          ))}
      </VStack>
    </Stack>
  );
};
