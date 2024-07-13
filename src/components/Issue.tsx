import type { Issue } from '../types';

interface IProps {
  issue: Issue;
}

function Issue({ issue }: IProps) {
  const date = new Date(issue.createdAt);
  return (
    <article className='flex flex-col items-start my-4 shadow-xl p-5'>
      <div>
        <h4 className='font-bold'>{issue.title}</h4>
        <div className=''></div>
      </div>
      <p className='font-light'>
        {date.toLocaleTimeString()} {date.toLocaleDateString()}
      </p>
    </article>
  );
}
export default Issue;
