import { useQueryClient, useMutation } from '@tanstack/react-query';
import { TIssue } from '../types';

function useCreateIssue() {
  const queryClient = useQueryClient();

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issues'] });
    },
  });

  return { mutate };
}

export { useCreateIssue };
