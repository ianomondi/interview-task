/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { axiosInterceptor } from '../utls/axiosInterceptor';

const usefetchData = (
  queryKey,
  url,
  config,
  errorMessage,
  dependency = true,
  noCache = false
) => {
  const queryFunction = async () => {
    const response = await axiosInterceptor.get(url, config);
    return response.data;
  };

  const { data, isLoading, error } = useQuery(queryKey, queryFunction, {
    staleTime: noCache ? 0 : 3600 * 1000,
    cacheTime: noCache ? 0 : 3600 * 1000,
    enabled: dependency,
    onError: () => {
      toast.error(errorMessage);
    },
  });

  return { data, isLoading, error };
};

export default usefetchData;
