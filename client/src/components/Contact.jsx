import { Avatar, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useSynchronousContext } from "../context/Context";

export const Contact = ({ user }) => {
  const { selectUser } = useSynchronousContext();
  const handleSelect = () => {
    selectUser(user.id);
  };
  return (
    <HStack
      alignItems="center"
      w="100%"
      borderBottom="0.1px solid"
      borderColor="whiteAlpha.100"
      p="10px"
      spacing="3"
      cursor="pointer"
      _hover={{
        bg: "whiteAlpha.100",
      }}
      onClick={handleSelect}
    >
      <Avatar size="md" />
      <VStack maxW="300px" w="100%" justifyContent="start">
        <Heading fontSize="17px" w="100%">
          {user.username}
        </Heading>
        {/* <Text
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          w="100%"
          pr="20px"
          color="whiteAlpha.600"
          fontSize="14px"
        >
          {lastMessage}
        </Text> */}
      </VStack>
    </HStack>
  );
};
