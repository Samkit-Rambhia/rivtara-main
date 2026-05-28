import api from "./api";

export const subscribeNewsletter = (email) =>
  api.post("/subscribers", { email });
