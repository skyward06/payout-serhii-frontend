// Usage examples for the new axios utilities

import { useApi, useQuery, useMutation } from 'src/hooks/use-api';

import { api, downloadFile } from './axios';
import {
  authService,
  explorerService,
  commissionService,
  createCrudService,
  type AuthCredentials,
} from './api-service';

// ----------------------------------------------------------------------

// Example 1: Using the api object directly
export const useDirectApiExample = () => {
  const { execute, loading, error, data } = useApi();

  const fetchCurrentPrice = async () => {
    await execute(async () => {
      const response = await api.get('/api/explorer/getcurrentprice');
      return response.data;
    });
  };

  return { fetchCurrentPrice, loading, error, data };
};

// ----------------------------------------------------------------------

// Example 2: Using service functions
export const useAuthExample = () => {
  const {
    mutate: signIn,
    loading,
    error,
  } = useMutation((credentials: AuthCredentials) => authService.signIn(credentials), {
    onSuccess: (authData) => {
      // Store token and redirect
      localStorage.setItem('token', authData.token);
      window.location.href = '/overview';
    },
    onError: (authError) => {
      console.error('Sign in failed:', authError);
    },
  });

  return { signIn, loading, error };
};

// ----------------------------------------------------------------------

// Example 4: Using query hook for automatic fetching
export const usePriceQuery = () => {
  const { data, loading, error, refetch } = useQuery(
    'current-price',
    () => explorerService.getCurrentPrice(),
    {
      onSuccess: (priceData) => {
        console.log('Price fetched:', priceData.price);
      },
    }
  );

  return { price: data, loading, error, refetch };
};

// ----------------------------------------------------------------------

// Example 5: Using CRUD service for a generic resource
type Todo = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
};

const todoService = createCrudService<Todo>('/api/todos');

export const useTodoExample = () => {
  const { data: todos, loading, error, refetch } = useQuery('todos', () => todoService.getAll());

  const { mutate: createTodo, loading: creating } = useMutation(
    (newTodo: Omit<Todo, 'id'>) => todoService.create(newTodo),
    {
      onSuccess: () => {
        refetch(); // Refresh the list after creating
      },
    }
  );

  const { mutate: updateTodo, loading: updating } = useMutation(
    ({ id, data }: { id: string; data: Partial<Omit<Todo, 'id'>> }) => todoService.update(id, data),
    {
      onSuccess: () => {
        refetch(); // Refresh the list after updating
      },
    }
  );

  const { mutate: deleteTodo, loading: deleting } = useMutation(
    (id: string) => todoService.delete(id),
    {
      onSuccess: () => {
        refetch(); // Refresh the list after deleting
      },
    }
  );

  return {
    todos,
    loading,
    error,
    createTodo,
    creating,
    updateTodo,
    updating,
    deleteTodo,
    deleting,
    refetch,
  };
};

// ----------------------------------------------------------------------

// Example 6: Using commission service
export const useCommissionExample = () => {
  const {
    mutate: performAction,
    loading,
    error,
  } = useMutation(commissionService.performAction, {
    onSuccess: () => {
      console.log('Commission action performed successfully');
    },
  });

  const handleAction = (action: string, amount?: number) => {
    performAction({ action });
  };

  return { handleAction, loading, error };
};

// ----------------------------------------------------------------------

// Example 7: File download using the utility

export const useDownloadExample = () => {
  const { execute, loading, error } = useApi();

  const downloadReport = async (reportType: string) => {
    await execute(async () => {
      await downloadFile(`/api/export-${reportType}`, `${reportType}-report.xlsx`);
      return true; // Return something for the execute function
    });
  };

  return { downloadReport, loading, error };
};
