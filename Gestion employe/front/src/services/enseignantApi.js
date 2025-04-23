import axios from 'axios';

const API_URL = 'http://localhost:9000/enseignant';

export const createEnseignant = async (data) => {
  return axios.post(`${API_URL}/new`, data);
};

export const getNextId = async () => {
  return axios.get(`${API_URL}/nextid`);
};

export const getAllEnseignants = async () => {
  return axios.get(`${API_URL}/all`);
};

export const updateEnseignant = async (id, data) => {
  return axios.put(`${API_URL}/update/${id}`, data);
};

export const deleteEnseignant = async (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};

export const getStatistics = async () => {
  return axios.get(`${API_URL}/stats`);
};