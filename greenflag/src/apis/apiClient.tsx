// apiClient.tsx
import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';


console.log('REACT_APP_API_KEY:', process.env.REACT_APP_API_KEY); 

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://hyprace-api.p.rapidapi.com/v1",
  headers: {
    'Content-Type': 'application/json',

    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,



    'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
  },
});

interface ApiResponse {
  items: any[]; // Update this with the actual structure of the 'items' array
}

// Define a function to fetch drivers with query parameters
export const fetchDrivers = async (pageSize: number): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get<ApiResponse>(`/seasons/{8ac404c1-7494-4b04-b8a6-ee97913de526}/drivers`, {
      params: {
        pageSize: pageSize,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching drivers: ' + error);
  }
};

export default apiClient;
