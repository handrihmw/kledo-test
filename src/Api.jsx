import axios from 'axios';

const API_BASE_URL = 'https://api.jokolodang.com/api/v1/finance/shippingComps/';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL, data);
    console.log('POST request success:', response);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const putData = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${id}`, data);
    console.log('PUT request success:', response);
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${id}`);
    console.log('DELETE request success:', response);
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};
