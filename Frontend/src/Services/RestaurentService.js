import axios from "axios";
import { BASE_URL } from "../Hooks/BaseUrl";

const api = axios.create({
  baseURL: BASE_URL,
});

const RestaurantService = {
  getAll: async () => {
    return await api.get('/restaurant');
  },

  getById: async (id) => {
    return await api.get(`/restaurant/${id}`);
  },

  getbyowner: async (id) => {
    return await api.get(`/restaurant/resowner/${id}`);
  },

  create: async (restaurantData) => {
    return await api.post('/restaurant', restaurantData);
  },

  update: async (id, updatedData) => {
    return await api.put(`/restaurant/${id}`, updatedData);
  },

  delete: async (id) => {
    return await api.delete(`/restaurant/${id}`);
  },
};

export default RestaurantService;
