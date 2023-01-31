import { Avatar, Heading, HStack } from "@chakra-ui/react";
import { useSynchronousContext } from "../context/Context";

export const ContactNav = () => {
  const { userSelected } = useSynchronousContext();

  return (
    <HStack>
      <Avatar size="sm" />
      <Heading fontSize="16px">{userSelected?.username}</Heading>
    </HStack>
  );
};
