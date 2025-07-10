import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
} from 'axios';

import { CONFIG } from 'src/config';

// ----------------------------------------------------------------------

export type ResponseType<T = any> = {
  data: T;
  message?: string;
  success?: boolean;
  status?: number;
};

export type RequestConfig = AxiosRequestConfig & {
  skipAuth?: boolean;
  skipErrorHandling?: boolean;
};

// ----------------------------------------------------------------------

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: CONFIG.SITE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ----------------------------------------------------------------------

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token to requests if available
    const token = localStorage.getItem(CONFIG.storageTokenKey);
    if (token && !config.headers?.skipAuth) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Remove custom headers
    delete config.headers?.skipAuth;
    delete config.headers?.skipErrorHandling;

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem(CONFIG.storageTokenKey);
      window.location.href = '/auth/sign-in';
    }

    if (error.response?.status === 403) {
      // Forbidden
      console.error('Access forbidden');
    }

    if (error.response && error.response.status >= 500) {
      // Server errors
      console.error('Server error:', error.response.data);
    }

    return Promise.reject(error);
  }
);

// ----------------------------------------------------------------------

// Helper functions

export const endpoints = {
  // Authentication
  auth: {
    signIn: '/api/auth/sign-in',
    signUp: '/api/auth/sign-up',
    signOut: '/api/auth/sign-out',
    refresh: '/api/auth/refresh',
    me: '/api/auth/me',
  },
  // Upload
  upload: '/api/upload',
  // Commission
  commission: {
    action: '/api/commission/action',
  },
  // Explorer
  explorer: {
    getCurrentPrice: '/api/explorer/getcurrentprice',
  },
  // Invoice
  invoice: (target: string) => `/api/${target}`,
  // Export
  export: (target: string) => `/api/export-${target}`,
} as const;

// ----------------------------------------------------------------------

// API methods

export const api = {
  // GET request
  get: async <T = any>(url: string, config?: RequestConfig): Promise<any> => {
    const response = await axiosInstance.get<ResponseType<T>>(url, config);
    return response;
  },

  // POST request
  post: async <T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseType<T>> => {
    const response = await axiosInstance.post<any>(url, data, config);
    return response;
  },

  // PUT request
  put: async <T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseType<T>> => {
    const response = await axiosInstance.put<ResponseType<T>>(url, data, config);
    return response.data;
  },

  // PATCH request
  patch: async <T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<ResponseType<T>> => {
    const response = await axiosInstance.patch<ResponseType<T>>(url, data, config);
    return response.data;
  },

  // DELETE request
  delete: async <T = any>(url: string, config?: RequestConfig): Promise<ResponseType<T>> => {
    const response = await axiosInstance.delete<ResponseType<T>>(url, config);
    return response.data;
  },
};

// ----------------------------------------------------------------------

// Utility functions

export const isAxiosError = (error: any): error is AxiosError => axios.isAxiosError(error);

export const getErrorMessage = (error: any): string => {
  if (isAxiosError(error)) {
    const errorData = error.response?.data as any;
    const message = errorData?.message;
    if (typeof message === 'string') {
      return message;
    }
    return error.message || 'An error occurred';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unknown error occurred';
};

export const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item instanceof File || item instanceof Blob) {
          formData.append(`${key}[${index}]`, item);
        } else {
          formData.append(`${key}[${index}]`, String(item));
        }
      });
    } else if (value !== null && value !== undefined) {
      formData.append(key, String(value));
    }
  });

  return formData;
};

export const downloadFile = async (
  url: string,
  filename?: string,
  config?: RequestConfig
): Promise<void> => {
  const response = await axiosInstance.get(url, {
    ...config,
    responseType: 'blob',
  });

  const blob = new Blob([response.data]);
  const downloadUrl = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename || 'download';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(downloadUrl);
};

// ----------------------------------------------------------------------

export default axiosInstance;
