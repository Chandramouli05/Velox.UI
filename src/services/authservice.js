import axios from 'axios';

const API_BASE_URL = 'https://localhost:44380';


const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/User/login', { email, password });
    
    
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }

    console.log('Login success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);


    if (error.response) {
     
      throw error.response.data?.message || 'Login failed';
    } else if (error.request) {
      
      throw 'No response from server';
    } else {
     
      throw error.message;
    }
  }
};


export const SignupUser = async (email, password, phoneNumber, gender, role, dob) => {
  try {
   
    const genderCode = gender === "Male" ? 1 : gender === "Female" ? 2 : 3;
    const roleCode = role === "associate" ? 1 : 2;

    
    const formattedDob = new Date(dob).toISOString();

    const response = await api.post('/User/register', {
      email,
      passwordHash: password,
      phoneNumber,
      gender: genderCode,
      role: roleCode,
      dob: formattedDob,
    });

    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }

    console.log('Registration success:', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);

    if (error.response) {
      throw error.response.data?.message || 'Registration failed';
    } else if (error.request) {
      throw 'No response from server';
    } else {
      throw error.message;
    }
  }
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}

export default api;
