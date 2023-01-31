import { Input, List, VStack } from "@chakra-ui/react";
import { useSynchronousContext } from "../context/Context";
import { Contact } from "./Contact";

export const Sidebar = () => {
  const { users } = useSynchronousContext();
  return (
    <VStack alignItems="start">
      <Input maxW="90%" placeholder="Search or start new chat" />
      <List>
        {users.map(({ username, profileImg, lastMessage, id }) => (
          <Contact
            username={username}
            profileImg={profileImg}
            lastMessage={lastMessage}
            id={id}
            key={id}
          />
        ))}
      </List>
    </VStack>
  );
};
