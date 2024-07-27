import { useQuery } from '@tanstack/react-query';
import { TIssue } from '../types';

function useGetIssues() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['issues'],
    queryFn: async (): Promise<TIssue[]> => {
      const response = await fetch('http://localhost:4001/issues/', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Fetch error');

      console.log(response);

      const data = await response.json();
      return data;
    },
  });

  return { data, error, isLoading };
}

export { useGetIssues };
