import { Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSynchronousContext } from "../context/Context";

export const ContactChat = () => {
  const [userLogged, setUserLogged] = useState("63d7f943c5111a4cfe4b7190");
  const { userSelectd } = useSynchronousContext();

  return (
    <VStack>
      <Stack>
        <Text></Text>
      </Stack>
    </VStack>
  );
};
