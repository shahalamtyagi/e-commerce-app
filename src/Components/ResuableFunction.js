import axios from "axios";
export const getData = (productApi, setProductApi) => {
  fetch(productApi)
    .then((response) => response.json())
    .then((data) => setProductApi(data));
};

export async function postcall(apiUrl, requestBody) {
  const encodedToken = localStorage.getItem("encodedToken");

  const response = await axios.post(apiUrl, requestBody, {
    headers: { authorization: encodedToken },
  });
  return response;
}
