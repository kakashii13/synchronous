import { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmail = (target) => {
    setUserEmail(target.value);
  };
  const handlePassword = (target) => {
    setUserPass(target.value);
  };

  return (
    <VStack justifyContent="center" h="100%" spacing={4}>
      <Heading>Todo Maker</Heading>
      <form>
        <FormControl w="100%">
          <VStack spacing={5} justifyContent="center">
            <Input
              type="email"
              placeholder="email"
              value={userEmail}
              onChange={({ target }) => handleEmail(target)}
              maxW="300px"
            />
            <Input
              type="password"
              placeholder="password"
              value={userPass}
              onChange={({ target }) => handlePassword(target)}
              maxW="300px"
            />
            <Button type="submit" w="100%" colorScheme="purple" my="10px">
              Login
            </Button>
            {errorMessage ? <Text color="red.500">{errorMessage}</Text> : ""}
          </VStack>
        </FormControl>
      </form>
    </VStack>
  );
};
