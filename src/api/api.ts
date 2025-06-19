import axios from 'axios';

// ⚠️ Usa tu IP local en vez de localhost si estás en Expo Web
const api = axios.create({
  baseURL: 'http://192.168.30.30:5000/api', // Reemplazar con tu IP local real
});

export { api };

export const register = async (
  nombre: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await api.post('/auth/register', {
      nombre,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Error al registrarse';
  }
};

export const login = async (
  email: string,
  password: string
) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Error al iniciar sesión';
  }
};
