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
          data.map((issue) => (
            <Issue key={issue.id.toString()} issue={issue} />
          ))}
      </section>
    </section>
  );
}

export default App;
