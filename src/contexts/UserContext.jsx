import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_URLS } from "../utils/apiPaths";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to clear user data
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // optionally decode token or fetch user
  //     axiosInstance
  //       .get(API_URLS.AUTH.GET_USER_DATA, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => setUser(res.data.user))
  //       .catch(() => {
  //         localStorage.removeItem("token");
  //       });
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
