import { isAxiosError } from 'axios';
import { useState, useCallback } from 'react';

import { getErrorMessage } from 'src/utils/axios/axios';

// ----------------------------------------------------------------------

export type UseApiState<T = any> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type UseApiOptions = {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  showToast?: boolean;
};

// ----------------------------------------------------------------------

export function useApi<T = any>(options?: UseApiOptions) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (apiCall: () => Promise<T>): Promise<T | null> => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const result = await apiCall();
        setState({ data: result, loading: false, error: null });

        if (options?.onSuccess) {
          options.onSuccess(result);
        }

        return result;
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setState((prev) => ({ ...prev, loading: false, error: errorMessage }));

        if (options?.onError) {
          options.onError(errorMessage);
        }

        return null;
      }
    },
    [options]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  const setData = useCallback((data: T | null) => {
    setState((prev) => ({ ...prev, data }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

  return {
    ...state,
    execute,
    reset,
    setData,
    setError,
    isAxiosError,
  };
}

// ----------------------------------------------------------------------

// Hook for mutations (POST, PUT, DELETE)
export function useMutation<TData = any, TVariables = any>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseApiOptions
) {
  const [state, setState] = useState<UseApiState<TData>>({
    data: null,
    loading: false,
    error: null,
  });

  const mutate = useCallback(
    async (variables: TVariables): Promise<TData | null> => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const result = await mutationFn(variables);
        setState({ data: result, loading: false, error: null });

        if (options?.onSuccess) {
          options.onSuccess(result);
        }

        return result;
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setState((prev) => ({ ...prev, loading: false, error: errorMessage }));

        if (options?.onError) {
          options.onError(errorMessage);
        }

        return null;
      }
    },
    [mutationFn, options]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    mutate,
    reset,
    isAxiosError,
  };
}

// ----------------------------------------------------------------------

// Hook for queries (GET)
export function useQuery<T = any>(
  queryKey: string,
  queryFn: () => Promise<T>,
  options?: UseApiOptions & {
    enabled?: boolean;
    refetchOnMount?: boolean;
  }
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const { enabled = true, refetchOnMount = true } = options || {};

  const refetch = useCallback(async (): Promise<T | null> => {
    if (!enabled) return null;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const result = await queryFn();
      setState({ data: result, loading: false, error: null });

      if (options?.onSuccess) {
        options.onSuccess(result);
      }

      return result;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setState((prev) => ({ ...prev, loading: false, error: errorMessage }));

      if (options?.onError) {
        options.onError(errorMessage);
      }

      return null;
    }
  }, [queryFn, enabled, options]);

  // Auto-fetch on mount if enabled and refetchOnMount is true
  useState(() => {
    if (enabled && refetchOnMount) {
      refetch();
    }
  });

  return {
    ...state,
    refetch,
    isAxiosError,
  };
}
