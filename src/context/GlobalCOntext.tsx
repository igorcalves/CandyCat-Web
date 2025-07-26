import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Account } from "../types/Account";

type Screen = "login" | "home" | "shopping" | "tasks" | "settings";

interface GlobalContextData {
  account: Account;
  setAccount: React.Dispatch<React.SetStateAction<Account>>;
  screen: Screen;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
}

const initialAccount: Account = {
  userId: "",
  totalMoney: 0,
  financeItems: [],
};

const GlobalContext = createContext<GlobalContextData | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<Account>(initialAccount);
  const [screen, setScreen] = useState<Screen>("login");

  return (
    <GlobalContext.Provider value={{ account, setAccount, screen, setScreen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
