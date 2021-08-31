export const API_URL = "https://project-2-api.herokuapp.com/videos";
export const API_KEY = "2f76b36a-1b14-4a3e-8281-06b85caff6fa";

export const changeDate = (timestamp) => {
  const date = new Date(timestamp);
  const dateFormat =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  return dateFormat;
};
