import axios from "axios";
export const getData = (apiUrl, setApiUrl) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setApiUrl(data));
};

export async function postcall(apiUrl, requestBody) {
  const encodedToken = localStorage.getItem("encodedToken");

  const response = await axios.post(apiUrl, requestBody, {
    headers: { authorization: encodedToken },
  });
  return response;
}
