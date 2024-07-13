import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types';

function useGetIssues() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['issues'],
    queryFn: async (): Promise<Issue[]> => {
      const response = await fetch('http://localhost:4001/issues/');
      if (!response.ok) throw new Error('Fetch error');

      const data = await response.json();
      return data;
    },
  });

  return { data, error, isLoading };
}

export { useGetIssues };