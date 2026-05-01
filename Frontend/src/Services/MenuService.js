import axios from "axios";
import { BASE_URL } from "../Hooks/BaseUrl";

const api = axios.create({
  baseURL: BASE_URL,
});

const MenuService = {
  getAll: () => api.get('/menu'),
  getById: (id) => api.get(`/menu/${id}`),
  getByResId: (id) => api.get(`/menu/getbyresid/${id}`),
  create: (data) => api.post('/menu', data),
  update: (id, data) => api.put(`/menu/${id}`, data),
  delete: (id) => api.delete(`/menu/${id}`),
};

export default MenuService;
