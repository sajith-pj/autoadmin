import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({});
  const [selectedPanel, setSelectedPanel] = useState({});
  const [panels, setPanels] = useState([]);
  return (
    <AdminContext.Provider
      value={{
        profile: [userProfile, setUserProfile],
        panel: [selectedPanel, setSelectedPanel],
        panelList: [panels, setPanels]
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
