import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import { API_URLS } from "../utils/apiPaths";
import { useNavigate } from "react-router-dom";

const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    let isMounted = true;
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_URLS.AUTH.GET_USER_DATA);
        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        if (isMounted) {
          clearUser();
          navigate("/login");
        }
      }
    };

    fetchUserInfo();
    return () => {
      isMounted = false;
    };
  }, [updateUser, clearUser, navigate]);

  return <div>useUserAuth</div>;
};

export default useUserAuth;
