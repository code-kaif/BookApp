import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const initialStoreBooks = localStorage.getItem("Books");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  const [storeBook, setStoreBook] = useState(
    initialStoreBooks ? JSON.parse(initialStoreBooks) : undefined
  );
  const [search, setSearch] = useState("");
  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        storeBook,
        setStoreBook,
        search,
        setSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
