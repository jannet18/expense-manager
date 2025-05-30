import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import axiosInstance from "../utils/axiosInstance";
import { API_URLS } from "../utils/apiPaths";
import { useNavigate } from "react-router-dom";

const UseUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token || user) return;

  //   let isMounted = true;

  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await axiosInstance.get(API_URLS.AUTH.GET_USER_DATA);

  //       if (isMounted && response.data) {
  //         updateUser(response.data);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch user info:", error);
  //       if (isMounted) {
  //         clearUser();
  //         navigate("/login");
  //       }
  //     }
  //   };

  //   fetchUserInfo();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [user, updateUser, clearUser, navigate]);
  useEffect(() => {
    if (user) return;

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    let cancelled = false;
    (async () => {
      try {
        const { data } = await axiosInstance.get(API_URLS.AUTH.GET_USER_DATA);
        if (!cancelled) updateUser(data);
      } catch (error) {
        if (!cancelled) {
          clearUser();
          navigate("/login");
        }
      }
    })();
  }, [user, updateUser, clearUser, navigate]);
  return <div>useUserAuth</div>;
};

export default UseUserAuth;
