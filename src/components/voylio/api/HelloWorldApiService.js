import axios from "axios"

const apiClient = axios.create (
    {
        baseURL: 'http://localhost:8080/api'
    }
);

export const retrieveHelloWorld = 
        () => apiClient.get('/hello')

export const retrieveHelloWorldPathVariable = 
        (username) => apiClient.get(`/hello-world/path-variable/${username}`)

export const signupUser = async (userData) => {
    try {
        const response = await apiClient.post('/signup', userData);
        return response;
    } catch (error) {
        throw error;
    }
}

export const loginUser = async (credentials) => {
    try {
      const response = await apiClient.post('/login', credentials);
      return response;
    } catch (error) {
      throw error;
    }
};
  
  