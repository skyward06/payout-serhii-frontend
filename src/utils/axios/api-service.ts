import axios from 'axios';

import { api, endpoints, createFormData, type ResponseType, type RequestConfig } from './axios';

// ----------------------------------------------------------------------

export type AuthCredentials = {
  email: string;
  password: string;
};

export type SignUpData = AuthCredentials & {
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: string;
};

export type AuthResponse = {
  user: User;
  token: string;
  refreshToken?: string;
};

export type UploadResponse = {
  url: string;
  filename: string;
  size: number;
  mimetype: string;
};

export type CommissionActionData = {
  token?: string;
  action?: string;
};

export type UploadRequest = {
  token?: string;
  target?: string;
  formData: FormData;
};

// ----------------------------------------------------------------------

export const authService = {
  signIn: async (credentials: AuthCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(endpoints.auth.signIn, credentials);
    return response.data;
  },

  signUp: async (userData: SignUpData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(endpoints.auth.signUp, userData);
    return response.data;
  },

  signOut: async (): Promise<void> => {
    await api.post(endpoints.auth.signOut);
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(endpoints.auth.refresh);
    return response.data;
  },

  me: async (): Promise<User> => {
    const response = await api.get<User>(endpoints.auth.me);
    return response.data;
  },
};

// ----------------------------------------------------------------------

export const uploadService = {
  uploadFile: async (url: string, file: File) => {
    await axios.put(url, file, {
      headers: {
        'Content-Type': file.type || 'application/octet-stream',
      },
    });
  },

  uploadFiles: async (
    files: File[],
    additionalData?: Record<string, any>
  ): Promise<UploadResponse[]> => {
    const formData = createFormData({
      files,
      ...additionalData,
    });

    const response = await api.post<UploadResponse[]>(endpoints.upload, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
};

// ----------------------------------------------------------------------

export const commissionService = {
  performAction: async (actionData: CommissionActionData): Promise<ResponseType> => {
    const response = await api.post(endpoints.commission.action, actionData);
    return response;
  },
};

// ----------------------------------------------------------------------

export const explorerService = {
  getCurrentPrice: async (): Promise<number> => {
    const response = await api.get<number>(endpoints.explorer.getCurrentPrice);
    return response.data;
  },
};

// ----------------------------------------------------------------------

export const invoiceService = {
  exportData: async (target: string, config?: RequestConfig) => {
    const response = await api.get(endpoints.invoice(target), config);
    return response;
  },
};

export const exportService = {
  exportData: async (target: string, config?: RequestConfig) => {
    const response = await api.get(endpoints.export(target), config);
    return response;
  },
};

// ----------------------------------------------------------------------

// Generic CRUD service creator
export const createCrudService = <T extends { id: string }>(baseEndpoint: string) => ({
  getAll: async (params?: Record<string, any>): Promise<T[]> => {
    const response = await api.get<T[]>(baseEndpoint, { params });
    return response.data;
  },

  getById: async (id: string): Promise<T> => {
    const response = await api.get<T>(`${baseEndpoint}/${id}`);
    return response.data;
  },

  create: async (data: Omit<T, 'id'>): Promise<T> => {
    const response = await api.post<T>(baseEndpoint, data);
    return response.data;
  },

  update: async (id: string, data: Partial<Omit<T, 'id'>>): Promise<T> => {
    const response = await api.put<T>(`${baseEndpoint}/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`${baseEndpoint}/${id}`);
  },

  patch: async (id: string, data: Partial<Omit<T, 'id'>>): Promise<T> => {
    const response = await api.patch<T>(`${baseEndpoint}/${id}`, data);
    return response.data;
  },
});
