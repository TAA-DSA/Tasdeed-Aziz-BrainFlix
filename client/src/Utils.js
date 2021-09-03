export const NEW_URL = "http://localhost:8000/videos";

export const changeDate = (timestamp) => {
  const date = new Date(timestamp);
  const dateFormat =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  return dateFormat;
};
