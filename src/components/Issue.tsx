import { TIssue, Status } from '../types';

interface IProps {
  issue: TIssue;
}

function Issue({ issue }: IProps) {
  const date = new Date(issue.createdAt);
  console.log(issue.status.valueOf());
  return (
    <article className='flex flex-col items-start my-4 shadow-xl p-5'>
      <div className='flex items-center'>
        <h4 className='font-bold text-xl'>{issue.title}</h4>
        <div
          className={` w-6 h-6 block rounded ml-3
          ${issue.status == Status.LOW && 'bg-green-500'}
          ${issue.status == Status.MEDIUM && 'bg-yellow-400'}
          ${issue.status == Status.HIGH && 'bg-rose-600'}
          `}
        ></div>
      </div>
      <p className='font-light'>
        {date.toLocaleTimeString()} {date.toLocaleDateString()}
      </p>
    </article>
  );
}
export default Issue;
