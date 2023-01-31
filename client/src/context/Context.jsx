import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { getAllChats } from "../service/chats";
import { getAll } from "../service/users";

const SynchronousContext = createContext();
export const useSynchronousContext = () => useContext(SynchronousContext);

export const SynchronousContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAll();
      console.log(users);
      setUsers(users);
    };
    getUsers();
    return () => {};
  }, []);

  useEffect(() => {
    const getChats = async () => {
      const chats = await getAllChats();
      console.log(chats);
      setChats(chats);
    };
    getChats();
    return () => {};
  }, []);

  const selectUser = (id) => {
    const user = users.filter((u) => u.id === id);
    console.log(user[0]);
    setUserSelected(user[0]);
  };

  return (
    <SynchronousContext.Provider
      value={{ users, userSelected, selectUser, chats }}
    >
      {children}
    </SynchronousContext.Provider>
  );
};
