import { FormEvent, useState } from 'react';
import { useCreateIssue } from './hooks/useCreateIssue';
import { Status } from './types';

function AddIssueForm() {
  const [issue, setIssue] = useState<{
    title: string;
    status: Status;
    userId: string;
  }>({
    title: '',
    status: 'LOW' as Status,
    userId: '',
  });
  const { mutate } = useCreateIssue();

  function handleCreate(e: FormEvent) {
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem('user') as string);
    console.log(localData.id);
    const updatedIssue = { ...issue, userId: localData.id };
    console.log(updatedIssue);
    mutate(updatedIssue);
    setIssue({ title: '', status: 'LOW' as Status, userId: localData.id });
  }

  return (
    <form onSubmit={handleCreate} className='flex flex-col'>
      <input
        type='text'
        onChange={(e) => setIssue({ ...issue, title: e.target.value })}
        value={issue.title}
        className='p-1 rounded mb-4'
      />
      <select
        className='p-1 rounded mb-4'
        onChange={(e) =>
          setIssue({
            ...issue,
            status: e.target.value as Status,
          })
        }
      >
        {Object.values(Status).map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <button
        type='submit'
        className='shadow-xl p-2 bg-neutral-700 rounded font-black'
      >
        Add Issue
      </button>
    </form>
  );
}
export default AddIssueForm;
