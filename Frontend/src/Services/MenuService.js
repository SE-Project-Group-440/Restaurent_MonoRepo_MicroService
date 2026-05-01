import axios from "axios";
import { BASE_URL } from "../Hooks/BaseUrl";

const api = axios.create({
  baseURL: BASE_URL,
});

const MenuService = {
  getAll: () => api.get('/restaurant/menu'),
  getById: (id) => api.get(`/restaurant/menu/${id}`),
  getByResId: (id) => api.get(`/restaurant/menu/getbyresid/${id}`),
  create: (data) => api.post('/restaurant/menu', data),
  update: (id, data) => api.put(`/restaurant/menu/${id}`, data),
  delete: (id) => api.delete(`/restaurant/menu/${id}`),
};

export default MenuService;
