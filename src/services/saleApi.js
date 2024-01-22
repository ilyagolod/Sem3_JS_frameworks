import { BACKEND_URL } from "../constants/backend";

export const saleApi = {
  sendRequest: (data) => fetch(BACKEND_URL + "/sale/send", { method: "POST", body: JSON.stringify(data) }),
};
