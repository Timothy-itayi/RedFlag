// api/rapidApi.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY as string;
console.log('API Key:', apiKey);

const baseURL = 'https://hyprace-api.p.rapidapi.com/v1';

interface ApiOptions extends AxiosRequestConfig {
  url: string;
  headers: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };
}

const apiOptions = (endpoint: string): ApiOptions => ({
  method: 'GET',
  url: `${baseURL}/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
  }
});

export async function fetchDataFromRapidApi(endpoints: string[]): Promise<any[]> {
  const requests = endpoints.map(endpoint => axios.request(apiOptions(endpoint)));

  try {
    const responses: AxiosResponse[] = await Promise.all(requests);

    // Ensure all responses are successful and JSON
    const data = responses.map(response => {
      if (response.status !== 200) {
        throw new Error(`Error fetching data from ${response.config.url}. Status code: ${response.status}`);
      }
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Response from ${response.config.url} is not JSON`);
      }
      return response.data;
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
