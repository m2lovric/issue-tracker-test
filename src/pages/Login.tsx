import { FormEvent, useState } from 'react';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleFetch = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ ...user }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      localStorage.setItem('user', JSON.stringify(data.user));
      console.log(data);
      setUser({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className='flex flex-col ' onSubmit={handleFetch}>
        <input
          type='email'
          placeholder='Email'
          className='p-4 rounded'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 rounded my-4'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <button type='submit' className='p-4 rounded'>
          Login
        </button>
      </form>
    </>
  );
}
export default Login;
