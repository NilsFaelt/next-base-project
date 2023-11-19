interface ToogledarkModeContextInterface {
  toogleDarkMode: boolean;
  setToogleDarkMode: Dispatch<SetStateAction<boolean>>;
}

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const DarkmodeContext = createContext<ToogledarkModeContextInterface>({
  toogleDarkMode: false,
  setToogleDarkMode: () => {},
});

export const DarkModeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toogleDarkMode, setToogleDarkMode] = useState(true);
  return (
    <DarkmodeContext.Provider value={{ toogleDarkMode, setToogleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
