import { FormEvent, useState } from 'react';
import './App.css';
import Issue from './components/Issue';
import { useCreateIssue } from './hooks/useCreateIssue';
import { useGetIssues } from './hooks/useGetIssues';

function App() {
  const { data, isLoading } = useGetIssues();
  const { mutate } = useCreateIssue();
  const [issue, setIssue] = useState<{ title: string }>({ title: '' });

  function handleCreate(e: FormEvent) {
    e.preventDefault();
    mutate(issue, {
      onSuccess: () => {
        setIssue({ title: '' });
      },
    });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <form onSubmit={handleCreate}>
        <input
          type='text'
          onChange={(e) => setIssue({ title: e.target.value })}
          value={issue.title}
        />
        <button type='submit'>Add Issue</button>
      </form>
      <section>
        {data &&
          data.map((issue) => (
            <Issue key={issue.id.toString()} issue={issue} />
          ))}
      </section>
    </section>
  );
}

export default App;
