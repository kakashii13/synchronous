import { Input, List, VStack } from "@chakra-ui/react";
import { useSynchronousContext } from "../context/Context";
import { Contact } from "./Contact";

export const Sidebar = () => {
  const { userContacts } = useSynchronousContext();
  return (
    <VStack alignItems="start">
      <Input maxW="90%" placeholder="Search or start new chat" />
      <List>
        {userContacts.map((user) => (
          <Contact user={user} key={user.id} />
        ))}
      </List>
    </VStack>
  );
};
