import { BACKEND_URL } from "../constants/backend";

export const orderApi = {
  sendRequest: (data) => fetch(BACKEND_URL + "/order/send", { method: "POST", body: JSON.stringify(data) }),
};
