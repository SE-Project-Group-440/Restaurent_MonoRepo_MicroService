// src/services/deliveryService.js
import axios from 'axios';


export const getCompletedDeliveries = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/delivery/completed`);
    return response.data;
  } catch (error) {
    console.error("Error fetching completed deliveries:", error);
    throw error;
  }
};

export const getDeliveryById = async (deliveryId) => {
  try {
    const response = await axios.get(`http://localhost:5000/delivery/${deliveryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching delivery with ID ${deliveryId}:`, error);
    throw error;
  }
};

export const completeDelivery = async (deliveryId) => {
  try {
    const response = await axios.put(`http://localhost:5000/delivery/${deliveryId}/complete`);
    return response.data;
  } catch (error) {
    console.error(`Error completing delivery with ID ${deliveryId}:`, error);
    throw error;
  }
};
