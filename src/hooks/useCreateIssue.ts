import { QueryClient, useMutation } from '@tanstack/react-query';
import { TIssue } from '../types';

function useCreateIssue() {
  const queryClient = new QueryClient();

  const { mutate } = useMutation({
    mutationFn: async (bodyData: { title: string }): Promise<TIssue> => {
      const response = await fetch('http://localhost:4001/issues/', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    },
    onSuccess: (newIssue) => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
      queryClient.setQueryData(['issues'], (oldIssues: TIssue[]) => [
        ...oldIssues,
        newIssue,
      ]);
    },
  });

  return { mutate };
}

export { useCreateIssue };
