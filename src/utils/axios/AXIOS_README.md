# Axios Utils Documentation

This document explains how to use the new axios utilities that have been added to the project.

## Overview

The axios utilities provide a centralized way to handle HTTP requests with:

- Automatic authentication
- Error handling
- Request/response interceptors
- TypeScript support
- React hooks for state management

## Files Added

- `src/utils/axios.ts` - Core axios configuration and utilities
- `src/utils/api-service.ts` - Service functions for common API operations
- `src/hooks/use-api.ts` - React hooks for API state management
- `src/utils/axios-examples.ts` - Usage examples

## Core Features

### 1. Axios Instance (`src/utils/axios.ts`)

The main axios instance is configured with:

- Base URL from environment variables
- 30-second timeout
- Automatic token injection
- Response/request interceptors

```typescript
import { api, endpoints } from 'src/utils/axios';

// Simple GET request
const data = await api.get('/api/users');

// POST with data
const result = await api.post('/api/users', { name: 'John' });
```

### 2. API Services (`src/utils/api-service.ts`)

Pre-built service functions for common operations:

```typescript
import { authService, uploadService } from 'src/utils/api-service';

// Authentication
const authData = await authService.signIn({ email, password });

// File upload
const uploadResult = await uploadService.uploadFile(file);
```

### 3. React Hooks (`src/hooks/use-api.ts`)

React hooks for managing API state:

```typescript
import { useApi, useMutation, useQuery } from 'src/hooks/use-api';

// For general API calls
const { execute, loading, error, data } = useApi();

// For mutations (POST, PUT, DELETE)
const { mutate, loading, error } = useMutation(apiFunction);

// For queries (GET with auto-fetch)
const { data, loading, error, refetch } = useQuery('key', apiFunction);
```

## Usage Examples

### Basic API Call

```typescript
import { useApi } from 'src/hooks/use-api';
import { api } from 'src/utils/axios';

const MyComponent = () => {
  const { execute, loading, error, data } = useApi();

  const fetchData = async () => {
    await execute(async () => {
      const response = await api.get('/api/data');
      return response.data;
    });
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
```

### Authentication

```typescript
import { useMutation } from 'src/hooks/use-api';
import { authService } from 'src/utils/api-service';

const LoginForm = () => {
  const {
    mutate: signIn,
    loading,
    error,
  } = useMutation(authService.signIn, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      // Redirect to dashboard
    },
  });

  const handleSubmit = (credentials) => {
    signIn(credentials);
  };

  // ... form JSX
};
```

### File Upload

```typescript
import { useMutation } from 'src/hooks/use-api';
import { uploadService } from 'src/utils/api-service';

const FileUpload = () => {
  const {
    mutate: uploadFile,
    loading,
    error,
  } = useMutation(uploadService.uploadFile, {
    onSuccess: (data) => {
      console.log('File uploaded:', data.url);
    },
  });

  const handleFileSelect = (file: File) => {
    uploadFile(file);
  };

  // ... upload UI
};
```

### CRUD Operations

```typescript
import { createCrudService } from 'src/utils/api-service';
import { useQuery, useMutation } from 'src/hooks/use-api';

type User = {
  id: string;
  name: string;
  email: string;
};

const userService = createCrudService<User>('/api/users');

const UsersList = () => {
  const { data: users, loading, refetch } = useQuery('users', userService.getAll);

  const { mutate: createUser } = useMutation(userService.create, { onSuccess: () => refetch() });

  const { mutate: deleteUser } = useMutation(userService.delete, { onSuccess: () => refetch() });

  // ... component JSX
};
```

### Auto-fetching Query

```typescript
import { useQuery } from 'src/hooks/use-api';
import { explorerService } from 'src/utils/api-service';

const PriceDisplay = () => {
  const { data: price, loading, error } = useQuery(
    'current-price',
    explorerService.getCurrentPrice,
    {
      onSuccess: (data) => {
        console.log('Price updated:', data.price);
      },
    }
  );

  if (loading) return <div>Loading price...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Current Price: ${price?.price}</div>;
};
```

## Error Handling

The utilities provide comprehensive error handling:

```typescript
import { getErrorMessage, isAxiosError } from 'src/utils/axios';

try {
  await api.post('/api/data', payload);
} catch (error) {
  if (isAxiosError(error)) {
    console.log('Status:', error.response?.status);
    console.log('Data:', error.response?.data);
  }

  const message = getErrorMessage(error);
  console.log('Error message:', message);
}
```

## Configuration

The axios instance uses these environment variables:

- `VITE_SERVER_HOST` - Base URL for API requests
- `VITE_STORAGE_TOKEN_KEY` - Local storage key for auth token (defaults to 'token')

## Migration Guide

To migrate from direct axios usage to the new utilities:

### Before

```typescript
import axios from 'axios';
import { CONFIG } from 'src/config';

const response = await axios.post(`${CONFIG.SERVER_HOST}/api/upload`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
});
```

### After

```typescript
import { uploadService } from 'src/utils/api-service';

const result = await uploadService.uploadFile(file);
```

## Benefits

1. **Consistency** - Standardized error handling and request patterns
2. **Type Safety** - Full TypeScript support with proper typing
3. **Authentication** - Automatic token management
4. **React Integration** - Hooks for loading states and error handling
5. **Maintainability** - Centralized configuration and utilities
6. **Reusability** - Generic CRUD service creator

## Next Steps

1. Replace existing direct axios calls with the new utilities
2. Add more service functions as needed
3. Consider adding request caching for frequently accessed data
4. Implement retry logic for failed requests
