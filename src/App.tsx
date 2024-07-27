import { useState } from 'react';
import AddIssueForm from './AddIssueForm';
import Issue from './components/Issue';

import { useGetIssues } from './hooks/useGetIssues';
import { TIssue } from './types';

function App() {
  const { data, isLoading, error } = useGetIssues();
  const [filteredData, setFilteredData] = useState<TIssue[]>();
  const [filter, setFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  function filterByStatus() {
    setFilteredData(data?.filter((issue) => issue.status == filterStatus));
    setFilter(true);
  }

  async function handleSignOut() {
    const res = await fetch('http://localhost:4001/signout/', {
      method: 'POST',
      credentials: 'include',
    });
    const data = res.json();
    console.log(data);

    localStorage.removeItem('user');
  }

  function resetFilter() {
    setFilter(false);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section>
      <button onClick={handleSignOut}>Sign Out</button>
      <AddIssueForm />
      <section className='flex flex-col'>
        <p>Filter by status</p>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value={'LOW'}>LOW</option>
          <option value={'MEDIUM'}>MEDIUM</option>
          <option value={'HIGH'}>HIGH</option>
        </select>

        <button onClick={filterByStatus}>Filter</button>
        <button onClick={resetFilter}>Reset</button>
      </section>
      <section>
        {!filter
          ? data &&
            data
              .sort((a, b) => {
                return (
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
                );
              })
              .map((issue) => <Issue key={issue.id.toString()} issue={issue} />)
          : filteredData &&
            filteredData.map((el) => (
              <Issue key={el.id.toString()} issue={el} />
            ))}
      </section>
    </section>
  );
}

export default App;
