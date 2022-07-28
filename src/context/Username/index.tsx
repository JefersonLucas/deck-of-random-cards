import { createContext, Dispatch, useState } from "react";

type Children = {
  children: JSX.Element;
};

export type Username = {
  name: string;
  setName: Dispatch<React.SetStateAction<string>>;
};

const UsernameContext = createContext<Username>({} as Username);

const UsernameProvider: React.FC<Children> = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <UsernameContext.Provider value={{ name, setName }}>
      {children}
    </UsernameContext.Provider>
  );
};

export { UsernameContext, UsernameProvider };
