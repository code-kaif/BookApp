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
  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, storeBook, setStoreBook }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
