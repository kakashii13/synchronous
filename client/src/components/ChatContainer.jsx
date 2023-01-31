import { Stack } from "@chakra-ui/react";
import { useSynchronousContext } from "../context/Context";
import { ContactNav } from "./ContactNav";

export const ChatContainer = () => {
  const { userSelected } = useSynchronousContext();
  return (
    <Stack w="100%" h="100%" bg="whiteAlpha.50" mx="0 !important">
      {userSelected ? <ContactNav /> : ""}
    </Stack>
  );
};
