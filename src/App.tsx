import AddIssueForm from './AddIssueForm';
import Issue from './components/Issue';

import { useGetIssues } from './hooks/useGetIssues';

function App() {
  const { data, isLoading } = useGetIssues();

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <AddIssueForm />
      <section>
        {data &&
          data
            .sort((a, b) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            })
            .map((issue) => <Issue key={issue.id.toString()} issue={issue} />)}
      </section>
    </section>
  );
}

export default App;
