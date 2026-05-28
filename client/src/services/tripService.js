import api from "./api";

export const getTrips = (params) => api.get("/trips", { params });
export const getTripBySlug = (slug) => api.get(`/trips/${slug}`);
export const getDestinations = (params) => api.get("/destinations", { params });
