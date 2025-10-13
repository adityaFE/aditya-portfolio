export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';
export const IS_DEVELOPMENT = import.meta.env.VITE_ENVIRONMENT === 'development';

export const FRONTEND_URL = IS_DEVELOPMENT
  ? 'http://localhost:3000'
  : 'https://portfolio-adityafe.netlify.app';