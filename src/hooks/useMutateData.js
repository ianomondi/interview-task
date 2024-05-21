import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { axiosInterceptor } from '../utls/axiosInterceptor';

const useMutateData = ({
  url,
  method = 'POST',
  onSuccessfullMutation,
  // onError,
  successMessage,
  errorMessage,
  queryKeysToInvalidate = [],
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data) => {
      if (method === 'POST') {
        return axiosInterceptor.post(url, data);
      }
      if (method === 'PUT') {
        return axiosInterceptor.put(url, data);
      }
      if (method === 'DELETE') {
        return axiosInterceptor.delete(url, { data });
      }
      throw new Error(`Invalid HTTP method: ${method}`);
    },
    {
      onSuccess: (data, variables) => {
        onSuccessfullMutation(data, variables);
        toast.success(successMessage);
        queryKeysToInvalidate.forEach((key) => queryClient.invalidateQueries(key));
      },
      onError: () => {
        toast.error(errorMessage);
      },
    }
  );

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isLoading,
  };
};

export default useMutateData;
