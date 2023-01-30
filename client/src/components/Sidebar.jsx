import { List, VStack } from "@chakra-ui/react";
import React from "react";
import { Contact } from "./Contact";

const INIT_CONTACT = [
  {
    username: "Jonh Doe",
    profileImg: "",
    lastMessage: "See u later",
    id: "456asfasd54123",
  },
  {
    username: "Alberto Fernandez",
    profileImg: "",
    lastMessage: "we have the highest inflation rate in the world",
    id: "456asfasFGd5412SD3",
  },
  {
    username: "Mirtha Legrand",
    profileImg: "",
    lastMessage: "I am 189 yo",
    id: "456asfas213Fd54123",
  },
];

export const Sidebar = () => {
  return (
    <VStack>
      {INIT_CONTACT.map(({ username, profileImg, lastMessage, id }) => (
        <Contact
          username={username}
          profileImg={profileImg}
          lastMessage={lastMessage}
          id={id}
          key={id}
        />
      ))}
    </VStack>
  );
};
