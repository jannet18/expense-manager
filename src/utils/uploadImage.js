import { API_URLS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  // append image file
  formData.append("image", imageFile);
  try {
    const response = await axiosInstance?.post(
      API_URLS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    // console.log("Upload response data:", response.data);
    return response.data;
  } catch (error) {
    // if (error.response && error.response.data.message) {
    //   setError(error.response.data.message);
    // } else {
    //   setError("Something went wrong. Try again later.");
    // }
    throw error;
  }
};

export default uploadImage;
