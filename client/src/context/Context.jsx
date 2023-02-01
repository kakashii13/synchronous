import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { getAllChats } from "../service/chats";
import { getAll, getOne } from "../service/users";

const SynchronousContext = createContext();
export const useSynchronousContext = () => useContext(SynchronousContext);

export const SynchronousContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userContacts, setUserContacts] = useState([]);
  const [chats, setChats] = useState([]);
  const [chatSelected, setChatSelected] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  // get all users
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const users = await getAll();
  //     console.log(users);
  //     setUsers(users);
  //   };
  //   getUsers();
  //   return () => {};
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      //  receives a id from token
      const user = await getOne("63d7f943c5111a4cfe4b7190"); // hardcode id from superroot
      console.log("User:", user);

      // add user for userState
      setUser(user);
      setUserContacts(user.contacts);
    };
    getUser();
    return () => {};
  }, []);

  useEffect(() => {
    const getChats = async () => {
      const chats = await getAllChats();
      console.log("Chats:", chats);
      setChats(chats);
    };
    getChats();
    return () => {};
  }, []);

  const selectUser = (id) => {
    // filter by idUserContact
    const userFiltered = userContacts.filter((u) => u.id === id);
    console.log("User selected", userFiltered[0]);
    setUserSelected(userFiltered[0]);

    // filter chat by idUserContact and idUser
    const chat = chats.filter((c) =>
      [id, user.id].every((el) => c.participants.includes(el))
    );
    setChatSelected(chat);
  };

  return (
    <SynchronousContext.Provider
      value={{
        userContacts,
        userSelected,
        selectUser,
        chats,
        chatSelected,
        user,
      }}
    >
      {children}
    </SynchronousContext.Provider>
  );
};
