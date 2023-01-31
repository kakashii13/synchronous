import { useContext, useState } from "react";
import { createContext } from "react";

const SynchronousContext = createContext();
export const useSynchronousContext = () => useContext(SynchronousContext);

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

export const SynchronousContextProvider = ({ children }) => {
  const [users, setUsers] = useState(INIT_CONTACT);
  const [userSelected, setUserSelected] = useState(null);

  const selectUser = (id) => {
    const user = INIT_CONTACT.filter((u) => u.id === id);
    setUserSelected(user[0]);
  };

  return (
    <SynchronousContext.Provider value={{ users, userSelected, selectUser }}>
      {children}
    </SynchronousContext.Provider>
  );
};
