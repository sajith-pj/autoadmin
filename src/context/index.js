import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  return (
    <AdminContext.Provider
      value={{ profile: [userProfile, setUserProfile] }}
    >
      {children}
    </AdminContext.Provider>
  );
};
